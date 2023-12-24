import os
from canvasapi import Canvas
from dotenv import load_dotenv

debug = False

def build_user():
    """
    Builds a Canvas user object from API URL, API key, and user ID stored in .env

    Parameters
    ---------

    Returns
    -------
    User
        User associated with the user ID
    """
    if (debug): print("In build_user")
    
    load_dotenv()

    # Canvas API URL
    API_URL = os.getenv("CANVAS_API_URL")

    # Canvas API key
    API_KEY = os.getenv("CANVAS_API_KEY")

    # User ID
    USER_ID = os.getenv("USER_ID")

    if (debug): print(f"User ID: USER_ID")

    # Initialize a new Canvas and User objects
    canvas = Canvas(API_URL, API_KEY)
    user = canvas.get_user(USER_ID)
    return user

def get_course_calendars(user, term):
    """
    Gets the links of all of the course calendar

    Parameters
    ---------
    user : User
        User whose calendars to query
    term : str
        The term of the courses whose calendars to import

    Returns
    -------
    list<dict>
        List of dictionaries with name and url attributes
    """
    if (debug): print("In get_course_calendars")

    # query courses in the specified term
    courses = user.get_courses(include = "term") # every course user has
    course_calendars = []

    # adds active courses in term to course_calendars
    for course in courses:
        # skip courses that do not have enrollments
        if (not hasattr(course, "enrollments")): continue

        # grab enrollment_state from course
        enrollment_state = course.enrollments[0]["enrollment_state"]

        # if term is term selected and course is active, add to calendar_links
        if (enrollment_state == "active" and course.term["name"] == term):
            if (debug): print(f'{course.name} {course.term["name"]} {course.calendar["ics"]}')
            course_calendars.append({
                "name" : course.name,
                "url" : course.calendar["ics"],
            })

    return course_calendars