const character = document.getElementById("character");
const obstacle = document.getElementById("obstacle");

document.addEventListener("click", () => {
  if (!character.classList.contains("jump")) {
    character.classList.add("jump");
    setTimeout(() => {
      character.classList.remove("jump");
    }, 500);
  }
});

setInterval(() => {
  const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));

  // Ajusta la colisión según el tamaño de tu personaje/obstáculo
  if (obstacleLeft > 300 && obstacleLeft < 360 && characterTop < 50) {
    alert("¡Te chocaste! 😵 Vuelve a intentarlo");
  }
}, 10);
