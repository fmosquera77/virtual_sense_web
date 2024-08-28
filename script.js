// Seleccionamos los elementos necesarios
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const menuBtns = document.querySelectorAll('.slide .menu-btn');
const menu = document.querySelector('.menu');

// Definimos variables
let activeSlide = 0;
let intervalID; // Identificador del intervalo para la transición automática

// Función para mostrar el slide indicado
function showSlide(slideIndex) {
  slides.forEach(slide => slide.style.display = 'none');
  indicators.forEach(indicator => indicator.classList.remove('active'));

  slides[slideIndex].style.display = 'block';
  indicators[slideIndex].classList.add('active');
}

// Función para pasar al siguiente slide
function nextSlide() {
  activeSlide++;

  if (activeSlide === slides.length) {
    activeSlide = 0;
  }

  showSlide(activeSlide);
}

// Función para iniciar la transición automática
function startAutoTransition() {
  intervalID = setInterval(nextSlide, 5000); // 5 segundos entre slides
}

// Función para detener la transición automática
function stopAutoTransition() {
  clearInterval(intervalID);
}

// Inicializamos el slider mostrando el primer slide
showSlide(0);

// Agregamos eventos de click a los indicadores para navegar entre slides
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlide(index);
    activeSlide = index;
    stopAutoTransition(); // Detenemos la transición automática al hacer click en un indicador
  });
});

// Agregamos eventos de click a los botones hamburguesa de todos los slides
menuBtns.forEach(menuBtn => {
  menuBtn.addEventListener('click', () => {
    const slideMenu = menuBtn.closest('.slide').querySelector('.menu'); // Obtiene el menú del slide actual
    slideMenu.classList.toggle('active'); // Alternamos la clase 'active' para expandir o contraer el menú
    menuBtn.style.display = 'none'; // Oculta el botón hamburguesa del slide actual
  });
});

// Agregamos eventos de click a los botones de menú para contraer el menú
const menuItems = document.querySelectorAll('.menu li');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const slideMenu = item.closest('.menu'); // Obtiene el menú del slide actual
    slideMenu.classList.remove('active'); // Contrae el menú
    menuBtns.forEach(btn => btn.style.display = 'block'); // Muestra los botones hamburguesa de todos los slides
  });
});

// Opcional: Agregar botones de navegación (siguiente y anterior)
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

if (nextBtn) {
  nextBtn.addEventListener('click', nextSlide);
  nextBtn.addEventListener('mouseover', startAutoTransition); // Reanudar la transición automática al pasar el mouse sobre el botón siguiente
  nextBtn.addEventListener('mouseout', stopAutoTransition); // Detener la transición automática al salir del botón siguiente
}

if (prevBtn) {
  prevBtn.addEventListener('click', prevSlide);
  prevBtn.addEventListener('mouseover', startAutoTransition); // Reanudar la transición automática al pasar el mouse sobre el botón anterior
  prevBtn.addEventListener('mouseout', stopAutoTransition); // Detener la transición automática al salir del botón anterior
}

// Iniciamos la transición automática al cargar la página
startAutoTransition();

// Transparencia del header y achique del logo
window.addEventListener('scroll', function () {
  var header = document.getElementById('cabecalho');
  if (window.scrollY > 60) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

/*window.addEventListener('scroll', function() {
  var header = document.getElementById('cabecalho');
  var logoContainer = document.querySelector('.logo-contenedor');
  var logo = document.querySelector('.logo');

  if (window.scrollY > 320) {
      logoContainer.style.width = '220px';
      logo.style.width = '100%';
  } else {
      logoContainer.style.width = '320px';
      logo.style.width = 'auto';
  }

});*/


//Carrusel de las tarjetas de la home en responsive
document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelector('.articles');
  let isDown = false;
  let startX;
  let scrollLeft;

  articles.addEventListener('mousedown', (e) => {
    isDown = true;
    articles.classList.add('active');
    startX = e.pageX - articles.offsetLeft;
    scrollLeft = articles.scrollLeft;
  });

  articles.addEventListener('mouseleave', () => {
    isDown = false;
    articles.classList.remove('active');
  });

  articles.addEventListener('mouseup', () => {
    isDown = false;
    articles.classList.remove('active');
  });

  articles.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - articles.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    articles.scrollLeft = scrollLeft - walk;
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const dispositivosImg = document.querySelector('.dispositivos-img');
  let isDown = false;
  let startX;
  let scrollLeft;

  dispositivosImg.addEventListener('mousedown', (e) => {
    isDown = true;
    dispositivosImg.classList.add('active');
    startX = e.pageX - dispositivosImg.offsetLeft;
    scrollLeft = dispositivosImg.scrollLeft;
  });

  dispositivosImg.addEventListener('mouseleave', () => {
    isDown = false;
    dispositivosImg.classList.remove('active');
  });

  dispositivosImg.addEventListener('mouseup', () => {
    isDown = false;
    dispositivosImg.classList.remove('active');
  });

  dispositivosImg.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - dispositivosImg.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    dispositivosImg.scrollLeft = scrollLeft - walk;
  });
});


//Visibilidad automatica del tooltip

document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos el tooltip dentro del contenedor .whatsapp-float
  const whatsappFloat = document.querySelector('.whatsapp-float');
  const tooltip = whatsappFloat ? whatsappFloat.querySelector('.tooltip') : null;

  if (tooltip) {
    // Función para mostrar el tooltip
    function showTooltip() {
      tooltip.classList.add('visible');
      setTimeout(() => {
        tooltip.classList.remove('visible');
      }, 5000); // Tooltip visibility duration (5 seconds)
    }

    // Mostrar el tooltip solo una vez después de que la página se cargue
    setTimeout(() => {
      showTooltip();

      // Volver a mostrar el tooltip cada 1 minuto
      setInterval(showTooltip, 60000); // Repetir cada 1 minuto = 60000ms
    }, 3000); // Mostrar tooltip 3 segundos después de que la página se cargue
  }
});
