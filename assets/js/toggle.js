const barIcon = document.querySelector(".navbars")
const closeIcon = document.querySelector(".navclose")
const navMenu = document.querySelector(".sidebar")



const slideOut = function () {

  navMenu.classList.toggle("change");

  
}
barIcon.addEventListener('click', slideOut)