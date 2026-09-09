const botones = document.querySelectorAll('.boton-acordeon');

botones.forEach(boton => {
    boton.addEventListener('click', function() {
        const respuesta = this.nextElementSibling;
        respuesta.classList.toggle('mostrar');
    });
});