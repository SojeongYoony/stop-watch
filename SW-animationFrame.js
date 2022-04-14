/*
window.requestAnimationFrame
문법     : window.requestAnimationFrame(callback);
파라미터 : callback
반환 값  : 고유한 요청 id인 long 정수 값. 
           0이 아니라는 것 외에는 추측 할 수 없음.
           이 값을 window.cancelAnimationFrame()에 전달하여 콜백 취소할 수 있음.

window.cancelAnimationFrame
*/


class Timer {
	constructor() {
		this.ms = 0;
		this.second = 0;
		this.minute = 0;
		this.hour = 0;
        this.timerId = null;
		this.callbacks = {
			tick : null
		};
	}

	on(event, cb) {
		if (this.callbacks[event] === undefined) return;
		this.callbacks[event] = cb;
	}

	start(){
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

        this.timerId = window.requestAnimationFrame(this.start);
	}
 

	pause(){
        window.cancelAnimationFrame(this.timerId);
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
