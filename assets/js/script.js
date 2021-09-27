// display current date via moment.js
var dateTime = $ ('#currentDay');
// console.log(dateTime);
var displayDate = moment().format('MMMM Do YYYY');
dateTime.text(displayDate);

// variables
var now = moment();
var currentTime = now.hours();
// console.log(currentTime);
var buttonsEl = $ ('.saveBtn');
// console.log(buttonsEl);

var timeArray = [$('#8').text(), $('#9').text(), $('#10').text(), $('#11').text(), $('#12').text(), $('#13').text(), $('#14').text(), $('#15').text(), $('#16').text(), $('#17').text()];

// colorize blocks based on time function
function placeInTime(x) {
    if (x < currentTime){
        return "past";
    } else if (x === currentTime) {
        return "present";
    } else if (x > currentTime) {
        return "future";
        }
    };

function colorizeBlock() {
    let textArray = [$('#txt1'), $('#txt2'), $('#txt3'), $('#txt4'), $('#txt5'), $('#txt6'), $('#txt7'), $('#txt8'), $('#txt9'), $('#txt10')];
    for(var i = 0; i < textArray.length; i++){
        var timeParsed = moment(timeArray[i], "hh:mm A").hours();
        textArray[i].addClass(placeInTime(timeParsed));
    }
};

var logFunction = function() {
    console.log("button clicked");
};

// create save buttons
var buttonList = $('.saveBtn');
buttonList.forEach((x) => {
    if (typeof x === "object") {
      document.getElementById(x.id).addEventListener("click", logFunction());
    }

//for (var i = 0 ; i < buttonList.length; i++) {
    //buttonList[i].addEventListener('click', logFunction());
 //}


// save text to local storage
function saveText(y) {
    y.preventDefault();
};

colorizeBlock()