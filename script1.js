  window.onload = function () {
    const audio = document.getElementById('villancicoAudio');

    // Intenta reproducir automáticamente
    audio.play().catch((error) => {
      console.log('Reproducción automática bloqueada por el navegador.');

      // Muestra un mensaje al usuario para activar el audio
      const playButton = document.getElementById('playButton');
      playButton.style.display = 'block'; // Asegúrate de que el botón sea visible
      playButton.addEventListener('click', () => {
        audio.play();
      });
    });
  };
function createGarland() {
  const garland = document.createElement("div");
  garland.classList.add("garland");

  // Posición inicial aleatoria
  const randomLeft = Math.random() * 100; // Porcentaje de la pantalla
  const randomDuration = Math.random() * 3 + 2; // Entre 2 y 5 segundos

  // Estilo dinámico
  garland.style.left = `${randomLeft}vw`;
  garland.style.animationDuration = `${randomDuration}s`;

  document.body.appendChild(garland);

  // Eliminar guirnalda una vez que termine su animación
  setTimeout(() => {
    garland.remove();
  }, randomDuration * 1000);
}

// Generar guirnaldas cada 300ms
setInterval(createGarland, 300);
