const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let bodyColor = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

buttonStart.addEventListener('click', () => {
  bodyColor = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStart.disabled = true;
});

buttonStop.addEventListener('click', () => {
  clearInterval(bodyColor);
  buttonStart.disabled = false;
});
