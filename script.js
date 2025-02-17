// Lấy các phần tử
const player = document.getElementById("player");
const enemy = document.getElementById("enemy");

// Vị trí ban đầu của người chơi và kẻ thù
let playerX = 50;
let playerY = 50;
let enemyX = 200;
let enemyY = 200;

// Tốc độ di chuyển
let playerSpeed = 5;
let enemySpeed = 1;

// Điều khiển người chơi
document.addEventListener("keydown", movePlayer);

function movePlayer(event) {
    if (event.key === "ArrowLeft") playerX -= playerSpeed;
    if (event.key === "ArrowRight") playerX += playerSpeed;
    if (event.key === "ArrowUp") playerY -= playerSpeed;
    if (event.key === "ArrowDown") playerY += playerSpeed;

    player.style.left = playerX + "px";
    player.style.top = playerY + "px";
}

// Di chuyển kẻ thù
function moveEnemy() {
    if (enemyX < playerX) enemyX += enemySpeed;
    if (enemyX > playerX) enemyX -= enemySpeed;
    if (enemyY < playerY) enemyY += enemySpeed;
    if (enemyY > playerY) enemyY -= enemySpeed;

    enemy.style.left = enemyX + "px";
    enemy.style.top = enemyY + "px";
}

// Vòng lặp game
function gameLoop() {
    moveEnemy();
    requestAnimationFrame(gameLoop); // Tiếp tục gọi gameLoop
}

// Bắt đầu game
gameLoop();
