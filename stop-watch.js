
var second = 0;
var minute = 0;
var hour = 0;
var interval = null;


function startTimer(){
	console.log('started?');
	second ++;
	
	if (second >= 60) {
		second = 0;
		minute ++;
	}
	
	if (minute >= 60) {
		minute = 0;
		hour ++;
	}
	
	displayTime(second, minute, hour);
}



let _setTime = 5000;
setTimeout(function (){
	
	alert(_setTime, '시간이 되었다.'); // 여기다가 종료시 일어날 이벤트.
	
}, _setTime);


/* ------------------------- format / display ---------------------------- */


function format(num){
	   return  (num < 10 ? '0' : '') + num
}

function displayTime(second, minute, hour){
	
	$('#second').text(format(second));
	$('#minute').text(format(minute));
	$('#hour').text(format(hour));
	
}

function reset(){
	second = 0;
	minute = 0;
	hour = 0;
}
/* ------------------------- btns event ---------------------------- */
	
$('#start_btn').on('click', function(){
	console.log('start_btn');
	if (interval == null) {
		startTimer();
		interval = setInterval(startTimer, 1000);
	}
	
})


$('#pause_btn').on('click', function(){
	console.log('pause_btn');
	clearInterval(interval);
	interval = null;
})


$('#stop_btn').on('click', function(){
	console.log('stop_btn');
	clearInterval(interval); // button을 종료시키는거고 interval은 별개이기때문에 종료되지 않음 clearInterval이라는게 있음.
	reset();
	interval = null;
	displayTime(second, minute, hour);
})

	
	
	
	
	
	
	
	
	
	
	
$(document).ready(function(){
	
}) // ready function

// function stopTimer(){
// }

