// display current date via moment.js
var dateTime = $ ('#currentDay');
console.log(dateTime);
var displayDate = moment().format('MMMM Do YYYY');
dateTime.text(displayDate);

// variables
var now = moment();
var currentTime = now.hours();
console.log(currentTime);
var buttonsEl = $ ('.saveBtn');
console.log(buttonsEl);

var timeArray = [$('#8').text(), $('#9').text(), $('#10').text(), $('#11').text(), $('12').text(), $('13').text(), $('14').text(), $('15').text(), $('16').text(), $('17').text()];
var timeParsed = moment(timeArray[0], "hh:mm A").hours();

// colorize blocks based on time function
function placeInTime() {
    if (timeParsed < currentTime){
        return "past";
    } else if (timeParsed === currentTime) {
        return "present";
    } else if (timeParsed > currentTime) {
        return "future";
        }
    };

function colorizeBlock() {
    let textBlockEl = $('#8');
    textBlockEl.addClass(placeInTime());
}

colorizeBlock();

// save text to local storage
