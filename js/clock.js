const clock = document.querySelector("#clock");

function printClock() {
    let date = new Date();
    // let hours = date.getHours();
    // let minute = date.getMinutes();
    // let seconds = date.getSeconds();

    // let stringHours = hours.toString();
    // let stringMinute = minute.toString();
    // let stringSeconds = seconds.toString();

    // or nico solution

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;

    // clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minute < 10 ? `0${minute}` : minute}:${seconds < 10 ? `0${seconds}` : seconds}`;
    // clock.innerText = `${stringHours.padStart(2,"0")}:${stringMinute.padStart(2,"0")}:${stringSeconds.padStart(2,"0")}`;
}

setInterval(printClock, 1000);