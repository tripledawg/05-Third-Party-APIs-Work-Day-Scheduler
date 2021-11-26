//Today's date

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));  //day spelled out, month spelled out, day of,  NO YEAR

 var currentHour = parseInt(moment().format('HH'));//military time

 var textAreas = $('textarea'); 

 textAreas.each(function(){
    $(this).removeClass("past present future");
     var hour = $(this).attr("id"); 
     if (hour < currentHour) {
        $(this).addClass("past");
     } else if (hour == currentHour){
        $(this).addClass("present");
     } else {
         $(this).addClass("future"); 
     }
 });


// var timeBlockEl = $('.time-block');
// var descriptionEl = $('.description');
// var rowEl = $('.row');
// var hourEl = $('.hour'); 
// var 

// localStorage.setItem("eventToSave", "value"); 



// if hour = hour 

// El.attr('class', 'present') OR  El.addClass('present');

// hour = past  

// El.attr('class', 'past') OR El.addClass('past');

// else 

// El.attr ('class', 'future') OR  El.addClass('future');