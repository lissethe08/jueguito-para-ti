const personaje = document.getElementById("personaje");
let saltando = false;
let puntos = 0;

function saltar() {
  if (!saltando) {
    saltando = true;
    personaje.classList.add("saltar");
    setTimeout(() => {
      personaje.classList.remove("saltar");
      saltando = false;
    }, 500);
  }
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    saltar();
  }
});

setInterval(() => {
  puntos++;
  document.getElementById("contador").textContent = `Puntos: ${puntos}`;
}, 1000);
