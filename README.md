# task.fy
![Python Badge](https://img.shields.io/badge/Python-3.9-3776AB.svg?style=flat&logo=python&logoColor=white)
![MIT License Badge](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features
- Uses Canvas API to fetch course calendar data from the user

## 📝 To-Do List
### Backend
#### Documentation
- [GCal integration + API](https://developers.google.com/calendar/api/guides/overview)
- [GCal API](https://googleapis.github.io/google-api-python-client/docs/dyn/calendar_v3.html)
- [Canvas API integration](https://canvas.instructure.com/doc/api/)
- [Canvas API Python library](https://github.com/ucfopen/canvasapi/blob/524bfd707326dc6d154f886f0f2270d19fd1ffa1/README.md#installation)

 #### To-Do
- ~~Implement Canvas API to read assignments~~
- ~~Write assignments to GCal, with different events for different colors~~
- Create database to store user data, automatically assigning a user an ID upon login

#### Map university semesters by each college
- Georgetown: f'{semester_name}{full_year}' (Fall2023) - georgetown.instructure.com
- Columbia: f'{semester_name} {full_year}' (Fall 2023) - courseworks2.columbia.edu
- Cornell: f'{semester_name} {full_year}' (Fall 2023) - canvas.cornell.edu
- Princeton - f'{semester_name} {full_year}' (Fall 2023) - princeton.instructure.com
- Rutgers: f'{semester_name} {full_year}' (Fall 2023) - rutgers.instructure.com
- Notre Dame: 
- UPenn: 
- Yale: f'{semester_name} {full_year}' (Fall 2023)
- UMD: f'{semester_name} {full_year}' (Fall 2023) - umd.instructure.com
- UChicago: f'{full_year}.{quarter_code}' (2023.01) - quarter system (01 - winter, 02 - spring, 03 - summer, 04 - fall) - canvas.uchicago.edu
- Middlesex County College - f'{semester_name} {full_year}' (Fall 2023) - middlesexcc.instructure.com
- Indiana University f'{semester_name} {full_year}' (Fall 2023) - iu.instructure.com
- MIT: f'{semester_name} Term (AY {ay_start}-{ay_end}' (Fall Term (AY 2023-2024)) - canvas.mit.edu *Some MIT courses (CS) use their own website, not Canvas
- BC: 
- Kean: f'{semester_name} {full_year}' (Fall 2023) - kean.instructure.com
- Widener:
- URichmond:



### Frontend
#### To-Do
- Create Figma mockup

### Ideas:
- Grade calculator w/ What-If Analysis (might be challenging with permissions in Canvas API, but might still be possible)
- Implement syllabus scraping using OCR
