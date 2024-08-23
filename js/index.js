const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header-list');

window.addEventListener("DOMContentLoaded", function() {
  /* Burger menu */
  menuBtn.addEventListener('click', ()=> {
    menuMobile.classList.toggle('menu--open');
  })

  /* JQuery Progres Bar */
  $( "#family" ).progressbar({
      value: 75
    });

    $( "#construction" ).progressbar({
      value: 80
    });

    $( "#finance" ).progressbar({
      value: 75
    });

    $( "#accident" ).progressbar({
      value: 90
    });
})