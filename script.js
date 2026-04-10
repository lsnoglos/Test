const questions = [
  // 1) Conocimiento empírico y científico (20)
  { q: "¿Qué es el conocimiento empírico?", o: ["Aprender por experiencia", "Aprender solo en libros", "No aprender"], a: 0 },
  { q: "¿Qué es el conocimiento científico?", o: ["Ideas sin prueba", "Conocimiento con observación y experimentos", "Un cuento"], a: 1 },
  { q: "Si tocas una olla caliente y te quemas, eso es...", o: ["Conocimiento empírico", "Conocimiento científico", "Un juego"], a: 0 },
  { q: "Si haces un experimento para saber por qué llueve, usas...", o: ["Conocimiento científico", "Solo suerte", "Imaginación"], a: 0 },
  { q: "El conocimiento científico debe ser...", o: ["Comprobable", "Secreto", "Mágico"], a: 0 },
  { q: "El conocimiento empírico viene de...", o: ["La experiencia diaria", "Un robot", "Un dibujo"], a: 0 },
  { q: "¿Cuál necesita pruebas y análisis?", o: ["Empírico", "Científico", "Ninguno"], a: 1 },
  { q: "" + "'El hielo se derrite con calor'" + " es una idea que podemos...", o: ["Comprobar", "Ignorar", "Borrar"], a: 0 },
  { q: "El conocimiento científico es más...", o: ["Ordenado y sistemático", "Desordenado", "Invisible"], a: 0 },
  { q: "¿Cuál puede cambiar si hay nuevas pruebas?", o: ["Científico", "Empírico nunca", "Ninguno"], a: 0 },
  { q: "Aprender a montar bicicleta practicando es...", o: ["Empírico", "Científico", "Arte"], a: 0 },
  { q: "Medir la temperatura del agua para estudiar ebullición es...", o: ["Empírico", "Científico", "Adivinanza"], a: 1 },
  { q: "En ciencia usamos herramientas como...", o: ["Termómetro", "Varita mágica", "Nada"], a: 0 },
  { q: "Una diferencia clave: el conocimiento científico es...", o: ["Verificable", "Imposible de revisar", "Solo opinión"], a: 0 },
  { q: "El conocimiento empírico puede nacer de...", o: ["Probar y vivir situaciones", "Solo internet", "Solo televisión"], a: 0 },
  { q: "¿Cuál frase es científica?", o: ["Creo que", "Observé y medí", "Me lo soñé"], a: 1 },
  { q: "Si repetimos un experimento y sale parecido, eso ayuda a...", o: ["Comprobar", "Confundir", "Dormir"], a: 0 },
  { q: "Conocimiento empírico y científico sirven para...", o: ["Entender el mundo", "No aprender", "Pelear"], a: 0 },
  { q: "El conocimiento científico se basa en...", o: ["Observación y experimentación", "Rumores", "Aplausos"], a: 0 },
  { q: "Conocimiento empírico significa aprender...", o: ["Con lo que vivimos", "Solo con exámenes", "Sin pensar"], a: 0 },

  // 2) Avances científicos y tecnológicos (20)
  { q: "¿Qué son los avances científicos?", o: ["Descubrimientos sobre la naturaleza", "Chistes", "Juegos de azar"], a: 0 },
  { q: "¿Qué son los avances tecnológicos?", o: ["Herramientas creadas con ciencia", "Nubes", "Montañas"], a: 0 },
  { q: "Un ejemplo de avance científico es...", o: ["Descubrir una vacuna", "Pintar una pared", "Saltar la cuerda"], a: 0 },
  { q: "Un ejemplo de avance tecnológico es...", o: ["Celular", "Arcoíris", "Lluvia"], a: 0 },
  { q: "Las vacunas ayudan a...", o: ["Prevenir enfermedades", "Apagar el sol", "Volar"], a: 0 },
  { q: "La computadora sirve para...", o: ["Aprender e investigar", "Solo dormir", "No hacer nada"], a: 0 },
  { q: "Internet nos permite...", o: ["Buscar información", "Comer lápices", "Parar el tiempo"], a: 0 },
  { q: "La medicina mejora...", o: ["La salud", "El color del cielo", "El tamaño del mar"], a: 0 },
  { q: "Un transporte moderno es un avance...", o: ["Tecnológico", "Ninguno", "Natural"], a: 0 },
  { q: "Los avances ayudan en la vida cotidiana porque...", o: ["Hacen tareas más fáciles", "Complican todo", "No sirven"], a: 0 },
  { q: "Un robot en una fábrica es ejemplo de...", o: ["Tecnología", "Planta", "Animal"], a: 0 },
  { q: "Un telescopio ayuda a...", o: ["Observar el espacio", "Escuchar música", "Cocinar"], a: 0 },
  { q: "La electricidad en casa es importante porque...", o: ["Permite usar aparatos", "Detiene la lluvia", "Cambia el sabor"], a: 0 },
  { q: "Los avances científicos nacen de...", o: ["Investigación", "Pereza", "Silencio"], a: 0 },
  { q: "La tecnología debe usarse con...", o: ["Responsabilidad", "Miedo", "Gritos"], a: 0 },
  { q: "¿Qué mejora la comunicación?", o: ["Celular e internet", "Piedras", "Humo"], a: 0 },
  { q: "Un microscopio sirve para ver...", o: ["Cosas muy pequeñas", "Planetas lejanos", "Nada"], a: 0 },
  { q: "La ciencia y la tecnología juntas...", o: ["Ayudan a resolver problemas", "No tienen relación", "Solo entretienen"], a: 0 },
  { q: "Una prótesis moderna es avance...", o: ["Tecnológico y médico", "Solo artístico", "Ninguno"], a: 0 },
  { q: "Cuando una herramienta ahorra tiempo, decimos que...", o: ["Aumenta la comodidad", "Es inútil", "Es invisible"], a: 0 },

  // 3) Los cinco sentidos (20)
  { q: "¿Cuántos sentidos principales aprendemos aquí?", o: ["Cinco", "Dos", "Diez"], a: 0 },
  { q: "¿Con cuál sentido vemos colores y formas?", o: ["Vista", "Oído", "Olfato"], a: 0 },
  { q: "¿Con cuál sentido escuchamos sonidos?", o: ["Oído", "Gusto", "Tacto"], a: 0 },
  { q: "¿Con cuál sentido percibimos olores?", o: ["Olfato", "Vista", "Oído"], a: 0 },
  { q: "¿Con cuál sentido detectamos sabores?", o: ["Gusto", "Tacto", "Vista"], a: 0 },
  { q: "¿Con cuál sentido sentimos frío, calor o textura?", o: ["Tacto", "Olfato", "Oído"], a: 0 },
  { q: "Ver una mariposa usa principalmente...", o: ["Vista", "Gusto", "Olfato"], a: 0 },
  { q: "Escuchar una canción usa...", o: ["Oído", "Tacto", "Vista"], a: 0 },
  { q: "Oler una flor usa...", o: ["Olfato", "Oído", "Gusto"], a: 0 },
  { q: "Probar una fresa dulce usa...", o: ["Gusto", "Vista", "Olfato"], a: 0 },
  { q: "Tocar algodón suave usa...", o: ["Tacto", "Oído", "Vista"], a: 0 },
  { q: "Los sentidos nos ayudan a...", o: ["Conocer el entorno", "Dormir todo el día", "Olvidar todo"], a: 0 },
  { q: "Si hueles humo y te alejas, tus sentidos te ayudan a...", o: ["Detectar peligro", "Bailar", "Jugar cartas"], a: 0 },
  { q: "¿Qué sentido usas para leer un libro?", o: ["Vista", "Oído", "Gusto"], a: 0 },
  { q: "¿Qué sentido usas para escuchar la campana de la escuela?", o: ["Oído", "Tacto", "Olfato"], a: 0 },
  { q: "Si una sopa está salada, lo notas con...", o: ["Gusto", "Vista", "Tacto"], a: 0 },
  { q: "Para saber si algo está áspero o liso usamos...", o: ["Tacto", "Olfato", "Gusto"], a: 0 },
  { q: "Todos los sentidos son...", o: ["Importantes", "Inútiles", "Iguales a un juguete"], a: 0 },
  { q: "Vista, oído, olfato, gusto y tacto son...", o: ["Los cinco sentidos", "Las estaciones", "Los planetas"], a: 0 },
  { q: "Gracias a los sentidos podemos comunicarnos mejor porque...", o: ["Entendemos lo que pasa", "No escuchamos", "No vemos"], a: 0 },

  // 4) Pubertad e higiene (20)
  { q: "La pubertad es una etapa de...", o: ["Cambios en el cuerpo y emociones", "No cambiar nada", "Hibernar"], a: 0 },
  { q: "Durante la pubertad puede ocurrir...", o: ["Crecimiento del cuerpo", "Encogerse mucho", "Volverse robot"], a: 0 },
  { q: "También hay cambios en...", o: ["Emociones", "Solo zapatos", "Solo mochilas"], a: 0 },
  { q: "Sentir emociones intensas a veces es...", o: ["Normal en esta etapa", "Siempre malo", "Raro"], a: 0 },
  { q: "La higiene personal es importante para...", o: ["Cuidar la salud", "Ensuciar más", "No importa"], a: 0 },
  { q: "Bañarse con regularidad ayuda a...", o: ["Mantener el cuerpo limpio", "Enfermarse", "Olvidar tareas"], a: 0 },
  { q: "Lavarse las manos sirve para...", o: ["Evitar enfermedades", "Pintarse", "No hacer nada"], a: 0 },
  { q: "Cepillarse los dientes ayuda a...", o: ["Cuidar la boca", "Dormir menos", "Saltar más"], a: 0 },
  { q: "Usar ropa limpia es parte de...", o: ["La higiene", "La astronomía", "La música"], a: 0 },
  { q: "Pedir ayuda a un adulto de confianza cuando tienes dudas es...", o: ["Buena idea", "Mala idea", "Innecesario"], a: 0 },
  { q: "En la pubertad debemos cuidar nuestra autoestima porque...", o: ["Somos valiosos", "No importamos", "Solo importa la ropa"], a: 0 },
  { q: "Dormir bien durante el crecimiento es...", o: ["Importante", "Inútil", "Prohibido"], a: 0 },
  { q: "Comer saludable ayuda en la pubertad porque...", o: ["El cuerpo necesita energía", "No cambia nada", "Solo importa el sabor"], a: 0 },
  { q: "Hablar con respeto sobre cambios del cuerpo es...", o: ["Correcto", "Vergonzoso siempre", "Malo"], a: 0 },
  { q: "Si me siento triste o confundido, puedo...", o: ["Hablar con familia o docente", "Callarme siempre", "Gritar a todos"], a: 0 },
  { q: "Mantener hábitos de higiene nos ayuda a...", o: ["Sentirnos mejor", "Sentirnos peor", "No importa"], a: 0 },
  { q: "La pubertad llega en...", o: ["Momentos diferentes para cada persona", "El mismo día para todos", "Nunca"], a: 0 },
  { q: "Respetar los cambios de los demás es...", o: ["Muy importante", "Sin importancia", "Divertido para burlarse"], a: 0 },
  { q: "Cuidar el cuerpo incluye...", o: ["Higiene, descanso y buena alimentación", "Solo jugar", "Solo ver TV"], a: 0 },
  { q: "En esta etapa debemos practicar...", o: ["Autocuidado y respeto", "Burlas", "Desorden"], a: 0 },

  // 5) Niñas y niños, respeto, sexo y género (20)
  { q: "Niñas y niños merecen...", o: ["Igual respeto", "Trato diferente injusto", "Menos derechos"], a: 0 },
  { q: "Respetar a otros significa...", o: ["Tratar bien y escuchar", "Insultar", "Excluir"], a: 0 },
  { q: "Las diferencias físicas básicas deben...", o: ["Respetarse", "Burlarse", "Esconderse"], a: 0 },
  { q: "Todas las personas tienen...", o: ["Igual dignidad", "Valor distinto", "Sin derechos"], a: 0 },
  { q: "No discriminar quiere decir...", o: ["No tratar mal por diferencias", "Elegir a quién humillar", "Ignorar a todos"], a: 0 },
  { q: "Sexo (explicado simple) se relaciona con...", o: ["Características biológicas", "Pasatiempos", "Comida favorita"], a: 0 },
  { q: "Género (explicado simple) se relaciona con...", o: ["Roles e ideas de la sociedad", "Color de ojos", "Altura"], a: 0 },
  { q: "Una conducta correcta en clase es...", o: ["Respetar a niñas y niños", "Burlarse", "Empujar"], a: 0 },
  { q: "Si alguien es diferente a mí, debo...", o: ["Respetarlo", "Molestarlo", "Ignorarlo"], a: 0 },
  { q: "Los juegos pueden ser para...", o: ["Todas las personas", "Solo un grupo", "Nadie"], a: 0 },
  { q: "Compartir y cooperar en equipo es...", o: ["Una buena actitud", "Mala actitud", "Inútil"], a: 0 },
  { q: "Hablar con palabras amables demuestra...", o: ["Respeto", "Burla", "Enojo"], a: 0 },
  { q: "Si veo discriminación, puedo...", o: ["Pedir ayuda a un adulto", "Reírme", "Imitarla"], a: 0 },
  { q: "Tener amistades diversas es...", o: ["Algo positivo", "Algo malo", "Prohibido"], a: 0 },
  { q: "La igualdad de derechos significa que...", o: ["Todos valemos lo mismo", "Algunos valen menos", "Solo mandan unos"], a: 0 },
  { q: "Respetar el cuerpo de los demás significa...", o: ["No tocar sin permiso", "Empujar por juego", "No escuchar"], a: 0 },
  { q: "La empatía es...", o: ["Ponerse en el lugar del otro", "Competir siempre", "Mandar"], a: 0 },
  { q: "Para convivir mejor en la escuela debemos...", o: ["Ser amables y justos", "Gritar", "Separar grupos"], a: 0 },
  { q: "Un mensaje correcto es...", o: ["Todos merecemos respeto", "Solo algunos merecen respeto", "Nadie importa"], a: 0 },
  { q: "Aprender sobre diferencias nos ayuda a...", o: ["Convivir en paz", "Pelear más", "Ignorar a otros"], a: 0 }
];

