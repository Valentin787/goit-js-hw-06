
const colorRfs = {
  wrap: document.querySelector(".widget"),
  button: document.querySelector(".change-color"),
  spanVl: document.querySelector(".color"),
};

colorRfs.button.addEventListener('click', () => {
  const changeColor = getRandomHexColor();
  colorRfs.wrap.style.backgroundColor = changeColor;
  colorRfs.spanVl.textContent = changeColor;


})
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }





