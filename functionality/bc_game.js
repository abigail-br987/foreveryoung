const scenarios = [
    {
        question: "Tu amiga es sexualmente activa y no se quiere quedar embarazada. También, es olvidadiza y le cuesta mantener una rutina. ¿Qué metodo anticonceptivo le recomendarías? ",
        options: ["Tomar pastillas anticonceptivas", "Usar un implante anticonceptivo a largo plazo"],
        correct: 1
    },
    {
        question: "Tu amiga esta considerando usar un DIU (dispositivo intrauterino) para protegerse pero tiene miedo",
        options: ["Le digo que el DIU es seguro y  no se oxida ni traspasa ni es radiactivo", "La desanimo porque también tengo mis dudas"],
        correct: 0
    },
    {
        question: "Tu pareja te dice que no le gusta usar condón. ¿Qué haces?",
        options: ["Insistes en usar condón para proteger ambos de infecciones y embarazos no planificados", "Aceptas y no usas protección" ],
        correct: 0
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
        options: ["Te haces una prueba de embarazo y consultas con un profesional de salud", "Esperas y no haces nada" ],
        correct: 0
    },
    {
        question: "Tu amigo te dice que usar condón es incómodo y que no lo va a usar con su pareja",
        options: ["Le digo que pienso lo mismo y el preservativo es mucha cosa", "Le digo usar preservativo es respeto y cuidado a si mismo y a su pareja"],
        correct: 1
    },
    {
        question: "Escuchas a alguien decir que los métodos anticonceptivos hormonales son peligrosos. ¿Qué haces?",
        options: ["Buscas información fiable y hablas con un profesional de salud","Le crees sin investigar"],
        correct: 0
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

let currentScenario_bc = 0;
let score_bc = 0;
let startTime_bc = null;

const startBtn_bc = document.getElementById('startBtn');
const gameDiv_bc = document.getElementById('bc_game');
const questionText_bc = document.getElementById('bc_question');
const option1Btn_bc = document.getElementById('option1');
const option2Btn_bc = document.getElementById('option2');
const resultText_bc = document.getElementById('result');

startBtn_bc.addEventListener('click', () => {
    document.querySelector("#bc_gameSection").style.backgroundImage = 'url("../assets/bc_thumbnail2-09.png")';
    document.querySelector("#bc_gameSection").style.backgroundPosition = "center"

    startBtn_bc.style.display = 'none';
    gameDiv_bc.style.display = 'block';
    loadScenario_bc();
});

option1Btn_bc.addEventListener('click', () => checkAnswer_bc(0));
option2Btn_bc.addEventListener('click', () => checkAnswer_bc(1));

function loadScenario_bc() {
    if (currentScenario_bc < scenarios.length) {
        const options_bc = scenarios[currentScenario_bc].options.slice();
        const correct_bc = scenarios[currentScenario_bc].correct;
        const shuffledOptions_bc = shuffleOptions_bc(options_bc, correct_bc);

        questionText_bc.textContent = scenarios[currentScenario_bc].question;
        option1Btn_bc.textContent = shuffledOptions_bc[0].text;
        option2Btn_bc.textContent = shuffledOptions_bc[1].text;
        option1Btn_bc.dataset.correct_bc = shuffledOptions_bc[0].isCorrect_bc;
        option2Btn_bc.dataset.correct_bc = shuffledOptions_bc[1].isCorrect_bc;
        option1Btn_bc.classList.remove('btn-correct', 'btn-incorrect');
        option2Btn_bc.classList.remove('btn-correct', 'btn-incorrect');
        resultText_bc.textContent = '';

        if (!startTime_bc) {
            startTime_bc = new Date(); 
            setInterval(updateTimer_bc, 1000); 
        }

    } else {
        endGame_bc();
    }
}

function updateTimer_bc() {
    if (startTime_bc) {
        const currentTime_bc = new Date();
        const elapsedTime_bc = (currentTime_bc - startTime_bc) / 1000; 
        document.getElementById('time').textContent = `Tiempo: ${elapsedTime_bc.toFixed(0)} segundos`;
    }
}

function endGame_bc() {
    const endTime_bc = new Date();
    const elapsedTime_bc = (endTime_bc - startTime_bc) / 1000; 

    questionText_bc.textContent = `¡Has completado todos los escenarios en ${elapsedTime_bc.toFixed(0)} segundos! Tu puntuación final es ${score_bc}.`;
    option1Btn_bc.style.display = 'none';
    option2Btn_bc.style.display = 'none';
    resultText_bc.textContent = '';
}

function checkAnswer_bc(selected_bc) {
    const selectedBtn_bc = selected_bc === 0 ? option1Btn_bc : option2Btn_bc;
    const isCorrect_bc = selectedBtn_bc.dataset.correct_bc === 'true';

    if (isCorrect_bc) {
        resultText_bc.textContent = '¡Correcto!';
        resultText_bc.style.color = 'green';
        selectedBtn_bc.classList.add('btn-correct');
        score_bc += 1;
        document.getElementById('score').textContent = `Puntaje: ${score_bc}/${scenarios.length}`;
    } else {
        resultText_bc.textContent = '¡Incorrecto!';
        resultText_bc.style.color = 'red';
        selectedBtn_bc.classList.add('btn-incorrect');
    }

    currentScenario_bc++;
    setTimeout(loadScenario_bc, 800); 
}

function shuffleOptions_bc(options_bc, correctIndex_bc) {
    const shuffled_bc = options_bc.map((option_bc, index_bc) => ({
        text: option_bc,
        isCorrect_bc: index_bc === correctIndex_bc
    }));

    for (let i_bc = shuffled_bc.length - 1; i_bc > 0; i_bc--) {
        const j_bc = Math.floor(Math.random() * (i_bc + 1));
        [shuffled_bc[i_bc], shuffled_bc[j_bc]] = [shuffled_bc[j_bc], shuffled_bc[i_bc]];
    }

    return shuffled_bc;
}