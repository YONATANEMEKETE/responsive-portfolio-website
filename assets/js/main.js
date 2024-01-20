/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'); 
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close'); 

const showMenu = () => {
   navMenu.classList.toggle("show-menu")
}; 

navToggle.addEventListener("click", showMenu);
navClose.addEventListener("click", showMenu)
/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById('header'); 

const bgHeader = () =>{
  this.scrollY > 50 ? header.classList.add('bg-header')
                    : header.classList.remove('bg-header')
} 


window.addEventListener('scroll', bgHeader); 

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme' 
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon') 

if(selectedTheme === 'dark'){
   document.body.classList.add(darkTheme)
} else (
   document.body.classList.remove(darkTheme)
); 

if(selectedIcon === 'ri-moon-line'){
   themeButton.classList.add(iconTheme)
} else {
   themeButton.classList.remove(iconTheme)
}


// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-sun-line' : 'ri-moon-line'

themeButton.addEventListener('click', () => {
   // Add or remove the dark / icon theme
   document.body.classList.toggle(darkTheme)
   themeButton.classList.toggle(iconTheme)
   // We save the theme and the current icon that the user chose
   localStorage.setItem('selected-theme', getCurrentTheme())
   localStorage.setItem('selected-icon', getCurrentIcon())
})