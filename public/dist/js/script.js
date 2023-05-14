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

// gotowa 
function goWhatsapp(){
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;

    var url = "https://wa.me/+62895606108943?text=" + "Nama : "  +  nama + "%0a" + "Email : "  +  email + "%0a" + "Pesan : " + pesan;

window.open(url, "_blank").focus();
}

// validation
// var namaerror = document.getElementById('nama-error');
// var emailerror = document.getElementById('email-error');
// var pesanerror = document.getElementById('pesan-error');
// var kirimerror = document.getElementById('kirim-error');

// function validatenama(){
//     var nama = document.getElementById('nama').value;

//     if (nama.length ==0 ) {
//         namaerror.innerHTML = 'Nama is required';
//         return false;
//     }
//     if (!nama.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
//         namaerror.innerHTML = 'Write full name';
//         return false;
//     }
//     namaerror.innerHTML = 'valid';
//         return true;
// }
// function validateemail(){
//     var email = document.getElementById('email').value;

//     if (email.length ==0 ) {
//         emailerror.innerHTML = 'Email is required';
//         return false;
//     }
//     if (!email.match(/^[A-Za-z\._\-[0-9]*[@]*[A-Za-z]*[\.][a-z]{2,4}$/)) {
//         emailerror.innerHTML = 'email invalid'
//         return false;
//     }
//     emailerror.innerHTML = 'valid';
//         return true;
// }
// function validatepesan(){
//     var pesan = document.getElementById('pesan').value;
//     var required = 20;
//     var left = required - pesan.length;

//     if (left > 0 ) {
//         pesanerror.innerHTML = left + 'more characters required';
//         return false;
//     }
//     pesanerror.innerHTML = 'valid';
//         return true;
// }
// function validateform(){
//     if(!validatenama()||!validateemail()||!validatepesan()){
//         kirimerror.style.display = 'block';
//         kirimerror.innerHTML = 'plish fix error';
//         setTimeout(function(){kirimerror.style.display='none';}, 3000);
//         return false
//     }
// }