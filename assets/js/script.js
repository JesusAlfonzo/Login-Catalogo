// Agregamos un evento de escucha al evento de scroll en la ventana
window.addEventListener('scroll', function () {
  // Seleccionamos el elemento de navegación
  const nav = document.querySelector('.nav');

  // Agregamos o quitamos la clase 'active' al elemento de navegación dependiendo 
  // de si la posición de desplazamiento de la ventana es mayor a 0
  nav.classList.toggle('active', window.scrollY > 0);
});

// Agregamos un evento de escucha al evento de scroll en la ventana
window.addEventListener('scroll', function () {
  // Seleccionamos el elemento de contenido
  var contenido = document.querySelector('.contenido');

  // Obtenemos la posición del elemento de contenido respecto a la ventana
  var contenidoPos = contenido.getBoundingClientRect().top;

  // Obtenemos la altura de la ventana
  var windowHeight = window.innerHeight;

  // Si la posición del elemento de contenido es menor a la mitad de la altura de la ventana, 
  // agregamos la clase 'aparecer' al elemento de contenido
  if (contenidoPos < windowHeight / 1.5) {
    contenido.classList.add('aparecer');
  }
});

