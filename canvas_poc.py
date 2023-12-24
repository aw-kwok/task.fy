# Import Canvas class
import os
from canvasapi import Canvas
from dotenv import load_dotenv
from datetime import date, timedelta

from ics import Calendar
import requests

load_dotenv()

# Canvas API URL
API_URL = os.getenv("CANVAS_API_URL")

# Canvas API key
API_KEY = os.getenv("CANVAS_API_KEY")

# User ID
USER_ID = os.getenv("USER_ID")

print(f"User ID: {USER_ID}")

# How to get user ID?
# go to a Canvas page, click people, hover over link
# run https://georgetown.instructure.com/api/v1/users/self while logged in? can we use the API to get it?

# print(requests.get(f"{API_URL}/api/v1/users/self"))


# Initialize a new Canvas object
canvas = Canvas(API_URL, API_KEY)

user = canvas.get_user(USER_ID)


# get user courses in a given term
term = "Fall2023"
courses = user.get_courses(include = "term") # every course user has
calendar_links = []

for course in courses:
    # skip courses that do not have enrollments
    if (not hasattr(course, "enrollments")): continue

    # grab enrollment_state from course
    enrollment_state = course.enrollments[0]["enrollment_state"]

    # if term is term selected and course is active, add to calendar_links
    if (enrollment_state == "active" and course.term["name"] == term):
        print(f"{course.name} {course.term['name']}")
        calendar_links.append(course.calendar["ics"])

print(calendar_links)

# from calendar link, get events using ics library, can probably combine in the previous for loop and save some space
for link in calendar_links:
    c = Calendar(requests.get(link).text)
    print(c.events)

# when creating an event in gcal, can set colorId of event
# for each course, give a different color, will be able to set by the user

# get courses -> ask user to assign color to each course (from set colors) -> import into calendar
# syncing calendar will just create events again (i believe ics events have ids that will make sure duplicates are not made)
# save courses in database, only ask for a new color if there is a new course


# for each event in a calendar, create an event in google calendar with event details and the user-specified color

end_date = date.today() + timedelta(weeks=52)
print(end_date)

# get user calendar events from today to one year from today, default start_date and end_date are today
calendar_events = user.get_calendar_events_for_user(end_date = date.today() + timedelta(weeks=52))
# print(calendar_events[0].__dict__)
for event in calendar_events:
    # event.start_at and event.end_at are already in iso format in UTC time
    print(f"Start at: {event.start_at}, End at: {event.end_at}")

# get user assignment events from fall semester
start_date = "2023-08-18"
end_date = date.today()

assignment_events = user.get_calendar_events_for_user(type = "assignment", start_date = start_date, end_date = end_date)
print(assignment_events)
# https://canvas.instructure.com/doc/api/calendar_events.html
# all_day_date is due date, all_day = true means due at 11:59PM

#https://georgetown.instructure.com/api/v1/users/388859/calendar_events?type=assignment&start_date=2023-08-18&end_date=2023-12-22&context_codes[]=course_173815
# assignments need course codes to run, sample api get request above with BFM
for assignment in assignment_events:
    print(f"Assignment Name: {assignment.name}; Due at: {assignment.end_at}" )

