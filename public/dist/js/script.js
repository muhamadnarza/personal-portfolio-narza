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
    const top = document.querySelector('#top');

    if (window.pageYOffset > fixednav){
        header.classList.add('navbar-fixed');
        top.classList.remove('hidden');
        top.classList.add('flex');
    }else{
        header.classList.add('navbar-fixed');
        top.classList.remove('flex');
        top.classList.add('hidden');
    }
};

// klik dluar humber
window.addEventListener('click', function(e){
    if (e.target != humber && e.target != navmenu){
        humber.classList.remove('humber-active');
        navmenu.classList.add('hidden');
    }
})

// dark mode toggle
const darktoggel = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darktoggel.addEventListener('click', function(){
    if(darktoggel.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark'
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light'
    }
})

// posisi toggle berdasarkan mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darktoggel.checked = 'true'
  } else {
    darktoggel.checked = 'false'
}