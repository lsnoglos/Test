const QUESTION_BANK = [
  // Método científico y empírico
  { topic: "metodos", q: "¿Qué es el conocimiento empírico?", o: ["Aprender por experiencia", "Aprender solo en libros", "No aprender"], a: 0 },
  { topic: "metodos", q: "¿Qué es el conocimiento científico?", o: ["Ideas sin prueba", "Conocimiento con observación y experimentos", "Un cuento"], a: 1 },
  { topic: "metodos", q: "Si tocas una olla caliente y te quemas, eso es...", o: ["Conocimiento empírico", "Conocimiento científico", "Un juego"], a: 0 },
  { topic: "metodos", q: "Si haces un experimento para saber por qué llueve, usas...", o: ["Conocimiento científico", "Solo suerte", "Imaginación"], a: 0 },
  { topic: "metodos", q: "El conocimiento científico debe ser...", o: ["Comprobable", "Secreto", "Mágico"], a: 0 },
  { topic: "metodos", q: "El conocimiento empírico viene de...", o: ["La experiencia diaria", "Un robot", "Un dibujo"], a: 0 },
  { topic: "metodos", q: "¿Cuál necesita pruebas y análisis?", o: ["Empírico", "Científico", "Ninguno"], a: 1 },
  { topic: "metodos", q: "'El hielo se derrite con calor' es una idea que podemos...", o: ["Comprobar", "Ignorar", "Borrar"], a: 0 },
  { topic: "metodos", q: "El conocimiento científico es más...", o: ["Ordenado y sistemático", "Desordenado", "Invisible"], a: 0 },
  { topic: "metodos", q: "¿Cuál puede cambiar si hay nuevas pruebas?", o: ["Científico", "Empírico nunca", "Ninguno"], a: 0 },
  { topic: "metodos", q: "Aprender a montar bicicleta practicando es...", o: ["Empírico", "Científico", "Arte"], a: 0 },
  { topic: "metodos", q: "Medir la temperatura del agua para estudiar ebullición es...", o: ["Empírico", "Científico", "Adivinanza"], a: 1 },
  { topic: "metodos", q: "En ciencia usamos herramientas como...", o: ["Termómetro", "Varita mágica", "Nada"], a: 0 },
  { topic: "metodos", q: "Una diferencia clave: el conocimiento científico es...", o: ["Verificable", "Imposible de revisar", "Solo opinión"], a: 0 },
  { topic: "metodos", q: "El conocimiento empírico puede nacer de...", o: ["Probar y vivir situaciones", "Solo internet", "Solo televisión"], a: 0 },
  { topic: "metodos", q: "¿Cuál frase es científica?", o: ["Creo que", "Observé y medí", "Me lo soñé"], a: 1 },
  { topic: "metodos", q: "Si repetimos un experimento y sale parecido, eso ayuda a...", o: ["Comprobar", "Confundir", "Dormir"], a: 0 },
  { topic: "metodos", q: "Conocimiento empírico y científico sirven para...", o: ["Entender el mundo", "No aprender", "Pelear"], a: 0 },
  { topic: "metodos", q: "El conocimiento científico se basa en...", o: ["Observación y experimentación", "Rumores", "Aplausos"], a: 0 },
  { topic: "metodos", q: "Conocimiento empírico significa aprender...", o: ["Con lo que vivimos", "Solo con exámenes", "Sin pensar"], a: 0 },

  // Naturaleza
  { topic: "naturaleza", q: "¿Qué son los avances científicos?", o: ["Descubrimientos sobre la naturaleza", "Chistes", "Juegos de azar"], a: 0 },
  { topic: "naturaleza", q: "¿Qué son los avances tecnológicos?", o: ["Herramientas creadas con ciencia", "Nubes", "Montañas"], a: 0 },
  { topic: "naturaleza", q: "Un ejemplo de avance científico es...", o: ["Descubrir una vacuna", "Pintar una pared", "Saltar la cuerda"], a: 0 },
  { topic: "naturaleza", q: "Un ejemplo de avance tecnológico es...", o: ["Celular", "Arcoíris", "Lluvia"], a: 0 },
  { topic: "naturaleza", q: "Las vacunas ayudan a...", o: ["Prevenir enfermedades", "Apagar el sol", "Volar"], a: 0 },
  { topic: "naturaleza", q: "La computadora sirve para...", o: ["Aprender e investigar", "Solo dormir", "No hacer nada"], a: 0 },
  { topic: "naturaleza", q: "Internet nos permite...", o: ["Buscar información", "Comer lápices", "Parar el tiempo"], a: 0 },
  { topic: "naturaleza", q: "La medicina mejora...", o: ["La salud", "El color del cielo", "El tamaño del mar"], a: 0 },
  { topic: "naturaleza", q: "Un transporte moderno es un avance...", o: ["Tecnológico", "Ninguno", "Natural"], a: 0 },
  { topic: "naturaleza", q: "Los avances ayudan en la vida cotidiana porque...", o: ["Hacen tareas más fáciles", "Complican todo", "No sirven"], a: 0 },
  { topic: "naturaleza", q: "Un robot en una fábrica es ejemplo de...", o: ["Tecnología", "Planta", "Animal"], a: 0 },
  { topic: "naturaleza", q: "Un telescopio ayuda a...", o: ["Observar el espacio", "Escuchar música", "Cocinar"], a: 0 },
  { topic: "naturaleza", q: "La electricidad en casa es importante porque...", o: ["Permite usar aparatos", "Detiene la lluvia", "Cambia el sabor"], a: 0 },
  { topic: "naturaleza", q: "Los avances científicos nacen de...", o: ["Investigación", "Pereza", "Silencio"], a: 0 },
  { topic: "naturaleza", q: "La tecnología debe usarse con...", o: ["Responsabilidad", "Miedo", "Gritos"], a: 0 },
  { topic: "naturaleza", q: "¿Qué mejora la comunicación?", o: ["Celular e internet", "Piedras", "Humo"], a: 0 },
  { topic: "naturaleza", q: "Un microscopio sirve para ver...", o: ["Cosas muy pequeñas", "Planetas lejanos", "Nada"], a: 0 },
  { topic: "naturaleza", q: "La ciencia y la tecnología juntas...", o: ["Ayudan a resolver problemas", "No tienen relación", "Solo entretienen"], a: 0 },
  { topic: "naturaleza", q: "Una prótesis moderna es avance...", o: ["Tecnológico y médico", "Solo artístico", "Ninguno"], a: 0 },
  { topic: "naturaleza", q: "Cuando una herramienta ahorra tiempo, decimos que...", o: ["Aumenta la comodidad", "Es inútil", "Es invisible"], a: 0 },

  // 5 sentidos
  { topic: "sentidos", q: "¿Cuántos sentidos principales aprendemos aquí?", o: ["Cinco", "Dos", "Diez"], a: 0 },
  { topic: "sentidos", q: "¿Con cuál sentido vemos colores y formas?", o: ["Vista", "Oído", "Olfato"], a: 0 },
  { topic: "sentidos", q: "¿Con cuál sentido escuchamos sonidos?", o: ["Oído", "Gusto", "Tacto"], a: 0 },
  { topic: "sentidos", q: "¿Con cuál sentido percibimos olores?", o: ["Olfato", "Vista", "Oído"], a: 0 },
  { topic: "sentidos", q: "¿Con cuál sentido detectamos sabores?", o: ["Gusto", "Tacto", "Vista"], a: 0 },
  { topic: "sentidos", q: "¿Con cuál sentido sentimos frío, calor o textura?", o: ["Tacto", "Olfato", "Oído"], a: 0 },
  { topic: "sentidos", q: "Ver una mariposa usa principalmente...", o: ["Vista", "Gusto", "Olfato"], a: 0 },
  { topic: "sentidos", q: "Escuchar una canción usa...", o: ["Oído", "Tacto", "Vista"], a: 0 },
  { topic: "sentidos", q: "Oler una flor usa...", o: ["Olfato", "Oído", "Gusto"], a: 0 },
  { topic: "sentidos", q: "Probar una fresa dulce usa...", o: ["Gusto", "Vista", "Olfato"], a: 0 },
  { topic: "sentidos", q: "Tocar algodón suave usa...", o: ["Tacto", "Oído", "Vista"], a: 0 },
  { topic: "sentidos", q: "Los sentidos nos ayudan a...", o: ["Conocer el entorno", "Dormir todo el día", "Olvidar todo"], a: 0 },
  { topic: "sentidos", q: "Si hueles humo y te alejas, tus sentidos te ayudan a...", o: ["Detectar peligro", "Bailar", "Jugar cartas"], a: 0 },
  { topic: "sentidos", q: "¿Qué sentido usas para leer un libro?", o: ["Vista", "Oído", "Gusto"], a: 0 },
  { topic: "sentidos", q: "¿Qué sentido usas para escuchar la campana de la escuela?", o: ["Oído", "Tacto", "Olfato"], a: 0 },
  { topic: "sentidos", q: "Si una sopa está salada, lo notas con...", o: ["Gusto", "Vista", "Tacto"], a: 0 },
  { topic: "sentidos", q: "Para saber si algo está áspero o liso usamos...", o: ["Tacto", "Olfato", "Gusto"], a: 0 },
  { topic: "sentidos", q: "Todos los sentidos son...", o: ["Importantes", "Inútiles", "Iguales a un juguete"], a: 0 },
  { topic: "sentidos", q: "Vista, oído, olfato, gusto y tacto son...", o: ["Los cinco sentidos", "Las estaciones", "Los planetas"], a: 0 },
  { topic: "sentidos", q: "Gracias a los sentidos podemos comunicarnos mejor porque...", o: ["Entendemos lo que pasa", "No escuchamos", "No vemos"], a: 0 },

  // Pubertad
  { topic: "pubertad", q: "La pubertad es una etapa de...", o: ["Cambios en el cuerpo y emociones", "No cambiar nada", "Hibernar"], a: 0 },
  { topic: "pubertad", q: "Durante la pubertad puede ocurrir...", o: ["Crecimiento del cuerpo", "Encogerse mucho", "Volverse robot"], a: 0 },
  { topic: "pubertad", q: "También hay cambios en...", o: ["Emociones", "Solo zapatos", "Solo mochilas"], a: 0 },
  { topic: "pubertad", q: "Sentir emociones intensas a veces es...", o: ["Normal en esta etapa", "Siempre malo", "Raro"], a: 0 },
  { topic: "pubertad", q: "En la pubertad debemos cuidar nuestra autoestima porque...", o: ["Somos valiosos", "No importamos", "Solo importa la ropa"], a: 0 },
  { topic: "pubertad", q: "Dormir bien durante el crecimiento es...", o: ["Importante", "Inútil", "Prohibido"], a: 0 },
  { topic: "pubertad", q: "Comer saludable ayuda en la pubertad porque...", o: ["El cuerpo necesita energía", "No cambia nada", "Solo importa el sabor"], a: 0 },
  { topic: "pubertad", q: "Hablar con respeto sobre cambios del cuerpo es...", o: ["Correcto", "Vergonzoso siempre", "Malo"], a: 0 },
  { topic: "pubertad", q: "Si me siento triste o confundido, puedo...", o: ["Hablar con familia o docente", "Callarme siempre", "Gritar a todos"], a: 0 },
  { topic: "pubertad", q: "La pubertad llega en...", o: ["Momentos diferentes para cada persona", "El mismo día para todos", "Nunca"], a: 0 },

  // Higiene
  { topic: "higiene", q: "La higiene personal es importante para...", o: ["Cuidar la salud", "Ensuciar más", "No importa"], a: 0 },
  { topic: "higiene", q: "Bañarse con regularidad ayuda a...", o: ["Mantener el cuerpo limpio", "Enfermarse", "Olvidar tareas"], a: 0 },
  { topic: "higiene", q: "Lavarse las manos sirve para...", o: ["Evitar enfermedades", "Pintarse", "No hacer nada"], a: 0 },
  { topic: "higiene", q: "Cepillarse los dientes ayuda a...", o: ["Cuidar la boca", "Dormir menos", "Saltar más"], a: 0 },
  { topic: "higiene", q: "Usar ropa limpia es parte de...", o: ["La higiene", "La astronomía", "La música"], a: 0 },
  { topic: "higiene", q: "Mantener hábitos de higiene nos ayuda a...", o: ["Sentirnos mejor", "Sentirnos peor", "No importa"], a: 0 },
  { topic: "higiene", q: "Cuidar el cuerpo incluye...", o: ["Higiene, descanso y buena alimentación", "Solo jugar", "Solo ver TV"], a: 0 },
  { topic: "higiene", q: "En esta etapa debemos practicar...", o: ["Autocuidado y respeto", "Burlas", "Desorden"], a: 0 },
  { topic: "higiene", q: "Pedir ayuda a un adulto de confianza cuando tienes dudas es...", o: ["Buena idea", "Mala idea", "Innecesario"], a: 0 },
  { topic: "higiene", q: "Lavar frutas y verduras antes de comer ayuda a...", o: ["Cuidar la salud", "Perder tiempo", "No sirve"], a: 0 }
];

