// const body = document.querySelector("body");
// const images = [
//     "0.jpg",
//     "1.jpg",
//     "2.jpg",
//     "3.jpg",
//     "4.jpg",
//     "5.jpg",
// ];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// body.style.backgroundImage = `url(./img/${chosenImage})`;
// body.style.backgroundSize = `cover`;
// body.style.backgroundRepeat = `no-repeat`;

const body = document.querySelector("body");
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`;

body.appendChild(bgImage);