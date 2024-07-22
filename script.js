document.addEventListener('DOMContentLoaded', function() {
    // Inicialización de Swiper para el slider principal
    const swiper = new Swiper('.mySwiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 5000, // Tiempo en milisegundos entre cambios de diapositiva
            disableOnInteraction: false, // Permite la reproducción automática incluso después de la interacción del usuario
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        speed: 1000,
    });

    // Inicialización de Swiper para los eventos
    const swiperEvents = new Swiper('.mySwiper-events', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 5000, // Tiempo en milisegundos entre cambios de diapositiva
            disableOnInteraction: false, // Permite la reproducción automática incluso después de la interacción del usuario
        },
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination-events',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-events',
            prevEl: '.swiper-button-prev-events',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });

    // Función para expandir/contraer el contenido sobre nosotros
    document.getElementById('about-btn').addEventListener('click', function() {
        const aboutContent = document.querySelector('.about-content');
        aboutContent.classList.toggle('expanded');
        this.textContent = aboutContent.classList.contains('expanded') ? 'Ver Menos' : 'Ver Más';
    });
});
