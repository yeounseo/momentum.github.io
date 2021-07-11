const clock = document.querySelector("#clock");

const CHRISTMAS_EVE = new Date('2021-12-24:00:00:00+0900');

function getTime() {
    const today = new Date();

    const dday = CHRISTMAS_EVE.getTime() - today.getTime();

    const ddayDays = Math.floor(dday / (1000 * 60 * 60 * 24));
    const ddayHours = Math.floor((dday - ddayDays * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const ddayMinutes = Math.floor((dday % (1000 * 60 * 60)) / (1000 * 60));
    const ddaySeconds = Math.floor((dday % (1000 * 60)) / 1000);

    console.log(ddayDays);
    console.log(ddayHours);
    console.log(ddayMinutes);
    console.log(ddaySeconds);

    clock.innerText = `${ddayDays}d ${ddayHours < 10 ? `0${ddayHours}` : ddayHours}h ${ddayMinutes < 10 ? `0${ddayMinutes}` : ddayMinutes}m ${ddaySeconds < 10 ? `0${ddaySeconds}` : ddaySeconds}s`;
}

getTime();
setInterval(getTime, 1000);