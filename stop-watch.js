var _setTime = 5000;

class Timer {
	constructor() {
		this.second = 0;
		this.minute = 0;
		this.hour = 0;
		this.interval = null;
		this.callback = {
			tick: null
		};
	}

	on(event, cb) {
		if (this.callback[event] === undefined) return;

		this.callback[event] = cb;
	}

	start(){

		if(this.interval != null) return;

		this.interval = setInterval(() => {
			this.second ++;
			if (this.second >= 60) {
				this.second = 0;
				this.minute ++;
			}
			
			if (minute >= 60) {
				minute = 0;
				hour ++;
			}
			this.callback["tick"](this.hour, this.minute, this.second);
		}, 1000);
	}

	pause(){
		clearInterval(this.interval);
		this.interval = null;
	}

	format(num) {
		return  (num < 10 ? '0' : '') + num;
	}

	reset() {
		this.pause();
		this.second = 0;
		this.minute = 0;
		this.hour = 0;
		
	}

}

var timer = new Timer();

/* ------------------------- btns event ---------------------------- */
	
$('#start_btn').on('click', function(){
	if (timer.interval == null) {
		timer.interval = setInterval(timer.startTimer, 1000);
	}
})


$('#pause_btn').on('click', function(){
	clearInterval(timer.interval);
	timer.interval = null;
})


$('#stop_btn').on('click', function(){
	clearInterval(timer.interval); // button을 종료시키는거고 interval은 별개이기때문에 종료되지 않음 clearInterval이라는게 있음.
	timer.reset();
	displayTime(timer.second, timer.minute, timer.hour);
	timer.interval = null;
})


/* ------------------------- display ---------------------------- */


function displayTime(second, minute, hour){
	$('#second').text(timer.format(second));
	$('#minute').text(timer.format(minute));
	$('#hour').text(timer.format(hour));
	
}

	
/*	
setTimeout(function (){
	
	alert(_setTime, '시간이 되었다.'); // 여기다가 종료시 일어날 이벤트.

}, _setTime);
*/	
	
	
	
	
	
$(document).ready(function(){
	
}) // ready function

// function stopTimer(){
// }

