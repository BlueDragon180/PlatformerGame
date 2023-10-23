const player = document.getElementById("player");
const gameContainer = document.getElementById("game-container");

let playerX = 0;
let playerY = gameContainer.clientHeight - player.clientHeight;
let gravity = 1;
let jumping = false;

function gameLoop() {
  // Apply gravity
  playerY += gravity;
  player.style.bottom = playerY + "px";

  // Check for collision with ground
  if (playerY < 0) {
    playerY = 0;
    gravity = 0;
    jumping = false;
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();

document.addEventListener("keydown", (event) => {
  if (event.key === " " && !jumping) {
    jump();
  }
});

function jump() {
  playerY -= 20;
  gravity = 1;
  jumping = true;
}
