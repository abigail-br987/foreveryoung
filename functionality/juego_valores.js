let jvBoard;
let jvBoardWidth = 360;
let jvBoardHeight = 576;
let jvContext;

let jvDoodlerWidth = 46;
let jvDoodlerHeight = 96;
let jvDoodlerX = jvBoardWidth / 2 - jvDoodlerWidth / 2;
let jvDoodlerY = jvBoardHeight * 7 / 8 - jvDoodlerHeight;
let jvDoodlerRightImg;
let jvDoodlerLeftImg;

let jvDoodler = {
    img: null,
    x: jvDoodlerX,
    y: jvDoodlerY,
    width: jvDoodlerWidth,
    height: jvDoodlerHeight
}

let jvVelocityX = 0;
let jvVelocityY = 0; 
let jvInitialVelocityY = -8; 
let jvGravity = 0.4;

let jvPlatformArray = [];
let jvPlatformWidth = 80;
let jvPlatformHeight = 18;

let jvScoreValores = 0;
let jvMaxScoreValores = 0;
let jvGameOver = false;
let jvStartGameValores = document.getElementById("startBtn_valores");
let jvPlatformImages = ["../assets/amor.png", "../assets/lealtad.png",
    "../assets/honestidad.png", "../assets/amistad.png", "../assets/respeto.png", "../assets/honor.png", 
    "../assets/honradez.png", "../assets/justicia.png", "../assets/libertad.png", "../assets/solidaridad.png",
    "../assets/paz.png", "../assets/integridad.png"];

window.onload = function () {
    jvBoard = document.getElementById("board0");
    jvBoard.height = jvBoardHeight;
    jvBoard.width = jvBoardWidth;
    jvContext = jvBoard.getContext("2d"); 
    jvDoodlerRightImg = new Image();
    jvDoodlerRightImg.src = "../assets/personita-right.png";
    jvDoodler.img = jvDoodlerRightImg;
    jvDoodlerRightImg.onload = function () {
        jvContext.drawImage(jvDoodler.img, jvDoodler.x, jvDoodler.y, jvDoodler.width, jvDoodler.height);
    }

    jvDoodlerLeftImg = new Image();
    jvDoodlerLeftImg.src = "../assets/personita-left.png";
    jvVelocityY = jvInitialVelocityY;
    jvPlacePlatforms();
}

function jvStartValores() {
    jvStartGameValores.style.display = "none";

    jvBoard = document.getElementById("board0");
    jvBoard.height = jvBoardHeight;
    jvBoard.width = jvBoardWidth;
    jvContext = jvBoard.getContext("2d");
    jvDoodlerRightImg = new Image();
    jvDoodlerRightImg.src = "../assets/personita-right.png";
    jvDoodler.img = jvDoodlerRightImg;
    jvDoodlerRightImg.onload = function () {
        jvContext.drawImage(jvDoodler.img, jvDoodler.x, jvDoodler.y, jvDoodler.width, jvDoodler.height);
    }

    jvDoodlerLeftImg = new Image();
    jvDoodlerLeftImg.src = "../assets/personita-left.png";

    jvVelocityY = jvInitialVelocityY;
    jvPlacePlatforms();
    requestAnimationFrame(jvUpdate);
    document.addEventListener("keydown", jvMoveDoodler);
}

