const animation_yn = [
    "assets/personita_yn-02.png",
    "assets/personita_yn-03.png",
    "assets/personita_yn-04.png",
    "assets/personita_yn-05.png",
    "assets/personita_yn-06.png"
];

const questions_yesorno = [
    { question: "¿El bullying puede tener efectos a largo plazo en la salud mental?", answer: true, explanation: "El bullying puede llevar a problemas de salud mental como la depresión y la ansiedad." },
    { question: "¿El ciberbullying es menos dañino que el bullying en persona?", answer: false, explanation: "El ciberbullying puede ser igual de dañino o incluso más, ya que puede ocurrir en cualquier momento y lugar." },
    { question: "¿Es importante cambiar las toallas sanitarias cada 4-6 horas durante el periodo menstrual?", answer: true, explanation: "Cambiar las toallas sanitarias frecuentemente previene infecciones y mantiene una buena higiene." },
    { question: "¿La anemia puede ser causada por una deficiencia de hierro en la dieta?", answer: true, explanation: "Una deficiencia de hierro puede reducir la producción de hemoglobina, llevando a la anemia." },
    { question: "¿Las vacunas pueden causar autismo?", answer: false, explanation: "No hay evidencia científica que respalde la afirmación de que las vacunas causan autismo." },
    { question: "¿El trabajo infantil está prohibido por la ley en muchos países?", answer: true, explanation: "El trabajo infantil es ilegal en muchos países y se considera una violación de los derechos del niño." },
    { question: "¿El abuso sexual solo ocurre entre adultos y niños?", answer: false, explanation: "El abuso sexual puede ocurrir a cualquier persona, independientemente de su edad." },
    { question: "¿La violencia física es la única forma de violencia?", answer: false, explanation: "Existen otras formas de violencia, como la psicológica y la emocional." },
    { question: "¿La violencia psicológica puede ser tan perjudicial como la violencia física?", answer: true, explanation: "La violencia psicológica puede causar daño emocional y mental significativo." },
    { question: "¿Tener una mejor comunicación con los padres puede ayudar a reducir los conflictos familiares?", answer: true, explanation: "Una comunicación abierta y honesta con los padres puede mejorar las relaciones y reducir los conflictos." },
    { question: "¿La violencia de pareja solo ocurre en relaciones de adultos?", answer: false, explanation: "La violencia de pareja puede ocurrir en relaciones adolescentes y adultas." },
    { question: "¿El embarazo adolescente puede tener consecuencias en la educación y la salud?", answer: true, explanation: "El embarazo adolescente puede interrumpir la educación y presentar riesgos de salud para la madre y el bebé." },
    { question: "¿La depresión es solo una tristeza pasajera?", answer: false, explanation: "La depresión es un trastorno mental serio que requiere tratamiento." },
    { question: "¿La ansiedad puede afectar el rendimiento académico?", answer: true, explanation: "La ansiedad puede dificultar la concentración y el rendimiento académico." },
    { question: "¿El suicidio es una solución permanente a problemas temporales?", answer: false, explanation: "El suicidio es una tragedia evitable y hay ayuda disponible para aquellos que la necesitan." },
    { question: "¿Tener baja autoestima puede afectar las relaciones interpersonales?", answer: true, explanation: "La baja autoestima puede llevar a dificultades en las relaciones y en la vida diaria." },
    { question: "¿El uso de sustancias es una forma efectiva de manejar el estrés?", answer: false, explanation: "El uso de sustancias puede llevar a la adicción y otros problemas de salud." },
    { question: "¿Los trastornos alimenticios afectan solo a las mujeres?", answer: false, explanation: "Los trastornos alimenticios pueden afectar a personas de cualquier género." },
    { question: "¿Los accidentes de tránsito son una de las principales causas de muerte entre adolescentes?", answer: true, explanation: "Los accidentes de tránsito son una de las principales causas de muerte en adolescentes a nivel mundial." },
    { question: "¿El consumo de tabaco es seguro si se hace de manera moderada?", answer: false, explanation: "No existe una cantidad segura de consumo de tabaco; todos los niveles de consumo son perjudiciales." },
    { question: "¿La infección por VIH solo afecta a ciertos grupos de personas?", answer: false, explanation: "Cualquier persona puede contraer el VIH, independientemente de su grupo o contexto." },
    { question: "¿La tuberculosis es una enfermedad curable?", answer: true, explanation: "La tuberculosis es tratable y curable con el diagnóstico y tratamiento adecuados." },
    { question: "¿El sobrepeso siempre es una cuestión de mala alimentación?", answer: false, explanation: "El sobrepeso puede ser influenciado por una variedad de factores, incluyendo genética y metabolismo." },
    { question: "¿La actividad física regular es beneficiosa para la salud mental?", answer: true, explanation: "La actividad física regular puede mejorar el estado de ánimo y reducir los síntomas de la depresión y la ansiedad." },
    { question: "¿Tener una imagen corporal positiva solo es importante para las mujeres?", answer: false, explanation: "Tener una imagen corporal positiva es importante para personas de todos los géneros." },
    { question: "¿Vapear es una alternativa segura al tabaco?", answer: false, explanation: "Vapear puede presentar riesgos para la salud y no es una alternativa segura al tabaco." },
    { question: "¿La adicción al internet puede afectar la vida diaria y las relaciones?", answer: true, explanation: "La adicción al internet puede interferir con las actividades diarias y las relaciones personales." },
    { question: "¿La presión social solo afecta a los adolescentes?", answer: false, explanation: "La presión social puede afectar a personas de todas las edades." },
    { question: "¿La homofobia es una forma de discriminación?", answer: true, explanation: "La homofobia es una forma de discriminación basada en la orientación sexual." },
    { question: "¿Los conflictos con los padres son normales durante la adolescencia?", answer: true, explanation: "Es común experimentar conflictos con los padres durante la adolescencia debido a los cambios y el deseo de independencia." },
    { question: "¿El acoso callejero es una forma de violencia de género?", answer: true, explanation: "El acoso callejero es una forma de violencia de género que afecta mayormente a mujeres y personas de la comunidad LGBTIQ+." },
    { question: "¿Es normal sentirse desorientado hacia el futuro durante la adolescencia?", answer: true, explanation: "Es normal que los adolescentes se sientan desorientados hacia el futuro debido a los cambios y decisiones importantes que enfrentan." },
    { question: "¿Las pandillas y sectas pueden ofrecer un falso sentido de pertenencia?", answer: true, explanation: "Las pandillas y sectas pueden atraer a individuos en busca de pertenencia, pero a menudo conducen a comportamientos peligrosos y dañinos." }
];

