

var second = 0;
var minute = 0;
var hour = 0;
var interval = null;
var _setTime = 5000;


class Timer {
	constructor() {
	}

	startTimer (){
		console.log('startTimer is working');
		second ++;
	
		if (second >= 60) {
			second = 0;
			minute ++;
		}
		
		if (minute >= 60) {
			minute = 0;
			hour ++;
		}

	}

	format(num) {
		return  (num < 10 ? '0' : '') + num;
	}

	reset() {
		second = 0;
		minute = 0;
		hour = 0;
	}

}

var timer = new Timer();

/* ------------------------- btns event ---------------------------- */
	
$('#start_btn').on('click', function(){
	console.log('start_btn');
	if (interval == null) {
		//timer.startTimer();
		interval = setInterval(timer.startTimer(), 1000);
		console.log('start_btn - if');
	}
	console.log(hour, minute, second);
	
})


$('#pause_btn').on('click', function(){
	console.log('pause_btn');
	clearInterval(interval);
	interval = null;
})


$('#stop_btn').on('click', function(){
	console.log('stop_btn');
	clearInterval(interval); // button을 종료시키는거고 interval은 별개이기때문에 종료되지 않음 clearInterval이라는게 있음.
	timer.reset();
	interval = null;
	displayTime(timer.startTimer, second, minute, hour);
	console.log(hour, minute, second);
})


/* ------------------------- display ---------------------------- */

function displayTime(callback, second, minute, hour){
	callback(timer.startTimer);
	$('#second').text(timer.format(second));
	$('#minute').text(timer.format(minute));
	$('#hour').text(timer.format(hour));
	
}
	
	
	
	
setTimeout(function (){
	
	alert(_setTime, '시간이 되었다.'); // 여기다가 종료시 일어날 이벤트.

}, _setTime);
	
	
	
	
	
	
$(document).ready(function(){
	
}) // ready function

// function stopTimer(){
// }

