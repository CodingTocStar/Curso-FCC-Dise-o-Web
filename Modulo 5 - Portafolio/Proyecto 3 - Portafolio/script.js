document.addEventListener("DOMContentLoaded", () => {
    
    const tituloProyectos = document.querySelector(".projects-header");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento es visible en el viewport
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            } else {
                // Si el elemento YA NO es visible, le quitamos la clase
                // Esto hace que la animación se "reinicie"
                entry.target.classList.remove("is-visible");
            }
        });
    }, {
        threshold: 0.5 // Se activa cuando el 50% del elemento se ve
    });

    if (tituloProyectos) {
        observer.observe(tituloProyectos);
    }
});