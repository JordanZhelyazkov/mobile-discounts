import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const discountEl = document.querySelector('.discounts');
  console.log(discountEl);
  if(screen.width < 600){
    discountEl.style.display = 'block';
  } else {
    discountEl.style.display = 'none';
  }
  console.log(screen.width);
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});


