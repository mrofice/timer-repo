let timertTxt = document.getElementById("timertTxt");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let bol = false;
let sec = 0;
let min = 0;
let ho  = 0;

function updateText() {
    if (bol) {
        timertTxt.textContent = `${String(ho).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
        sec++;
        setTimeout(updateText, 1000);
        if (sec === 60){
            sec = 0;
            min++;
            if(min === 60){
                min = 0;
                ho++;
            }
        }
    }
}

start.onclick = function(){
    if(!bol){
        bol = true;
        updateText();
    }
}

stop.onclick = function(){
    bol = false;
}

reset.onclick = function(){
    bol = false;
    sec = 0;
    min = 0;
    ho  = 0;
    timertTxt.textContent = `00:00:00`;
}
