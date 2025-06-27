document.addEventListener('DOMContentLoaded', function () {

    // 1. Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 800,       // Duración de la animación
        easing: 'ease-in-out', 
        once: true,          
        offset: 50           
    });


    // 2. Navbar que cambia de color al hacer scroll
    const navbar = document.querySelector('#mainNav');
    if (navbar) {
        // Función para manejar el estado del navbar
        const handleNavbarScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        };

        // Escuchar el evento de scroll
        window.addEventListener('scroll', handleNavbarScroll);

        // Comprobar estado inicial en caso de recargar la página más abajo
        handleNavbarScroll();
    }

});