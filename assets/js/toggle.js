const barIcon = document.querySelector(".navbars")
const closeIcon = document.querySelector(".navclose")
const navMenu = document.querySelector(".sidebar")

const slideOut = function () {
  //toggle function for the nav menu
  navMenu.classList.toggle("change");
  barIcon.classList.toggle("openbars")
  closeIcon.classList.toggle("closebars")
}
//click listeners for open and close icon
barIcon.addEventListener('click', slideOut)
closeIcon.addEventListener('click', slideOut)