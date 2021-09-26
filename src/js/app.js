import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const discountEl = document.querySelector('.discounts');
  if(screen.width > 599){
    discountEl.style.visibility = 'hidden';
  }
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});


