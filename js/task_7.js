const inputRef = document.querySelector("#font-size-control");

const spanRef = document.querySelector("#text");

inputRef.oninput = function() {
  spanRef.style.fontSize = inputRef.value + "px"
}