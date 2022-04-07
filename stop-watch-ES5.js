var _setTime = 5000;

function Timer(){
    this.second = 0;
    this.minute = 0;
    this.hour = 0;
    this.interval = null;
    
    Timer.prototype.startTimer = function(){
        second ++;
        
        if(second >= 60) {
            second = 0;
            minute ++;
        }

        if(minute >= 60) {
            minute = 0;
            hour ++;
        }
    }
    
    Timer.prototype.pause = function() {
        clearInterval();
        interval = null;
    }
    
    Timer.prototype.stopTimer = function() {
        
    }

 
    Timer.prototype.reset = function(){
        second = 0;
        minute = 0;
        hour = 0;
    }


}


Timer.prototype.format = function(num) {
    return (num < 10 ? '0' : '') + num;
}
Timer.prototype.displayTime = function() {
        
}