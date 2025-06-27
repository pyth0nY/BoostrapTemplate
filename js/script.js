document.addEventListener('DOMContentLoaded', function () {

    // 1. Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 800,       // Duración de la animación
        easing: 'ease-in-out', // Tipo de suavizado
        once: true,          // La animación ocurre solo una vez
        offset: 50           // Empieza la animación 50px antes de que el elemento sea visible
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


    // 3. Inicializar Lightbox para la galería
    // Esto se hace incluyendo la librería, no se necesita JS extra
    // si usas el atributo data-toggle="lightbox" en tus links de la galería.
    // La librería lo detecta automáticamente.
    // Si la librería no lo hace automático, se usaría:
    // document.addEventListener('click', e => {
    // 	if (e.target.matches('[data-toggle="lightbox"]')) {
    // 		const lightbox = new bootstrap.Lightbox(e.target);
    // 		lightbox.show();
    // 	}
    // });
    
});