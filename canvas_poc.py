# Import Canvas class
import os
from canvasapi import Canvas
from dotenv import load_dotenv
from datetime import date, timedelta

load_dotenv()

# Canvas API URL
API_URL = os.getenv("CANVAS_API_URL")

# Canvas API key
API_KEY = os.getenv("CANVAS_API_KEY")

# User ID
USER_ID = os.getenv("USER_ID")

print(f"API URL: {API_URL}")
print(f"API key: {API_KEY}")
print(f"User ID: {USER_ID}")

# How to get user ID?
# go to a Canvas page, click people, hover over link
# run https://georgetown.instructure.com/api/v1/users/self while logged in? can we use the API to get it?

# print(requests.get(f"{API_URL}/api/v1/users/self"))


# Initialize a new Canvas object
canvas = Canvas(API_URL, API_KEY)

user = canvas.get_user(USER_ID)
courses = user.get_courses() # every course user has

end_date = date.today() + timedelta(weeks=52)
print(end_date)

# get user calendar events from today to one year from today, default start_date and end_date are today
calendar_events = user.get_calendar_events_for_user(end_date = date.today() + timedelta(weeks=52))
# print(calendar_events[0].__dict__)
for event in calendar_events:
    print(f"Start at: ${event.start_at}, End at: ${event.end_at}")