let current = 0;
let score = 0;
let answered = false;

const questionText = document.getElementById("questionText");
const options = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const result = document.getElementById("result");

function renderQuestion() {
  const item = questions[current];
  answered = false;
  nextBtn.disabled = true;
  feedback.textContent = "";
  feedback.className = "feedback";

  progressText.textContent = `Pregunta ${current + 1} de ${questions.length}`;
  progressBar.style.width = `${((current + 1) / questions.length) * 100}%`;

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

  const item = questions[current];
  const all = [...document.querySelectorAll(".option")];

  all.forEach((b, i) => {
    b.disabled = true;
    if (i === item.a) b.classList.add("correct");
  });

  if (idx === item.a) {
    score += 1;
    feedback.textContent = "✅ ¡Muy bien!";
    feedback.classList.add("ok");
  } else {
    btn.classList.add("wrong");
    feedback.textContent = "💛 Buen intento. ¡Sigue así!";
    feedback.classList.add("bad");
  }

  nextBtn.disabled = false;
}

function nextQuestion() {
  if (current < questions.length - 1) {
    current += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quizCard").classList.add("hidden");
  document.querySelector(".actions").classList.add("hidden");
  result.classList.remove("hidden");

  const percent = Math.round((score / questions.length) * 100);
  let medal = "🌱";
  if (percent >= 90) medal = "🏆";
  else if (percent >= 70) medal = "🥇";
  else if (percent >= 50) medal = "🥈";

  result.innerHTML = `
    <h2>${medal} ¡Terminaste el test!</h2>
    <p>Tu puntaje fue <strong>${score} / ${questions.length}</strong> (${percent}%).</p>
    <p>Recuerda: aprender, respetar y cuidar tu cuerpo es súper importante. 🌈</p>
    <button id="playAgain" class="btn">Jugar otra vez</button>
  `;

  document.getElementById("playAgain").addEventListener("click", resetQuiz);
}

function resetQuiz() {
  current = 0;
  score = 0;
  result.classList.add("hidden");
  document.getElementById("quizCard").classList.remove("hidden");
  document.querySelector(".actions").classList.remove("hidden");
  renderQuestion();
}

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", resetQuiz);

renderQuestion();
