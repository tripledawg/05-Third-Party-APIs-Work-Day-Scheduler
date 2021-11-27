
//Today's date for header//
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));  //day spelled out, month spelled out, day of,  NO YEAR
//Day Planner body//
var currentHour = parseInt(moment().format("HH"));//military time

$("textarea").each(function () {
   $(this).removeClass("past present future");
   var hour = $(this).attr("id");
   if (hour < currentHour) {
      $(this).addClass("past");
   } else if (hour == currentHour) {
      $(this).addClass("present");
   } else {
      $(this).addClass("future");
   }
   $(this).val(localStorage.getItem(hour));
});
// get the siblings of the button that are textareas
// get the value of the textareas
// assign that value to localStorage with the key being the textarea's id
$("button").each(function (e) {
   $(this).on("click", function (e) {
      var textContent = $(this).siblings("textarea").val();
      var textAreaId = $(this).siblings("textarea").attr("id");//for getting, not just setting
      localStorage.setItem(textAreaId, textContent);
   })
})

