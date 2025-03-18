// Función para generar gotas de lluvia
function createRain() {
    const rainContainer = document.querySelector('.rain'); // Seleccionamos el contenedor de lluvia
    const numberOfDrops = 200; // Número de gotas de lluvia

    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('div');
        drop.classList.add('drop');
        
        // Posicionamos las gotas aleatoriamente en el eje horizontal
        drop.style.left = `${Math.random() * 100}vw`; // Random entre 0 y 100% del ancho de la pantalla
        
        // Configuramos la duración de la animación de la gota (caída más rápida o lenta)
        drop.style.animationDuration = `${Math.random() * 2 + 3}s`; // Entre 3 y 5 segundos
        drop.style.animationDelay = `${Math.random() * 2}s`; // Retraso aleatorio entre gotas

        // Añadimos cada gota al contenedor de lluvia
        rainContainer.appendChild(drop);
    }
}

// Llamamos a la función de lluvia
createRain();

// Función para calcular y mostrar la cuenta regresiva
function startCountdown() {
    // Definir la fecha de destino (6 de noviembre de 2025)
    const targetDate = new Date("2025-11-06T00:00:00").getTime();

    // Función que actualiza el temporizador
    const countdownInterval = setInterval(function() {
        // Obtener la fecha y hora actual
        const now = new Date().getTime();

        // Calcular la diferencia entre la fecha objetivo y la fecha actual
        const distance = targetDate - now;

        // Calcular los días, horas, minutos y segundos restantes
        const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 const seconds = Math.floor((distance % (1000 * 60)) / 1000); // Calcular los segundos restantes

        // Mostrar la cuenta regresiva en el div
        document.getElementById("countdown").innerHTML =
            months + "M " + days + "D " + hours + "h " + minutes + "m "+ seconds + "s";

        // Si el contador ha llegado a cero, mostrar un mensaje
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "¡Ha llegado el día!";
        }
    }, 1000); // Actualizar cada segundo
}

// Llamamos a la función para iniciar la cuenta regresiva
startCountdown();
