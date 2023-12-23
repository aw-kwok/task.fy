from canvas_controller import build_user, get_course_calendars

debug = False

user = build_user()
term = "Fall2023"

print(get_course_calendars(user, term))