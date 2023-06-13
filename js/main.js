const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('disp');
})

$(function(){
    $('.slider__inner').slick({
      arrows: false,
      dots: true,
    });
});