let currentQuestionIndex_yesorno = 0;
let score_yesorno = [];
let displayedQuestions_yesorno = [];
var character_yn = document.getElementById("littlecharacter_yn");

const questionElement = document.getElementById('question_yesorno');
const scoreElement = document.getElementById('score_yesorno');
const container1_yn = document.getElementById('container1_yn');
const container2_yn = document.getElementById('container2_yn');
const answerButtonsElement = document.getElementById('answer-buttons');
const thumbnail_yn = document.querySelector('#yesornogame #thumbnail');

// Hide containers initially

container1_yn.style.display = "none"
container2_yn.style.display = "none"


// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to start the game
function start_yesorno() {
    const startBtn = document.getElementById('startBtn_yesorno');
    startBtn.classList.add("hidden")
    thumbnail_yn.classList.add("hidden")
    container1_yn.style.display="block"
    container2_yn.style.display="block"

    shuffle(questions_yesorno);
    displayedQuestions_yesorno = questions_yesorno.slice(0, 10);

    displayQuestion_yesorno();
    updateScore_yesorno();
}

// Function to display current question
function displayQuestion_yesorno() {
    if (currentQuestionIndex_yesorno < displayedQuestions_yesorno.length) {
        questionElement.textContent = displayedQuestions_yesorno[currentQuestionIndex_yesorno].question;
    } else {
        endGame_yesorno();
    }
}

// Function to update score display
function updateScore_yesorno() {
    scoreElement.textContent = "Puntos: " + score_yesorno.join(" ");
}

// Function to answer a question
function answerQuestion_yesorno(answer_yesorno) {
    let correctAnswer_yesorno = displayedQuestions_yesorno[currentQuestionIndex_yesorno].answer;
    if (answer_yesorno === correctAnswer_yesorno) {
        playAnimation_yn()
        score_yesorno.push("O");
    } else {
        score_yesorno.push("X");
    }
    currentQuestionIndex_yesorno++;
    updateScore_yesorno();
    displayQuestion_yesorno();
}

const playAnimation_yn = () => {
    let index = 0;
    let loops = 0;
    const maxLoops = 3;

    const interval = setInterval(() => {
        character_yn.src = animation_yn[index];
        index = (index + 1) % animation_yn.length;
        if (index === 0) {
            loops++;
            if (loops === maxLoops) {
                clearInterval(interval);
                character_yn.src = animation_yn[0];
            }
        }
    }, 50);
};

// Function to end the game
function endGame_yesorno() {
    container1_yn.style.display = "none";
    questionElement.textContent = "";
    answerButtonsElement.style.display = "none";
    container2_yn.style.paddingBottom = "20px";
    displayResults_yesorno();
}

// Function to display final results
function displayResults_yesorno() {
    let results_yesorno = "<h4>Respuestas</h4>";
    for (let i_yesorno = 0; i_yesorno < displayedQuestions_yesorno.length; i_yesorno++) {
        let correctAnswer_yesorno = displayedQuestions_yesorno[i_yesorno].answer ? "Verdad" : "Mentira";
        let resultClass_yesorno = score_yesorno[i_yesorno] === "O" ? "correct" : "incorrect";
        results_yesorno += `<br> <h3 class="${resultClass_yesorno}">${displayedQuestions_yesorno[i_yesorno].question}></h3> <p <br> Tu respuesta: ${score_yesorno[i_yesorno] === "O" ? correctAnswer_yesorno : (correctAnswer_yesorno === "Verdad" ? "Mentira" : "Verdad")}, Respuesta Correcta: ${correctAnswer_yesorno}` ;
        if (score_yesorno[i_yesorno] === "X") {
            results_yesorno += `<br> Explicación: ${displayedQuestions_yesorno[i_yesorno].explanation}`;
        }
        results_yesorno += `</p>`;
    }
    // Replace content in container2_yn with results
    container2_yn.innerHTML = results_yesorno;
}