from canvas_controller import *
from calendar_controller import *
from gcal_controller import *
import os
from dotenv import load_dotenv

debug = True

load_dotenv()

user = build_user()
term = "Fall2023"

course_calendars = get_course_calendars(user, term)
if (debug): print(f"Course calendars: {course_calendars}")

# assign each course to a different color, have user input preferences
color_map = {}
i = 0
for calendar in course_calendars:
    name = calendar["name"]
    color = i
    color_map[name] = color
    i += 1

if (debug): print(f"Color map: {color_map}")

# gets event list for each calendar, assigning the specific color of the calendar to each event
event_list = parse_calendars(course_calendars, color_map)

if (debug): print(f"Event list: {event_list}")

# gets calendarList for user
calendar_list = list_calendars()
if (debug): print(calendar_list)

# if there is a calendar ID associated with account, try to fetch from DB
# retrieves calendar with calendar ID
# put in env for convenience for right now
calendar_id = os.getenv("CALENDAR_ID")
calendar = get_calendar(calendar_id)

# if calendar doesn't exist, add calendar
color_hex = "#B200ED" # add functionality so user can pick this color
calendar_name = "task.fy"

if not calendar:
    calendar = insert_calendar(calendar_name, color_hex)

if (debug): print(f"Calendar: {calendar}")
calendar_id = calendar["id"]

# import events from event_list into calendar
calendar = update_events(event_list, calendar_id)

#list_events(calendar_id)