function jvUpdate() {
    requestAnimationFrame(jvUpdate);
    if (jvGameOver) {
        return;
    }
    jvContext.clearRect(0, 0, jvBoard.width, jvBoard.height);

    jvDoodler.x += jvVelocityX;
    if (jvDoodler.x > jvBoardWidth) {
        jvDoodler.x = 0;
    }
    else if (jvDoodler.x + jvDoodler.width < 0) {
        jvDoodler.x = jvBoardWidth;
    }

    jvVelocityY += jvGravity;
    jvDoodler.y += jvVelocityY;
    if (jvDoodler.y > jvBoard.height) {
        jvGameOver = true;
    }
    jvContext.drawImage(jvDoodler.img, jvDoodler.x, jvDoodler.y, jvDoodler.width, jvDoodler.height);

    for (let i = 0; i < jvPlatformArray.length; i++) {
        let jvPlatform = jvPlatformArray[i];
        if (jvVelocityY < 0 && jvDoodler.y < jvBoardHeight * 3 / 4) {
            jvPlatform.y -= jvInitialVelocityY;
        }
        if (jvDetectCollision(jvDoodler, jvPlatform) && jvVelocityY >= 0) {
            jvVelocityY = jvInitialVelocityY;
        }
        jvContext.drawImage(jvPlatform.img, jvPlatform.x, jvPlatform.y, jvPlatform.width, jvPlatform.height);
    }

    while (jvPlatformArray.length > 0 && jvPlatformArray[0].y >= jvBoardHeight) {
        jvPlatformArray.shift();
        jvNewPlatform();
    }

    jvUpdateScore();
    jvContext.fillStyle = "white";
    jvContext.font = "16px Darumadrop One";
    jvContext.fillText("Puntaje:", 5, 20);
    jvContext.fillText(jvScoreValores, 5, 40);

    if (jvGameOver) {
        jvContext.fillText("Presiona 'ESPACIO'", jvBoardWidth / 7, jvBoardHeight * 7 / 8);
        jvContext.fillText("para reiniciar", jvBoardWidth / 7, jvBoardHeight * 7 / 8 + 20);
    }
}

function jvMoveDoodler(e) {
    if (e.code == "ArrowRight" || e.code == "KeyD") {
        jvVelocityX = 4;
        jvDoodler.img = jvDoodlerRightImg;
    }
    else if (e.code == "ArrowLeft" || e.code == "KeyA") {
        jvVelocityX = -4;
        jvDoodler.img = jvDoodlerLeftImg;
    }
    else if (e.code == "Space" && jvGameOver) {
        jvDoodler = {
            img: jvDoodlerRightImg,
            x: jvDoodlerX,
            y: jvDoodlerY,
            width: jvDoodlerWidth,
            height: jvDoodlerHeight
        }

        jvVelocityX = 0;
        jvVelocityY = jvInitialVelocityY;
        jvScoreValores = 0;
        jvMaxScoreValores = 0;
        jvGameOver = false;
        jvPlacePlatforms();
    }
}

function jvPlacePlatforms() {
    jvPlatformArray = [];

    let jvPlatform = {
        img: new Image(),
        x: jvBoardWidth / 2,
        y: jvBoardHeight - 50,
        width: jvPlatformWidth,
        height: jvPlatformHeight
    }
    jvPlatform.img.src = jvRandomPlatformImage();
    jvPlatformArray.push(jvPlatform);

    for (let i = 0; i < 6; i++) {
        let jvRandomX = Math.floor(Math.random() * jvBoardWidth * 3 / 4);
        let jvPlatform = {
            img: new Image(),
            x: jvRandomX,
            y: jvBoardHeight - 75 * i - 150,
            width: jvPlatformWidth,
            height: jvPlatformHeight
        }
        jvPlatform.img.src = jvRandomPlatformImage();
        jvPlatformArray.push(jvPlatform);
    }
}

function jvNewPlatform() {
    let jvRandomX = Math.floor(Math.random() * jvBoardWidth * 3 / 4);
    let jvPlatform = {
        img: new Image(),
        x: jvRandomX,
        y: -jvPlatformHeight,
        width: jvPlatformWidth,
        height: jvPlatformHeight
    }
    jvPlatform.img.src = jvRandomPlatformImage();
    jvPlatformArray.push(jvPlatform);
}

function jvDetectCollision(a, b) {
    return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y;
}

function jvUpdateScore() {
    let jvPoints = Math.floor(50 * Math.random());
    if (jvVelocityY < 0) {
        jvMaxScoreValores += jvPoints;
        if (jvScoreValores < jvMaxScoreValores) {
            jvScoreValores = jvMaxScoreValores;
        }
    }
    else if (jvVelocityY >= 0) {
        jvMaxScoreValores -= jvPoints;
    }
}

function jvRandomPlatformImage() {
    return jvPlatformImages[Math.floor(Math.random() * jvPlatformImages.length)];
}