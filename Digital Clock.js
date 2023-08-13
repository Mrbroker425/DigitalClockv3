const hoursE1 = document.getElementById("Hours");
const MinutesE1 = document.getElementById("Minutes");
const SecondsE1 = document.getElementById("Seconds");
const ampm = document.getElementById("ampm");

function updateClock(){
    let date = new Date();
    let hours = date.getHours();
    let Minutes = date.getMinutes();
    let Seconds = date.getSeconds();
    let ampm ="AM"


    if (hours < 10) {
        hours = hours - 12
        ampm  ="PM"
    }
    
    hoursE1.innerHTML = hours;
    MinutesE1.innerHTML = Minutes;
    SecondsE1.innerHTML = Seconds;

    setTimeout(updateClock,1000);
    
}
updateClock()