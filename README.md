# 05 Third-Party APIs: Work Day Scheduler

**Screenshot**  
[screenshot](/assets/work-day-planner-screenshot-800x800.png)

**URL of deployed web page**
https://tripledawg.github.io/05-Third-Party-APIs-Work-Day-Scheduler/


## css
 I changed the text color to black for the past present and future classes to match the demo.  I also changed the save button's hover class color to black so that the font awesome button would change to black on hover.  

## html
I used the CSS classes already established to create my timeblocks.I used the grid layout of a container with rows and columns for the timeblaocks.  The time, text areas and save buttons were set to 1/10/1 respectively to match the demo look.  Each text area was assigned an integer reflecting military time for easy fucntion manipulation later.  The font awesome save button icon was nested in an i div inside the button div.  

## JS/JQuery
Current Day: 
I used Jquery to set the current day display to mathc the format of: day spelled out, month spelled out, day of, and NO YEAR.  
Text Area: 
In global scope I created a varable to define the current hour.  
I used JQuery to write a function that used removeClass to clear any previous past present or future classes.  I set a variable for the hour equal to the military time ids I set up in the html.  I then used if else statements for the comparison logic to assign css background color classes based on time of day.  I also used localStorage.getItem to bring up the value of any saved textarea content on page load. 
To save the textarea content I created an on click button function.  I needed a way to call the text area and its respective value so I created a variable to store the text area id and a variable to store the textarea value.  Since the button was at the same level as the text area I used the siblings method instead of child or children.  I was then able to pass those varaiables into the localStorage.setItem function.  




## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)


## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a date utility library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the homework instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
