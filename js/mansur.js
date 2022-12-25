const dotBtns = document.querySelectorAll(".slick-dot-mansur");
const dotBtnsWrapper = document.querySelector(".slick-dots-mansur");

dotBtns[0].classList.add("active-dot")

dotBtnsWrapper.addEventListener("click", evt => {
  if(evt.target.matches(".slick-dot-mansur")){
    dotBtns.forEach(btn => {
      btn.classList.remove("active-dot");
    });
    evt.target.classList.add("active-dot");
  }
})
