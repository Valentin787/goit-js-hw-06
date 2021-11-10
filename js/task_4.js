const button = {
  targetBtn: document.querySelector("#value"),
  addBtn: document.querySelector(' [data-action="increment"]'),
  removeListenBtn: document.querySelector('[data-action="decrement"]'),
};



let counterValue = 0;

button.addBtn.addEventListener('click', () => {
   counterValue += 1;
   changeRes();
  
});

button.removeListenBtn.addEventListener('click', () => {
  counterValue -= 1;
   changeRes();
});

function changeRes() {
  button.targetBtn.textContent = counterValue
};





