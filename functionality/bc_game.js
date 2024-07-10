const scenarios = [
    {
        question: "Tu amiga es sexualmente activa y no se quiere quedar embarazada. También, es olvidadiza y le cuesta mantener una rutina. ¿Qué metodo anticonceptivo le recomendarías? ",
        options: ["Tomar pastillas anticonceptivas", "Usar un implante anticonceptivo a largo plazo"],
        correct: 1
    },
    {
        question: "Tu amiga esta considerando usar un DIU (dispositivo intrauterino) para protegerse pero tiene miedo",
        options: ["La desanimo porque también tengo mis dudas", "Le digo que el DIU es seguro y  no se oxida ni traspasa ni es radiactivo"],
        correct: 0
    },
    {
        question: "Tu pareja te dice que no le gusta usar condón. ¿Qué haces?",
        options: ["Aceptas y no usas protección", "Insistes en usar condón para proteger ambos de infecciones y embarazos no planificados"],
        correct: 1
    },
    {
        question: "Estás en una relación y consideras cambiar tu método anticonceptivo. ¿Qué haces?",
        options: ["Eligo el primero que encuentre sin pensarlo mucho", "Hablo con un profesional de salud para encontrar el mejor método para mi"],
        correct: 1
    },
    {
        question: "Has olvidado tomar tu píldora anticonceptiva un día. ¿Qué haces?",
        options: ["No haces nada y esperas a la próxima dosis", "Usar protección adicional y tomar la píldora tan pronto como te acuerdes"],
        correct: 1
    },
    {
        question: "Crees que podrías estar embarazada aunque usas un método anticonceptivo. ¿Qué haces?",
        options: ["Esperas y no haces nada", "Te haces una prueba de embarazo y consultas con un profesional de salud"],
        correct: 1
    },
    {
        question: "Tu amigo te dice que usar condón es incómodo y que no lo va a usar con su pareja",
        options: ["Le digo que pienso lo mismo y el preservativo es mucha cosa", "Le digo usar preservativo es respeto y cuidado a si mismo y a su pareja"],
        correct: 1
    },
    {
        question: "Escuchas a alguien decir que los métodos anticonceptivos hormonales son peligrosos. ¿Qué haces?",
        options: ["Le crees sin investigar", "Buscas información fiable y hablas con un profesional de salud"],
        correct: 1
    },
    {
        question: "Quieres iniciar tu vida sexual pero no sabes qué método anticonceptivo usar. ¿Qué haces?",
        options: ["No usas ningún método porque no vale la pena", "Consultas con un profesional de salud para recibir orientación"],
        correct: 1
    },
    {
        question: "Tu pareja te dice que usar dos condones es mejor para la protección. ¿Qué haces?",
        options: ["Le explicas que usar dos condones puede causar que se rompan", "Aceptas usar dos condones"],
        correct: 0
    },
    {
        question: "Tu amigo piensa que sólo las mujeres se deberían preocupar sobre los anticonceptivos",
        options: ["Le explico que la relación es de dos y ambos tienen responsabilidad", "Le digo que tiene la razón porque las mujeres son quienes se embarazan"],
        correct: 0
    },
    {
        question: "Una amiga ha tenido experiencias negativas con métodos en el pasado y ahora está indecisa",
        options: [
            "Le dices que no te preocupes por eso y que no necesita usar ningún método anticonceptivo.", "Le recomiendas que consulte con un profesional de salud para explorar diferentes opciones anticonceptivas y tomar una decisión informada.",
            ],
        correct: 1
    
    },

];

let currentScenario = 0;
let score = 0;
let startTime = null;

const startBtn = document.getElementById('startBtn');
const gameDiv = document.getElementById('bc_game');
const questionText = document.getElementById('bc_question');
const option1Btn = document.getElementById('option1');
const option2Btn = document.getElementById('option2');
const resultText = document.getElementById('result');

startBtn.addEventListener('click', () => {
    document.querySelector("#bc_gameSection").style.backgroundImage = 'url("../assets/bc_thumbnail2-09.png")';
    document.querySelector("#bc_gameSection").style.backgroundPosition = "center"

    startBtn.style.display = 'none';
    gameDiv.style.display = 'block';
    loadScenario();
});

option1Btn.addEventListener('click', () => checkAnswer(0));
option2Btn.addEventListener('click', () => checkAnswer(1));

function loadScenario() {
    if (currentScenario < scenarios.length) {
        const options = scenarios[currentScenario].options.slice();
        const correct = scenarios[currentScenario].correct;
        const shuffledOptions = shuffleOptions(options, correct);

        questionText.textContent = scenarios[currentScenario].question;
        option1Btn.textContent = shuffledOptions[0].text;
        option2Btn.textContent = shuffledOptions[1].text;
        option1Btn.dataset.correct = shuffledOptions[0].isCorrect;
        option2Btn.dataset.correct = shuffledOptions[1].isCorrect;
        option1Btn.classList.remove('btn-correct', 'btn-incorrect');
        option2Btn.classList.remove('btn-correct', 'btn-incorrect');
        resultText.textContent = '';

        if (!startTime) {
            startTime = new Date(); 
            setInterval(updateTimer, 1000); 
        }

    } else {
        endGame();
    }
}

function updateTimer() {
    if (startTime) {
        const currentTime = new Date();
        const elapsedTime = (currentTime - startTime) / 1000; 
        document.getElementById('time').textContent = `Tiempo: ${elapsedTime.toFixed(0)} segundos`;
    }
}

function endGame() {
    const endTime = new Date();
    const elapsedTime = (endTime - startTime) / 1000; 

    questionText.textContent = `¡Has completado todos los escenarios en ${elapsedTime.toFixed(0)} segundos! Tu puntuación final es ${score}.`;
    option1Btn.style.display = 'none';
    option2Btn.style.display = 'none';
    resultText.textContent = '';
}

function checkAnswer(selected) {
    const selectedBtn = selected === 0 ? option1Btn : option2Btn;
    const isCorrect = selectedBtn.dataset.correct === 'true';

    if (isCorrect) {
        resultText.textContent = '¡Correcto!';
        resultText.style.color = 'green';
        selectedBtn.classList.add('btn-correct');
        score += 1;
        document.getElementById('score').textContent = `Puntaje: ${score}/${scenarios.length}`;
    } else {
        resultText.textContent = '¡Incorrecto!';
        resultText.style.color = 'red';
        selectedBtn.classList.add('btn-incorrect');
    }

    currentScenario++;
    setTimeout(loadScenario, 800); 
}

function shuffleOptions(options, correctIndex) {
    const shuffled = options.map((option, index) => ({
        text: option,
        isCorrect: index === correctIndex
    }));

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}