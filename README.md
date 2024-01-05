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
- [Database Model](https://drawsql.app/teams/taskfy/diagrams/task-fy)

 #### To-Do
- ~~Implement Canvas API to read assignments~~
- ~~Write assignments to GCal, with different events for different colors~~
- ~~Migrate project to Django~~
- Create API endpoints
- Migrate database to webhosting software (AWS, Oracle Cloud), research free tiers

### Frontend
#### Documentation
- [Figma Mockup](https://www.figma.com/file/klbpd51vH3ZTmlCd7HwsqG/task.fy-design?type=design&node-id=0%3A1&mode=design&t=xtSBpJVQjfBVa1Ak-1)

#### To-Do
- ~~Create Figma landing page~~
- Create Figma dashboard
- ~~Create landing page from Figma mockup~~
- Implement [Google Sign-In](https://developers.google.com/identity/sign-in/web/sign-in) and connect it to DB\
- Create logo
- Replace temporary images on landing page

### Ideas:
- Grade calculator w/ What-If Analysis (might be challenging with permissions in Canvas API, but might still be possible)
- Implement syllabus scraping using OCR
