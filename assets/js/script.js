var dateTime = $ ('#currentDay');
console.log(dateTime);
var moment = moment().format('MMMM Do YYYY');
dateTime.text(moment);