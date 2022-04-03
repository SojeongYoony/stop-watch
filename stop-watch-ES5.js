var _setTime = 5000;

function Timer(){
    var second = 0;
    var minute = 0;
    var hour = 0;
    var interval = null;
    
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

    Timer.prototype.format = function(num) {
        return (num < 10 ? '0' : '') + num;
    }

    Timer.prototype.reset = function(){
        second = 0;
        minute = 0;
        hour = 0;
    }

    Timer.prototype.displayTime = function() {
        
    }
}