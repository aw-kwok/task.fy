import datetime
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

debug = True

def authenticate():
    """
    Authenticates the user

    Parameters
    ---------

    Returns
    -------
    Credentials
        Credentials object associated with a user's credentials
    """
    if (debug): print("In authenticate")

    # If modifying these scopes, delete the file token.json.
    SCOPES = ["https://www.googleapis.com/auth/calendar"]

    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists("token.json"):
        if (debug): print("token.json found")
        creds = Credentials.from_authorized_user_file("token.json", SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            if (debug): print("Refreshing token")
            creds.refresh(Request())
        else:
            if (debug): print("Accessing credentials.json")
            flow = InstalledAppFlow.from_client_secrets_file(
                "credentials.json", SCOPES
            )
            creds = flow.run_local_server(port=0)
            # Save the credentials for the next run
            with open("token.json", "w") as token:
                if (debug): print("Writing credentials to token.json")
                token.write(creds.to_json())
    return creds

def list_calendars():
    """
    Gets a user's calendarList from Google Calendar

    Parameters
    ---------
    
    Returns
    -------
    List<Calendar>
        List of calendars on user's calendarList
    """
    if (debug): print("In list_calendars")

    creds = authenticate()
    with build("calendar", "v3", credentials=creds) as service:
        calendar_list = service.calendarList().list().execute()
        if (debug):
            for item in calendar_list["items"]:
                print(item["summary"])
    
    return calendar_list

def get_calendar(calendar_id):
    """
    Gets a calendar from Google Calendar

    Parameters
    ---------
    str : calendar_id
        ID of an individual Google Calendar
    
    Returns
    -------
    Calendar
        Calendar object associated with calendar_id
    """
    if (debug): print("In get_calendar")

    creds = authenticate()
    with build("calendar", "v3", credentials=creds) as service:
        try:
            calendar = service.calendars().get(calendarId = calendar_id).execute()
            if (debug): print(calendar["timeZone"])
            if (debug): print(calendar["summary"])
        except:
            print("Calendar not found")
            return None

    return calendar

def insert_calendar(name, color_hex):
    """
    Inserts a calendar into Google Calendar, and inserts it into the calendarList

    Parameters
    ---------
    str : name
       Name of Google Calendar to insert
    str : color_id
        Color ID of Google Calendar to insert
       
    Returns
    -------
    Calendar
        Calendar object
    """
    if (debug): print("In insert_calendar")

    creds = authenticate()

    with build("calendar", "v3", credentials=creds) as service:
        try:
            # build calendar object
            calendar = {
                "description": "imported from task.fy",
                "summary": name,
            }

            # insert calendar into calendars
            calendar = service.calendars().insert(body=calendar).execute()
            if (debug): print("Calendar created")

            # build calendarList object from calendar
            calendar_list = {
                "id": calendar["id"],
                "backgroundColor": color_hex,
                "foregroundColor": "#000000",
                "selected": True,
            }

            # updates calendarList with the color
            calendar_list = service.calendarList().insert(colorRgbFormat=True, body=calendar_list).execute()
            if (debug): print("Calendar inserted into calendarList")
            if (debug): print(f"Calendar List: {calendar_list}")
        except:
            print("Failed to insert calendar")
            return None

    return calendar

def import_events(event_list, calendar_id):
    """
    Imports events into a Google Calendar calendar

    Parameters
    ---------
    list<dict> : event_list
       List of events to be imported into Google Calendar
    str : calendar_id
        ID of Google Calendar to import events into
       
    Returns
    -------
    Calendar
        Calendar object
    """
    if (debug): print("In import_events")

    creds = authenticate()

    # if calendar does not exist, return and throw error message
    calendar = get_calendar(calendar_id)
    if calendar is None:
        print("Calendar not found")
        return None

    with build("calendar", "v3", credentials=creds) as service:
        # iterate over event_list, inserting each event into Google Calendar
        for event in event_list:
            if (debug): print(f"Event: {event}")
            try:
                calendar = service.events().import_(calendarId=calendar_id, body=event).execute()
                if (debug): print(f'{event["summary"]} imported')
            except:
                print(f'Failed to insert event: {event["summary"]}')

    return calendar

def update_events(event_list, calendar_id):
    """
    Updates events into a Google Calendar calendar, all events must be in the calendar

    Parameters
    ---------
    list<dict> : event_list
       List of events to be updated
    str : calendar_id
        ID of Google Calendar to update events into
       
    Returns
    -------
    Calendar
        Calendar object
    """
    if (debug): print("In update_events")

    creds = authenticate()

    # if calendar does not exist, return and throw error message
    calendar = get_calendar(calendar_id)
    if calendar is None:
        print("Calendar not found")
        return None

    with build("calendar", "v3", credentials=creds) as service:
        # iterate over event_list, updating each event
        for event in event_list:
            if (debug): print(f"Event: {event}")
            try:
                # query old_event with iCalUID
                old_event = service.events().list(calendarId=calendar_id, iCalUID=event["iCalUID"]).execute()
                if (debug): print(old_event["items"][0])
                calendar = service.events().update(calendarId=calendar_id, eventId=old_event["items"][0]["id"], body=event).execute()
                if (debug): print(f'{event["summary"]} updated')
            except:
                print(f'Failed to update event: {event["summary"]}')

    return calendar

def sync_events(event_list, calendar_id):
    """
    Imports events into a Google Calendar calendar if they don't exist, and updates them if they do

    Parameters
    ---------
    list<dict> : event_list
       List of events to be imported into Google Calendar
    str : calendar_id
        ID of Google Calendar to import events into
       
    Returns
    -------
    Calendar
        Calendar object
    """
    if (debug): print("In sync_events")

    creds = authenticate()

    # if calendar does not exist, return and throw error message
    calendar = get_calendar(calendar_id)
    if calendar is None:
        print("Calendar not found")
        return None
    
    with build("calendar", "v3", credentials=creds) as service:
        # iterate over event_list, inserting each event into Google Calendar
        for event in event_list:
            if (debug): print(f"Event: {event}")

            # query old_event with iCalUID
            old_event = service.events().list(calendarId=calendar_id, iCalUID=event["iCalUID"]).execute()

            # assign old_events to the "items" array of matching entries
            old_event = old_event["items"]
            
            # if list is empty, import as normal
            if not old_event:
                try:
                    calendar = service.events().import_(calendarId=calendar_id, body=event).execute()
                    if (debug): print(f'{event["summary"]} imported')
                except:
                    print(f'Failed to insert event: {event["summary"]}')
            
            # if list not empty, update
            else:
                try:
                    # get old_event_id from the list of events (one event, each iCalUID is unique)
                    old_event_id = old_event[0]["id"]
                    calendar = service.events().update(calendarId=calendar_id, eventId=old_event_id, body=event).execute()
                    if (debug): print(f'{event["summary"]} updated')
                except:
                    print(f'Failed to update event: {event["summary"]}')
        return calendar


def list_events(calendar_id):
    """
    Lists events in a Google Calendar

    Parameters
    ---------
    str : calendar_id
        ID of Google Calendar whose events to query
       
    Returns
    -------
    list<dict>
        List of events
    """
    if (debug): print("In list_events")

    creds = authenticate()

    with build("calendar", "v3", credentials=creds) as service:
        # iterate over event_list, inserting each event into Google Calendar
        events = service.events().list(calendarId=calendar_id).execute()
        if (debug):
            for item in events["items"]:
                print(item["summary"])

    return events["items"]