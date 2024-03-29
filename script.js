var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function(){

	var timeEvent = document.getElementById('timeEvent');
	var lolcat = document.getElementById('lolcat');
	var image = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg';

	if (time == partyTime){
		image = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg';
  	  messageText = "IZ PARTEE TIME!!";
	} else if (time == napTime) {
		image = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg';
  	  messageText = "IZ NAP TIME…";
	} else if (time == lunchTime) {
		image = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg';
   	 messageText = "IZ NOM NOM NOM TIME!!";
	} else if (time == wakeupTime) {
  	  messageText = "IZ TIME TO GETTUP.";
	} else if (time < noon) {
		image = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg';
  	  messageText = "Good morning!";
	} else if (time > evening) {
   	 messageText = "Good Evening!";
	} else {
   	 messageText = "Good afternoon!";
	}

	timeEvent.innerText = messageText;
	lolcat.src = image;
	showCurrentTime();
};

var showCurrentTime = function(){
	var clock = document.getElementById('clock');
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = 'am';

	if (hours >= noon) {
	meridian = 'pm';}
	if (hours > noon) {
	hours = hours - 12;}
	if (minutes < 10) {
	minutes = '0' + minutes;}
	if (seconds < 10) {
	seconds = '0' + seconds;}

	var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian;
	clock.innerText = clockTime;
};

updateClock();
var oneSecond = 1000;
setInterval(updateClock,oneSecond);

var partyTimeButton = document.getElementById('partyTimeButton');
var isPartyTime = false;

var partyEvent = function() {
   if (isPartyTime === false) {
      isPartyTime = true;
	  time = partyTime;
	  partyTimeButton.innerText = 'its party time';
	   partyTimeButton.style.backgroundColor = 'rgb(#0A8DAB)';
 } else {
      isPartyTime = false;
      time = new Date().getHours();
	 partyTimeButton.innerTest = 'party is over';
	 partyTimeButton.style.backgroundColor = 'rgb(#222)';
   }
};
partyTimeButton.addEventListener ('click', partyEvent);

var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};
var napEvent = function() {
    napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
