let character = document.getElementById("character");
let obstacle = document.getElementById("obstacle");
let scoreDisplay = document.getElementById("score");
let gameInterval;
let score = 0;

function startGame() {
  document.getElementById("startButton").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("bgMusic").play();
  obstacle.style.right = "-60px";
  moveObstacle();
  gameInterval = setInterval(updateScore, 1000);
}

function moveObstacle() {
  let obstacleX = -60;
  function animate() {
    if (obstacleX > window.innerWidth) {
      obstacleX = -60;
    } else {
      obstacleX += 5;
    }
    obstacle.style.right = obstacleX + "px";
    detectCollision();
    requestAnimationFrame(animate);
  }
  animate();
}

function updateScore() {
  score++;
  scoreDisplay.textContent = score;
}

function detectCollision() {
  let characterRect = character.getBoundingClientRect();
  let obstacleRect = obstacle.getBoundingClientRect();
  if (
    characterRect.right > obstacleRect.left &&
    characterRect.left < obstacleRect.right &&
    characterRect.bottom > obstacleRect.top
  ) {
    alert("¡Te chocaste! 😢 Vuelve a intentarlo");
    clearInterval(gameInterval);
    location.reload();
  }
}
