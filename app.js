const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navber_logo')
//Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling
 const highlightMenu = () => {
   const elem = document.querySelector('.highlight')
   const homeMenu = document.querySelector('#home-page')
   const aboutMenu = document.querySelector('#about-page')
   const servicesMenu = document.querySelector('#services-page')
   letscrollPos = window.scrollY

// adds 'highlight' class to my menu items
 if(window.innerWidth > 960 && scrollPos < 600) {
   homeMenu.classList.add('highlight')
   aboutMenu.classList.remove('highlight')
  }
 }
   
   
 var LoginForm = document.getElementById("LoginForm");
 var RegForm = document.getElementById("RegForm");
 var Indicator = document.getElementById("Indicator");
 
 function register() {
 
   RegForm.style.transform = "translateX(0px)";
   LoginForm.style.transform = "translateX(0px)";
   Indicator.style.transform = "translateX(100px)";
 }
 
 function login() {
 
   RegForm.style.transform = "translateX(300px)";
   LoginForm.style.transform = "translateX(300px)";
   Indicator.style.transform = "translateX(0px)";
 }
  

