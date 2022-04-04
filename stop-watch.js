var _setTime = 5000;

class Timer {
	constructor() {
		this.second = 0;
		this.minute = 0;
		this.hour = 0;
		this.interval = null;
		this.callbacks = {
			tick : null,
		};
	}

	on(event, cb) {
		if (this.callbacks[event] === undefined) return;
		this.callbacks[event] = cb;
	}

	start(){
		if(this.interval != null) return;

		this.interval = setInterval(() => {
			this.second ++;
			if (this.second >= 60) {
				this.second = 0;
				this.minute ++;
			}
			
			if (this.minute >= 60) {
				this.minute = 0;
				this.hour ++;
			}
			if(this.callbacks["tick"])
			this.callbacks["tick"](this.hour, this.minute, this.second);
		}, 1000);
	}

	pause(){
		if(this.interval === null) return;
		clearInterval(this.interval);
		this.interval = null;
	}

	stop() {
		this.pause();
		this.reset();
		if(this.callbacks["tick"]) {
			this.callbacks["tick"](this.hour, this.minute, this.second);
		}
	}



	reset() {
		this.second = 0;
		this.minute = 0;
		this.hour = 0;
		
	}

}



/* ------------------------- display ---------------------------- */


function format(num) {
	return  (num < 10 ? '0' : '') + num;
}

function displayTime(hour, minute, second){
	$('#hour').text(format(hour));
	$('#minute').text(format(minute));
	$('#second').text(format(second));
}

const timer = new Timer();
timer.on("tick", displayTime);


/* ------------------------- btns event ---------------------------- */

$('#start_btn').on('click', timer.start);
$('#pause_btn').on('click', timer.pause);
$('#stop_btn').on('click', timer.stop);

//clearInterval(timer.interval); // .off는 button을 종료시키는거고 interval은 별개이기때문에 종료되지 않음 clearInterval이라는게 있음.













/*	
setTimeout(function (){
	
	alert(_setTime, '시간이 되었다.'); // 여기다가 종료시 일어날 이벤트.

}, _setTime);
*/	
	
	
	
	
	
$(document).ready(function(){
	
}) // ready function

// function stopTimer(){
// }