const TOPIC_KEYS = ["pubertad", "higiene", "naturaleza", "sentidos", "metodos"];
const TOTAL_WHEN_ALL = 100;
const TOTAL_WHEN_ONE = 50;

let quizQuestions = [];
let current = 0;
let correctCount = 0;
let wrongCount = 0;
let answered = false;

const startPanel = document.getElementById("startPanel");
const quizCard = document.getElementById("quizCard");
const actions = document.querySelector(".actions");
const questionText = document.getElementById("questionText");
const options = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const result = document.getElementById("result");
const scoreGood = document.getElementById("scoreGood");
const scoreBad = document.getElementById("scoreBad");
const startBtn = document.getElementById("startBtn");
const setupMessage = document.getElementById("setupMessage");
const topicChecks = [...document.querySelectorAll(".topic-check")];

const optionPool = [...new Set(QUESTION_BANK.flatMap((x) => x.o))];

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getSelectedTopics() {
  return topicChecks.filter((c) => c.checked).map((c) => c.value);
}

function resolveTotalQuestions(selectedTopics) {
  if (selectedTopics.length === 1) return TOTAL_WHEN_ONE;
  if (selectedTopics.length === TOPIC_KEYS.length) return TOTAL_WHEN_ALL;
  return TOTAL_WHEN_ALL;
}

