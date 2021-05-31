const imageOne = document.getElementById("imgOne");
const imageTwo = document.getElementById("imgTwo");
const imageThree = document.getElementById("imgThree");
const imageFour = document.getElementById("imgFour");
const imageFive = document.getElementById("imgFive");
const container = document.querySelector(".container");
const button = document.getElementById("btn");
const imageArray = [imageOne, imageTwo, imageThree, imageFour, imageFive];

window.onload = () => {
  imageArray.map((img) =>
    setInterval(function () {
      move(img);
    }, 300)
  );
};
const move = (img) => {
  const style = getComputedStyle(img);
  let pos = style.left;
  let posValue = parseInt(pos);
  img.style.transition = "left 1s ease-out ";
  img.style.left = posValue + 50 + "px";
  if (posValue < 1400) {
    posValue++;
  } else {
    posValue = -2000;
    img.style.left = posValue + 50 + "px";
  }
};
