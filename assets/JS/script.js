//Today's date for header//
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));  //day spelled out, month spelled out, day of,  NO YEAR
//Day Planner body//
var currentHour = parseInt(moment().format("HH"));

//function to clear out time blocks, assign background color based on currentHour variable, store the status of the background and load any previously saved events.
$("textarea").each(function () {
   $(this).removeClass("past present future");
   var hour = $(this).attr("id");//id in military time to make function simpler
   if (hour < currentHour) {
      $(this).addClass("past");
   } else if (hour == currentHour) {
      $(this).addClass("present");
   } else {
      $(this).addClass("future");
   }
   $(this).val(localStorage.getItem(hour));
});

//function to save the events typed in by user
//anonymous function inside button.each to set the textarea to a key called textAreaID and the value to a variable called textContent. This key value pair can then be passed to local storage. 
$("button").each(function (e) {
   $(this).on("click", function (e) {
      var textContent = $(this).siblings("textarea").val();
      var textAreaId = $(this).siblings("textarea").attr("id");//for getting, not just setting
      localStorage.setItem(textAreaId, textContent);
   })
})

