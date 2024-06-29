const animation = [ // para que aplauda
    "assets/personita1.png",
    "assets/personita2.png",
    "assets/personita3.png",
    "assets/personita4.png",
    "assets/personita5.png",
    "assets/personita7.png"
];

const wordText = document.querySelector(".word"),
    pistaText = document.querySelector(".pista span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    container2 = document.querySelector(".container2"),
    container1 = document.querySelector(".container"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word"),
    contentBox = document.querySelector(".container .content"),
    startArea = document.querySelector(".startBtn"),
    scoreArea = document.querySelector(".score"),
    thumbnail = document.querySelector("#word_scramble_game #word_scramble_thumbnail"),
    box_content = document.querySelector(".box-content");

var cajita = document.getElementById("cajita");
var wholething = document.getElementById("word_scramble_game");
var character = document.getElementById("littlecharacter");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var box_text = document.getElementById("box-text");

let correctWord, timer;
let score = 0; 

container1.style.display = "none";
container2.style.display = "none";
wholething.style.backgroundImage = "url('assets/ordena_y_gana_thumbnail.png')";
box_text.innerHTML = `¡Con 10 aciertos ganas! ¡Tú puedes!`;

const initTimer = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        cajita.style.display = "block";
        box_content.classList.add("cajita-wrong");
        box_text.innerHTML = `Tiempo agotado! <b>${correctWord.toUpperCase()}<b> era la palabra`;
        endGame();
    }, 1000);
};

const start = () => {
    container1.style.display = "block";
    container2.style.display = "block";
    wholething.style.backgroundImage = "none";
    startArea.style.display = "none"

    initGame(); 
};

const endGame = () => {
    clearInterval(timer);
    container1.style.display = "none";
    container2.style.display = "none";
    box_content.classList.add("cajita-correct");
    wholething.style.backgroundImage = "url('assets/paralaproxima-03.png')";
};

const winGame = () => {
    clearInterval(timer);
    container1.style.display = "none";
    container2.style.display = "none";
    box_content.classList.add("cajita-correct");
    wholething.style.backgroundImage = "url('assets/felicidades-03.png')";
};

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    
    wordText.innerText = wordArray.join("");
    pistaText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
    scoreArea.innerHTML = score;

    if (score > 9) {
        winGame();
    }
};

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();

    if (!userWord) { 
        cajita.style.display = "block";
        box_content.classList.remove("cajita-wrong");
        box_content.classList.remove("cajita-correct");
        return box_text.innerHTML = `Escribe una palabra para evaluar`;
    }

    if (userWord !== correctWord) { 
        if (score >= 1) {
            score = score - 1; 
            scoreArea.innerHTML = score;
        }
        cajita.style.display = "block";
        box_content.classList.add("cajita-wrong");
        playAnimationsad();
        initGame();
        return box_text.innerHTML = `Oops! <b>${userWord}<b> no es la palabra`;
        
    } else {
        cajita.style.display = "block";
        box_content.classList.remove("cajita-wrong");
        box_content.classList.add("cajita-correct");
        box_text.innerHTML = `Si! <b>${correctWord.toUpperCase()}<b> es la palabra`;
        score++;
        playAnimation();
        initGame();
    }
};


const playAnimationsad = () => {
    character.src = animation[5];
    setTimeout(() => {
        character.src = animation[0]; 
    }, 1000); 
};


const playAnimation = () => {
    let index = 0;
    let loops = 0;
    const maxLoops = 3;

    const interval = setInterval(() => {
        character.src = animation[index];
        index = (index + 1) % animation.length;
        if (index === 0) {
            loops++;
            if (loops === maxLoops) {
                clearInterval(interval);
                character.src = animation[0];
            }
        }
    }, 50);
    
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);