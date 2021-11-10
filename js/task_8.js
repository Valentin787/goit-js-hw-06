const refs = document.querySelector(".login-form");

refs.addEventListener("submit", (event) => {
  event.preventDefault();


  if (event.currentTarget.elements[0].value && event.currentTarget.elements[1].value) {
    const { elements: { email, password } } = event.currentTarget;
    console.log(email.value, password.value);
    
  } else {
    alert("Not good!")
  }
  
});






