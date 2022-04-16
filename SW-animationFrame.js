/*
window.requestAnimationFrame(RAF)
문법     : window.requestAnimationFrame(callback);
파라미터 : callback
반환 값  : 고유한 요청 id인 long 정수 값. 
           0이 아니라는 것 외에는 추측 할 수 없음.
           이 값을 window.cancelAnimationFrame()에 전달하여 콜백 취소할 수 있음.

window.cancelAnimationFrame
*/







class Timer {
// requestAnimationFrame, cancelAnimationFrame 공부하고 구현할 것.

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
