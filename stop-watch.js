// var _setTime = 5000;

class Timer {
	constructor() {
		this.ms = 0;
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
			this.ms ++;

			if(this.ms >= 10) {
				this.ms = 0;
				this.second ++;
			}
			
			if (this.second >= 60) {
				this.second = 0;
				this.minute ++;
			}
			
			if (this.minute >= 60) {
				this.minute = 0;
				this.hour ++;
			}
			if(this.callbacks["tick"])
			this.callbacks["tick"](this.hour, this.minute, this.second, this.ms);
		}, 100);
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
			this.callbacks["tick"](this.hour, this.minute, this.second, this.ms);
		}
	}

	reset() {
		this.ms = 0;
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
	$(this).toggleClass('hide');
	$('#pause_btn').toggleClass('hide');
});

$('#pause_btn').on('click', function(){
	timer.pause();
	$('#start_btn').toggleClass('hide');
	$(this).toggleClass('hide');
	
});

$('#stop_btn').on('click', function(){
	timer.stop();
	$('#start_btn').removeClass('hide');
	$('#pause_btn').addClass('hide');
});

$('#print_btn').on('click', function(){
	$('<li>').append(format(timer.hour) + ' : ' + format(timer.minute) + ' : ' + format(timer.second)+ '.' + format(timer.ms)).appendTo('#time_list');
})

$('#reset_list').on('click', function(){
	$('#time_list').empty();
})

/*
$('#start_btn').on('click', timer.start.bind(timer));
$('#pause_btn').on('click', timer.pause.bind(timer));
$('#stop_btn').on('click', timer.stop.bind(timer));

// clearInterval(timer.interval); // .off??? button??? ????????????????????? interval??? ????????????????????? ???????????? ?????? clearInterval???????????? ??????.
// bind??? this??? ?????? ????????? ?????????! ?????? ???????????????
*/




/*	
setTimeout(function (){
	
	alert(_setTime, '????????? ?????????.'); // ???????????? ????????? ????????? ?????????.

}, _setTime);
*/	
	
	


