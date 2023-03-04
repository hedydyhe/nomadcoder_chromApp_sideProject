const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const randomImg = images[Math.floor(Math.random() * images.length)];
const imgSrc = `img/${randomImg}`;

document.body.style.backgroundImage = `url(${imgSrc})`;
