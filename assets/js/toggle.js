const barIcon = document.querySelector(".navbars")
const closeIcon = document.querySelector(".navclose")
const navMenu = document.querySelector(".sidebar")



const slideOut = function () {
  navMenu.classList.toggle("change");
  barIcon.classList.toggle("openbars")
  closeIcon.classList.toggle("closebars")
}
barIcon.addEventListener('click', slideOut)
closeIcon.addEventListener('click', slideOut)