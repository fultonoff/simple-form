
//TOGGLE CLASS

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav__menu');


burger.addEventListener('click', (e)=>{

    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
})