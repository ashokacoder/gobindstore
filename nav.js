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


const prodata = document.querySelectorAll(".prodbox2");

     for(i = 0; i < prodata.length; i++){
   const addli = document.querySelectorAll(".prodbox2")[i];
    addli.getElementsByTagName("button")[0].innerHTML = `<a href="/gobindstore/contect.html">BUY NOW</a>`;


}