function withFourShuffledOptions(baseQuestion) {
  const correctText = baseQuestion.o[baseQuestion.a];
  const wrongSet = new Set(baseQuestion.o.filter((_, idx) => idx !== baseQuestion.a));

  while (wrongSet.size < 3) {
    const randomOption = optionPool[Math.floor(Math.random() * optionPool.length)];
    if (randomOption !== correctText) wrongSet.add(randomOption);
  }

  const selectedWrong = shuffle([...wrongSet]).slice(0, 3);
  const shuffledOptions = shuffle([correctText, ...selectedWrong]);

  return {
    q: baseQuestion.q,
    topic: baseQuestion.topic,
    o: shuffledOptions,
    a: shuffledOptions.indexOf(correctText)
  };
}

function buildQuiz() {
  const selectedTopics = getSelectedTopics();
  if (selectedTopics.length === 0) {
    setupMessage.textContent = "Selecciona al menos un tema para empezar.";
    return false;
  }

  setupMessage.textContent = "";
  const targetTotal = resolveTotalQuestions(selectedTopics);
  const sourcePool = QUESTION_BANK.filter((item) => selectedTopics.includes(item.topic));

  quizQuestions = Array.from({ length: targetTotal }, () => {
    const template = sourcePool[Math.floor(Math.random() * sourcePool.length)];
    return withFourShuffledOptions(template);
  });

  current = 0;
  correctCount = 0;
  wrongCount = 0;
  result.classList.add("hidden");
  startPanel.classList.add("hidden");
  quizCard.classList.remove("hidden");
  actions.classList.remove("hidden");
  updateScoreboard();
  renderQuestion();
  return true;
}

