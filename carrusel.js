const carrusel = document.querySelector('.carrusel');
const btnIzq = document.getElementById('btn-izq');
const btnDer = document.getElementById('btn-der');

// Duplicar imágenes para efecto infinito
const imagenes = document.querySelectorAll('.carrusel img');
imagenes.forEach(img => {
  const clon = img.cloneNode(true);
  carrusel.appendChild(clon);
});

let index = 0;
const total = imagenes.length;
const anchoImagen = imagenes[0].clientWidth;

function moverCarrusel() {
  carrusel.style.transition = 'transform 0.5s ease-in-out';
  carrusel.style.transform = `translateX(${-index * anchoImagen}px)`;
}

// Al final, reinicia a la posición inicial sin animación para que no se note
function checkLimites() {
  if (index >= total) {
    setTimeout(() => {
      carrusel.style.transition = 'none';
      index = 0;
      carrusel.style.transform = `translateX(0px)`;
    }, 500);
  }
  if (index < 0) {
    carrusel.style.transition = 'none';
    index = total - 1;
    carrusel.style.transform = `translateX(${-index * anchoImagen}px)`;
  }
}

btnDer.addEventListener('click', () => {
  index++;
  moverCarrusel();
  checkLimites();
});

btnIzq.addEventListener('click', () => {
  index--;
  moverCarrusel();
  checkLimites();
});
