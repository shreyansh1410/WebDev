let x = 1;

function updateTime(){
    if(x>10)
        clearInterval(intervalId);
    const now = new Date();

    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    console.log(`${hours} : ${minutes} : ${seconds}`);

    
}

updateTime();
const intervalId = setInterval(updateTime, 1000);