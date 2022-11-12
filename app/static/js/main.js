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
const eduCont = document.getElementsByClassName('educacion-contenido');
const images = document.querySelectorAll('.educacion-imagen');
const header = document.querySelectorAll('.educacion-flecha')

function toggleEducacion() {
    let itemClass = this.parentNode.className;

    if (itemClass == 'educacion-contenido educacion-cerradas') {
        this.parentNode.className = 'educacion-contenido educacion-abiertas';
    }
    else {
        this.parentNode.className = 'educacion-contenido educacion-cerradas';
    }
}

images.forEach((el) => {
    el.addEventListener('click', toggleEducacion)
})




// Contactame Modal
// Se crea una Variable Modal que permite cerrar o abrir según donde se haya clickeado
var modal;

// Se selecciona el Form
const formContactame = document.getElementById('contactame-form');

// Se selecciona todos los botones que puedan abrir modal de contactame
botonContactame = document.querySelectorAll('#contactameBtn');

botonContactame.forEach((e) => {
    e.addEventListener('click', () => {
        modal = document.getElementById(e.dataset.id);
        abrirModal(modal);
    })
})

// Declaración de Funciones!
// Función cerrarEsc
const cerrarEsc = (e) => {
    if(e.key === "Escape") {
        cerrarModal(modal);
    }
}

// Función abrirModal
const abrirModal = (modal) => {
    document.body.style.overflow = "hidden";
    modal.setAttribute("open", "true");
    document.addEventListener('keydown', cerrarEsc)
}

// Función cerrarModal
const cerrarModal = (modal) => {
    document.body.style.overflow = "auto";
    modal.removeAttribute("open");
}


// Se selecciona el boton para cerrar el modal
cerrarContactame = document.getElementById('contactame-cerrar');

cerrarContactame.addEventListener('click', (e) => {
    modal = document.getElementById(e.target.dataset.id);
    formContactame.reset();
    cerrarModal(modal);
})


// Submit del boton
const submitContactame = document.getElementById('contactame-submit');

// Evento de apretar boton
submitContactame.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(formContactame);

    for (i = 0; i < formContactame.length - 1; i++) {
        console.log(formContactame.elements[i]);
        if (formContactame.elements[i].value.length >= 6) {
            formContactame.elements[i].setAttribute("style", "box-shadow: 0;");
        }
        else if (formContactame.elements[i].value.length < 6) {
            formContactame.elements[i].setAttribute("style", "box-shadow: 0 2px 2px red;");
        }
    }
})

// Cerrar video de youtube
// Eligir cerrar video
const cerrarVideo = document.getElementById('video-close')
// Div del video
const contenedorVideo = document.querySelector('.contenedor-video')

cerrarVideo.addEventListener('click', () => {
    contenedorVideo.remove();
});

// Opcional
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

window.addEventListener('scroll', scrollActivo)

function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header')
    }

    else {
        nav.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader);


//  Modo oscuro
const botonTema = document.getElementById('cambio-tema');
const modoOscuro = 'modo-claro';

botonTema.addEventListener('click', () => {
    document.body.classList.toggle(modoOscuro);
    if (botonTema.classList.contains('fa-toggle-off')) {
        botonTema.classList.remove('fa-toggle-off');
        botonTema.classList.add('fa-toggle-on');
    }
    else if (botonTema.classList.contains('fa-toggle-on')) {
        botonTema.classList.remove('fa-toggle-on');
        botonTema.classList.add('fa-toggle-off');
    }
})