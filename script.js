  // Esperamos a que el DOM se haya cargado completamente
  document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const btnIzq = document.getElementById('btn-izq');
    const btnDer = document.getElementById('btn-der');

    // Verificar si los elementos existen
    if (!slider || !btnIzq || !btnDer) {
      console.error('No se encontraron los elementos necesarios en el DOM');
      return;
    }

    let contador = 0;

    // Evento de clic para mover a la derecha
    btnDer.addEventListener('click', () => {
      if (contador < slider.children.length - 1) {
        contador++;
        actualizarCarrusel();
      }
    });

    // Evento de clic para mover a la izquierda
    btnIzq.addEventListener('click', () => {
      if (contador > 0) {
        contador--;
        actualizarCarrusel();
      }
    });

    // Función para actualizar la posición del carrusel
    function actualizarCarrusel() {
      const ancho = slider.clientWidth;
      slider.style.transform = `translateX(-${ancho * contador}px)`;
    }

    // Ajustar la posición del carrusel cuando se cambie el tamaño de la ventana
    window.addEventListener('resize', actualizarCarrusel);
  });

  document.querySelectorAll(".encabezado").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      item.classList.toggle("activo");
  
      const contenido = header.nextElementSibling;
      if (contenido.style.display === "block") {
        contenido.style.display = "none";
      } else {
        contenido.style.display = "block";
      }
    });
  });
  
