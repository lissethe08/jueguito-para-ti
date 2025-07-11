const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 400;
document.body.appendChild(canvas);

// Cargar imágenes
const personajeImg = new Image();
personajeImg.src = "personaje.png"; // Tu personaje nuevo

const piedraImg = new Image();
piedraImg.src = "piedra.png"; // Objeto nuevo

// Variables del personaje
let personaje = {
    x: 50,
    y: 300,
    width: 50,
    height: 50,
    velocidadY: 0,
    gravedad: 1.5,
    enElSuelo: true
};

// Variables de la piedra
let piedra = {
    x: 800,
    y: 300,
    width: 50,
    height: 50,
    velocidad: 6
};

// Puntuación
let puntos = 0;

// Evento de salto
document.addEventListener("keydown", function (e) {
    if ((e.code === "Space" || e.code === "ArrowUp") && personaje.enElSuelo) {
        personaje.velocidadY = -25;
        personaje.enElSuelo = false;
    }
});

function detectarColision(p, o) {
    return (
        p.x < o.x + o.width &&
        p.x + p.width > o.x &&
        p.y < o.y + o.height &&
        p.y + p.height > o.y
    );
}

// Game loop
function actualizar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fondo rosado
    ctx.fillStyle = "#f4a6b3";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Piso
    ctx.fillStyle = "#44c767";
    ctx.fillRect(0, 350, canvas.width, 50);

    // Gravedad
    personaje.y += personaje.velocidadY;
    personaje.velocidadY += personaje.gravedad;

    if (personaje.y > 300) {
        personaje.y = 300;
        personaje.velocidadY = 0;
        personaje.enElSuelo = true;
    }

    // Dibujar personaje
    ctx.drawImage(personajeImg, personaje.x, personaje.y, personaje.width, personaje.height);

    // Mover piedra
    piedra.x -= piedra.velocidad;
    if (piedra.x + piedra.width < 0) {
        piedra.x = 800 + Math.random() * 200;
        puntos++;
    }

    // Dibujar piedra
    ctx.drawImage(piedraImg, piedra.x, piedra.y, piedra.width, piedra.height);

    // Mostrar puntos
    ctx.fillStyle = "#fff";
    ctx.font = "20px Arial";
    ctx.fillText("Puntos: " + puntos, 680, 30);

    // Colisión
    if (detectarColision(personaje, piedra)) {
        alert("¡Uy! Te chocaste con la piedra 💔");
        document.location.reload();
    }

    requestAnimationFrame(actualizar);
}

actualizar();
