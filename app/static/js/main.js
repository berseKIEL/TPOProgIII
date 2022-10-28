const navToggle = document.getElementById('nav-toggle');
const navCambio = document.getElementById('cambio-tema');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close')

// Ocultar Menu
if(navToggle && navCambio) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('mostrar-menu');
        navToggle.style.display='none';
        navCambio.style.display='none';
    })
}

// Mostrar menu en click close
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('mostrar-menu');
        navToggle.style.display='block';
        navCambio.style.display='block';
    })
}

// Quitar el menu en clickeo
const navLink = document.querySelectorAll('.nav-link')

function clickLink() {
    navMenu.classList.remove('mostrar-menu')
    navToggle.style.display='block';
    navCambio.style.display='block';
}

navLink.forEach(n => n.addEventListener('click', clickLink))