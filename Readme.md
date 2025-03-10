## Welcome to this Calendar app 👋

![alt text](./frontend_senior/src/docs/screenshot.jpg)

## Table of Contents

- #### [Intro](#introduction)

- #### [General Features](#features)

- #### [Usage.md](./frontend_senior/src/docs/Usage.md)

- #### [App Flowchart](./frontend_senior/src/docs/app-diagram.jpeg)

- #### [Algorithm Flowchart](./frontend_senior/src/docs/algorithm-diagram.jpeg)

- #### [Data Example](./frontend_senior/src/docs/data-example.jpg)

- #### [Online deploy](https://calendar-app-test.netlify.app/)

- ### [With API Version](https://github.com/lostmart/test_recrutement-fr_senior/tree/v-API)

---

## [Introduction]

In this web app you'll find a site that shows a timetable that shows a list of events chronollogically ordered. Whenever two of these events overlap in their time duration thei are equally devided

---

## [Features]

The app is based off a mock data foun in [src/data/input.json](https://github.com/lostmart/test_recrutement-fr_senior/blob/master/frontend_senior/src/data/input.json) and it shows all events listed chronollogically.

---

## Repository Structure:

inside the `src` folder you'll find:

```
    ├── components              # (EventConotainer & HourContainer)
    ├── data                    # Mock data file
    ├── services                # Dirrerent helper functions
         ├── dataFetcher        # imports data from mock data and formats it using EventModel
         ├── detectOverlaping   # accepts the list of events and checks overlaping and modifies its width and left position if necessary
         ├── EventModel         # class for each event to ensure the right event data shcema
         ├── MinutesModel       # class to convert each starting time into minutes (hours + minutes)
         ├── orderCronollogically # fn that return all the events ordered chonologically (ascending)
         ├── placeCalculator    # fn that returns a porcentage based on the total length of 12 hours
    ├── Styles                  # scss files
         ├── abstracts          # ( _colors.scss & _variables.scss )
         ├── base               # ( _reset.scss & _typography.scss )
         ├── layout             # ( _container.scss & _hourContainer.scss )
    ├── Usage.md               # Documentation that complements docsJs
    └── App.js
    └── index.js
```

## [🔝](#table-of-contents)
