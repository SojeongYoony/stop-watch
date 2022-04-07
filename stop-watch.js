// var _setTime = 5000;

class Timer {
	constructor() {
		this.second = 0;
		this.minute = 0;
		this.hour = 0;
		this.interval = null;
		this.callbacks = {
			tick : null
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

$('#start_btn').on('click', function(){
	timer.start();
	$(this).prop("disabled", true);
	$('#pause_btn').prop("disabled", false);
});

$('#pause_btn').on('click', function(){
	timer.pause();
	$('#start_btn').prop("disabled", false);
	$(this).prop("disabled", true);
});

$('#stop_btn').on('click', function(){
	timer.stop();
	$('.btns').prop("disabled", false);
});

$('#print_btn').on('click', function(){
	$('<li>').append(format(timer.hour) + ' : ' + format(timer.minute) + ' : ' + format(timer.second)).appendTo('#time_list');
})


/*
$('#start_btn').on('click', timer.start.bind(timer));
$('#pause_btn').on('click', timer.pause.bind(timer));
$('#stop_btn').on('click', timer.stop.bind(timer));

// clearInterval(timer.interval); // .off는 button을 종료시키는거고 interval은 별개이기때문에 종료되지 않음 clearInterval이라는게 있음.
// bind는 this가 뭔지 모를때 이거야! 하고 정해주는거
*/




/*	
setTimeout(function (){
	
	alert(_setTime, '시간이 되었다.'); // 여기다가 종료시 일어날 이벤트.

}, _setTime);
*/	
	
	


