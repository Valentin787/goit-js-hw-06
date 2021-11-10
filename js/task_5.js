const inputName = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),

};

inputName.input.addEventListener("input", () => {
  if (inputName.input.value.trim()) {
    inputName.output.textContent = inputName.input.value;
  }
  else {
    inputName.output.textContent = "Anonymous";
  }
});

