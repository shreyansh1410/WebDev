let time = 1;

const intervalId = setInterval(printTime, 1000);

function printTime(){
    console.log(time);
    time++;
    if(time>10)
        clearInterval(intervalId);
}