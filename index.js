function getTime() {
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let seconds = date.getSeconds();
    let period = "";

    if(hour >= 12){
        period = "PM";
    }else{
        period = "AM";
    }

    if(hour === 0){
        hour = 12;
    }else{
        if(hour > 12){
            hour = hour - 12;
        }
    }

    hour = updateDisplay(hour);
    min = updateDisplay(min);
    seconds = updateDisplay(seconds);

    document.getElementById("clock").innerText = hour +" : "+ min +" : "+ seconds +" : "+ period;

    setTimeout(getTime, 1000);
}

function updateDisplay(time){
    if(time < 10) return "0"+time;
    else return time;
}


getTime();


