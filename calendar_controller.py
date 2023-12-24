from ics import Calendar
import requests
from arrow import Arrow

debug = False

def parse_calendars(course_calendars, color_map):
    """
    Takes a list of calendars, gets the events for each, and assigns colors to the events

    Parameters
    ---------
    course_calendars : list<dict>
        List of dictionaries with name and url attributes
    color_map : dict
        Dictionary that maps course name to color in Google Calendar representation

    Returns
    -------
    list<dict>
        List of dictionaries that adhere to the Google Calendar Event representation
    """
    if (debug): print("In parse_calendars")
    gcal_event_list = []

    # iterate over each calendar in course_calendars
    for calendar in course_calendars:
        # include color fetch and assign from color_map
        color = color_map[calendar["name"]]
        c = Calendar(requests.get(calendar["url"]).text)
        for event in c.events:
            # https://developers.google.com/calendar/api/v3/reference/events
            gcal_event = {
                "summary": event.name,
                "colorId": color,
                "start":{},
                "end": {},
                "transparency": "transparent",
                "iCalUID": event.uid,
                "source": {
                    "title": calendar["name"],
                    "url": event.url,
                },
            }
            # all day event handling
            if event.all_day:
                gcal_event["start"]["date"] = event.begin.date().isoformat()
                gcal_event["end"]["date"] = event.begin.date().isoformat()
            else:
                gcal_event["start"]["dateTime"] = event.begin.isoformat()
                gcal_event["end"]["dateTime"] = event.begin.isoformat() if event.end is None else event.end.isoformat()


            gcal_event_list.append(gcal_event)
            if (debug): print(gcal_event)

    return gcal_event_list