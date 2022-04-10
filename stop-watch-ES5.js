//var _setTime = 5000;

function Timer(){
    
    this.second = 0;
    this.minute = 0;
    this.hour = 0;
    this.interval = null;
    this.callbacks = {
        tick : null
    }

};

    Timer.prototype.on = function(event, cb) { 
        if(this.callbacks[event] === undefined) return;
        this.callbacks[event] = cb;
    };

    Timer.prototype.start = function(){
        if(this.interval != null) return;

        this.interval = setInterval(function(){
            this.second ++;
            
            if(this.second >= 60) {
                this.second = 0;
                this.minute ++;
            }
    
            if(this.minute >= 60) {
                this.minute = 0;
                this.hour ++;
            }
            
            if(this.callbacks['tick'])
            this.callbacks['tick'](this.hour, this.minute, this.second);
        }, 1000)

    };
    
    Timer.prototype.pause = function() {
        if(this.interval === null) return;
        clearInterval(this.interval);
        this.interval = null;
    };
    
    Timer.prototype.stop = function() {
        this.pause();
        this.reset();
        if(this.callbacks[tick]) {
            this.callbacks[tick](this.hour, this.minute, this.second);
        }
    };

 
    Timer.prototype.reset = function(){
        this.second = 0;
        this.minute = 0;
        this.hour = 0;
    };



function format(num) {
    return (num < 10 ? '0' : '') + num;
}
    

function displayTime(hour, minute, second){
    $('#hour').text(format(hour));
	$('#minute').text(format(minute));
	$('#second').text(format(second));
}



var timer = new Timer();
timer.on('tick', displayTime);


/* ------------------------- btns event ---------------------------- */

$('#start_btn').on('click', function(){
	timer.start();
});
$('#pause_btn').on('click', function(){
	timer.pause();
});
$('#stop_btn').on('click', function(){
	timer.stop();
});