function updateScoreboard() {
  scoreGood.textContent = correctCount;
  scoreBad.textContent = wrongCount;
}

function resetEffects() {
  document.body.classList.remove("fx-correct", "fx-wrong");
}

function renderQuestion() {
  resetEffects();
  const item = quizQuestions[current];
  answered = false;
  nextBtn.disabled = true;
  feedback.textContent = "";
  feedback.className = "feedback";

  progressText.textContent = `Pregunta ${current + 1} de ${quizQuestions.length}`;
  progressBar.style.width = `${((current + 1) / quizQuestions.length) * 100}%`;

  questionText.textContent = item.q;
  options.innerHTML = "";

  item.o.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt;
    btn.addEventListener("click", () => selectAnswer(btn, idx));
    options.appendChild(btn);
  });
}

function selectAnswer(btn, idx) {
  if (answered) return;
  answered = true;

  const item = quizQuestions[current];
  const all = [...document.querySelectorAll(".option")];

  all.forEach((b, i) => {
    b.disabled = true;
    if (i === item.a) b.classList.add("correct");
  });

  if (idx === item.a) {
    correctCount += 1;
    feedback.textContent = "✅ ¡Correcta!";
    feedback.classList.add("ok");
    document.body.classList.add("fx-correct");
  } else {
    wrongCount += 1;
    btn.classList.add("wrong");
    feedback.textContent = "⚡ Incorrecta, ¡vamos por la siguiente!";
    feedback.classList.add("bad");
    document.body.classList.add("fx-wrong");
  }

  updateScoreboard();
  nextBtn.disabled = false;
}

function nextQuestion() {
  if (current < quizQuestions.length - 1) {
    current += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  resetEffects();
  quizCard.classList.add("hidden");
  actions.classList.add("hidden");
  result.classList.remove("hidden");

  const score = (correctCount / quizQuestions.length) * 100;
  const scoreRounded = Number(score.toFixed(2));
  let medal = "🌱";
  if (scoreRounded >= 90) medal = "🏆";
  else if (scoreRounded >= 70) medal = "🥇";
  else if (scoreRounded >= 50) medal = "🥈";

  result.innerHTML = `
    <h2>${medal} ¡Terminaste el test!</h2>
    <p><strong>Buenas:</strong> ${correctCount} | <strong>Malas:</strong> ${wrongCount}</p>
    <p>Tu calificación fue <strong>${scoreRounded} / 100</strong>.</p>
    <button id="playAgain" class="btn">Jugar otra vez</button>
  `;

  document.getElementById("playAgain").addEventListener("click", goToSetup);
}

function goToSetup() {
  resetEffects();
  result.classList.add("hidden");
  startPanel.classList.remove("hidden");
  quizCard.classList.add("hidden");
  actions.classList.add("hidden");
  progressBar.style.width = "0%";
  progressText.textContent = "Selecciona temas para iniciar";
}

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", goToSetup);
startBtn.addEventListener("click", buildQuiz);

goToSetup();
