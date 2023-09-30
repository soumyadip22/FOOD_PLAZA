burger = document.querySelector('.burger')
navbar = document.querySelector('#navbar')
nav = document.querySelector('.h_nav')
navlist = document.querySelector('.v_nav')

searchbox = document.querySelector('.bg')
burger.addEventListener('click',()=>{
    nav.classList.toggle('h_nav');
    navbar.classList.toggle('navbar');
    navlist.classList.toggle('v_nav');
    searchbox.classList.toggle('bg');
   
    
})