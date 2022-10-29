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

// Habilidades
// Se selecciona un data target en caso de que clickee un determinado tab,
// Eso permite abrir un determinado contenido teniendo en cuenta cual clickee
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

// Por cada una de los tabs..
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('habilidades-activo');
        })

        target.classList.add('habilidades-activo');

        tabs.forEach(tab => {
            tab.classList.remove('habilidades-activo')
        })

        tab.classList.add('habilidades-activo')

    })
})

// Click en Flecha para abrir image
const ContHabi = document.getElementsByClassName('habilidades-contenido-dos');
const Header = document.querySelectorAll('.habilidades-habilidad-dos-header')

function toggleHabilidad() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < ContHabi.length; i++) {
        ContHabi[i].className = 'habilidades-contenido-dos habilidades-cerradas';
    }

    if(itemClass == 'habilidades-contenido-dos habilidades-cerradas') {
        this.parentNode.className = 'habilidades-contenido-dos habilidades-abiertas';
    }
    else {
        this.parentNode.className = 'habilidades-contenido-dos habilidades-cerradas';
    }
}

Header.forEach((el) => {
    el.addEventListener('click', toggleHabilidad)
})