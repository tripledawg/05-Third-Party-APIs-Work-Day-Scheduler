//Today's date

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM do"));  //day spelled out, month spelled out, do NO YEAR