// URL del formulario de Google
const urlFormulario = 'https://docs.google.com/forms/d/e/1FAIpQLSfMtcX__X4zGDs2JFlJI9sQrWHyslIEn9UCMnQtmYmaf8biWw/viewform?usp=dialog';

// Botón del header
document.getElementById('btn-header').addEventListener('click', function (e) {
  e.preventDefault();
  window.location.href = urlFormulario;
});

// Botón de la sección intro
document.getElementById('btn-intro').addEventListener('click', function () {
  window.location.href = urlFormulario;
});
