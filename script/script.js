const navBar = document.querySelector('#navbar'); 
const menuBtn = document.querySelector('#menuBtn'); 
const loader = document.getElementById('preloader'); 

const showMenu = () => {
    navBar.classList.toggle('hideMenu'); 
    if(menuBtn.classList.contains('fa-bars')){
        menuBtn.classList.remove('fa-bars'); 
        menuBtn.classList.add('fa-x'); 
    }else{
        menuBtn.classList.remove('fa-x'); 
        menuBtn.classList.add('fa-bars');
    }
}; 

window.addEventListener('load', () => {
    loader.style.display = 'none'; 
}); 