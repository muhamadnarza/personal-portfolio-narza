// humber 
const humber = document.querySelector('#humber');
const navmenu = document.querySelector('#nav-menu');

humber.addEventListener('click', function () {
    humber.classList.toggle('humber-active');
    navmenu.classList.toggle('hidden');
});
// navbar fixed
window.onscroll = function (){
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if (window.pageYOffset > fixednav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.add('navbar-fixed');
    }
};