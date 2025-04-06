// Carrusel 
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    const totalSlides = slides.length;

    // movimiento carrusel
    function moveToSlide(index) {
        if (index >= totalSlides) currentIndex = 0;
        else if (index < 0) currentIndex = totalSlides - 1;
        else currentIndex = index;

        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Botones
    nextBtn.addEventListener('click', () => moveToSlide(currentIndex + 1));
    prevBtn.addEventListener('click', () => moveToSlide(currentIndex - 1));

    // Carrusel automático 
    setInterval(() => moveToSlide(currentIndex + 1), 5000);
});

//boton index 

document.addEventListener("DOMContentLoaded", function() {
    
    const btnReparacion = document.getElementById("btnReparacion");
    
    
    btnReparacion.addEventListener("click", function() {
        window.location.href = "servicios.html"; 
    });
});
document.addEventListener("DOMContentLoaded", function() {
    
    const btnReparacion = document.getElementById("btnReparacion2");
    
    
    btnReparacion.addEventListener("click", function() {
        window.location.href = "servicios.html"; 
    });
});
document.addEventListener("DOMContentLoaded", function() {
    
    const btnReparacion = document.getElementById("btnReparacion3");
    
    
    btnReparacion.addEventListener("click", function() {
        window.location.href = "servicios.html"; 
    });
});
document.addEventListener("DOMContentLoaded", function() {
    
    const btnReparacion = document.getElementById("btnConsulta");
    
    
    btnReparacion.addEventListener("click", function() {
        window.location.href = "contacto.html"; 
    });
});