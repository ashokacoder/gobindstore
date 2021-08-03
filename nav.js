const toggle = document.querySelector('.toggal');
const navlinks = document.querySelector('.navlinks');
const close = document.querySelector('.close');



toggle.addEventListener('click', ()=>{

    navlinks.classList.toggle('active');


});

close.addEventListener('click', ()=>{

    navlinks.classList.toggle('active');
    close.style.color = 'red';

});


