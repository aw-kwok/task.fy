from canvas_controller import *
from calendar_controller import *

debug = False

user = build_user()
term = "Fall2023"

course_calendars = get_course_calendars(user, term)
print(course_calendars)

# assign each course to a different color
color_map = {}
i = 0
for calendar in course_calendars:
    name = calendar["name"]
    color = i
    color_map[name] = color
    i += 1

print(color_map)

event_list = parse_calendars(course_calendars, color_map)

print(event_list)
