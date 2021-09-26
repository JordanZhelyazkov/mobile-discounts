import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const discountEl = document.querySelector('.discounts');
  console.log(discountEl);
  if(screen.width < 600){
    discountEl.style.visibility = 'visible';
  } else {
    discountEl.style.visibility = 'hidden';
  }
  console.log(screen.width);
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});


