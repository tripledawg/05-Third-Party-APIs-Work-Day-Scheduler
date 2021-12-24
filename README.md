# 05 Third-Party APIs: Work Day Scheduler

**Screenshot**  
![](/assets/work-day-planner-screenshot-800x800.png)
![](/assets/screenshot2.png)

**URL of deployed web page**
https://tripledawg.github.io/05-Third-Party-APIs-Work-Day-Scheduler/

# Description
This applcation provides a work day at a glance.  The header displays the current day and the timeblocks are color coded with the current hour colored red, hours in the past colored grey, and timeblocks in the future colored green. Appointments can be saved for each time block and are saved in local storage.   


# Technologies Used
JS, Jquery, html, css, momentJS API
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



## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```


