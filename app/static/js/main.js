const navToggle = document.getElementById('nav-toggle');
const navCambio = document.getElementById('cambio-tema');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close')

// Ocultar Menu
if (navToggle && navCambio) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('mostrar-menu');
        navToggle.style.display = 'none';
        navCambio.style.display = 'none';
    })
}

// Mostrar menu en click close
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('mostrar-menu');
        navToggle.style.display = 'block';
        navCambio.style.display = 'block';
    })
}

// Quitar el menu en clickeo
const navLink = document.querySelectorAll('.nav-link')

function clickLink() {
    navMenu.classList.remove('mostrar-menu')
    navToggle.style.display = 'block';
    navCambio.style.display = 'block';
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

    if (itemClass == 'habilidades-contenido-dos habilidades-cerradas') {
        this.parentNode.className = 'habilidades-contenido-dos habilidades-abiertas';
    }
    else {
        this.parentNode.className = 'habilidades-contenido-dos habilidades-cerradas';
    }
}

Header.forEach((el) => {
    el.addEventListener('click', toggleHabilidad)
})

// Educación
const data = document.getElementsByClassName('educacion-data');
const images = document.querySelectorAll('.educacion-images');

images.forEach((ele) => {
    ele.addEventListener('click', () => {
        for (i=0; i < data.length; i++) {
            data[i].className = 'educacion-data educacion-cerrada'
        }

        if (ele.querySelector('.educacion-data')) {
            ele.querySelector('.educacion-data').className = 'educacion-data educacion-abierta'
        }
        
        else {
            ele.querySelector('.educacion-data') = 'educacion-data educacion-cerrada'
        }
    })
})

// Cambio de color navLink dependiendo de done estes
const secciones = document.querySelectorAll('section[id]')

function scrollActivo() {
    const scrollY = window.pageYOffset;

    secciones.forEach(current => {
        const seccionAltura = current.offsetHeight;
        const seccionTop = current.offsetTop - 50;
        const sectionID = current.getAttribute('id')

        if (scrollY > seccionTop && scrollY <= seccionTop + seccionAltura) {
            document.querySelector('.nav-menu a[href*=' + sectionID + ']').classList.add('link-activo');
        }
        else {
            document.querySelector('.nav-menu a[href*=' + sectionID + ']').classList.remove('link-activo');
        }
    })
}

window.addEventListener('scroll',scrollActivo)

function scrollHeader() {
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) {
        nav.classList.add('scroll-header')
    }

    else {
        nav.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader);