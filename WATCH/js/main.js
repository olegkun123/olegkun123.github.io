let clock = document.querySelector("#clock"),
    isTimeShowed = false,
    interval;

function timer() {


    // COUNTS TIME

    let time = new Date(),
        h = time.getHours().toString(),
        m = time.getMinutes().toString(),
        s = time.getSeconds().toString();


    // SWITCHES THE BACKGROUND COLOR BY CHANGING OF THE TINE

    if (h.length < 2) {
        h = "0" + h;
    }
    if (m.length < 2) {
        m = "0" + m;
    }
    if (s.length < 2) {
        s = "0" + s;
    }
    clock.innerHTML = h + ":" + m + ":" + s;
    document.body.style.backgroundColor = "#" + h + m + s;
}


// CLOCK SHOW SWITCHER

function start() {
    isTimeShowed = !isTimeShowed;
    timer();
    if(isTimeShowed) {
        enableTimer();
    }
    else {
        disableTimer();
    }
}

function enableTimer() {
    interval = setInterval(timer, 1000);
}


// DISABLES TIMER AND SETS THE DEFAULT BACKGROUND COLOR

function disableTimer() {
    clearInterval(interval);
    clock.innerHTML = "00:00:00";
    document.body.style.backgroundColor = "rgb(1, 4, 49)";
}