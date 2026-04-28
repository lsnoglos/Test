const SECTION_KEYS = ["directas", "prestando", "problemas"];

const sectionChecks = [...document.querySelectorAll(".section-check")];
const totalExercisesInput = document.getElementById("totalExercises");
const answerMode = document.getElementById("answerMode");
const generateBtn = document.getElementById("generateBtn");
const gradeBtn = document.getElementById("gradeBtn");
const printBtn = document.getElementById("printBtn");
const setupMessage = document.getElementById("setupMessage");
const worksheetTitle = document.getElementById("worksheetTitle");
const worksheetContent = document.getElementById("worksheetContent");
const resultPanel = document.getElementById("resultPanel");
const resultContent = document.getElementById("resultContent");

let currentExercises = [];
let currentAnswerMode = "multiple";

const nouns = [
  "lápices",
  "canicas",
  "galletas",
  "flores",
  "pasajeros",
  "libros",
  "naranjas",
  "globos",
  "dulces",
  "monedas",
  "sillas",
  "juguetes",
  "huevos",
  "peces",
  "chocolates",
  "cuadernos",
  "pollos",
  "semillas",
  "botellas",
  "estampas"
];

const names = ["Ana", "Luis", "Marta", "Pedro", "Julia", "Carlos", "Rosa", "María", "Sofía", "Diego"];
const places = ["escuela", "tienda", "biblioteca", "granja", "finca", "bodega", "salón", "parque"];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick(arr) {
  return arr[randomInt(0, arr.length - 1)];
}

function getSelectedSections() {
  return sectionChecks.filter((c) => c.checked).map((c) => c.value);
}

function withChoices(answer) {
  const options = new Set([answer]);
  while (options.size < 4) {
    const delta = randomInt(5, 90) * (Math.random() < 0.5 ? -1 : 1);
    const candidate = answer + delta;
    if (candidate >= 0) options.add(candidate);
  }

  return shuffle([...options]);
}

function makeDirectSubtraction() {
  const subtrahend = randomInt(10, 499);
  const result = randomInt(10, 500);
  const minuend = subtrahend + result;
  return {
    section: "directas",
    prompt: `${minuend} - ${subtrahend} = ?`,
    answer: result,
    choices: withChoices(result)
  };
}

function makeBorrowingSubtraction() {
  let minuend = randomInt(200, 1000);
  let subtrahend = randomInt(100, minuend - 1);

  const mOnes = minuend % 10;
  const sOnes = subtrahend % 10;
  const mTens = Math.floor(minuend / 10) % 10;
  const sTens = Math.floor(subtrahend / 10) % 10;

  const needsBorrow = sOnes > mOnes || sTens > mTens;

  if (!needsBorrow) {
    subtrahend = Math.min(minuend - 1, subtrahend + randomInt(11, 49));
  }

  if (subtrahend >= minuend) {
    subtrahend = minuend - randomInt(10, 99);
  }

  const answer = minuend - subtrahend;

  return {
    section: "prestando",
    prompt: `${minuend} - ${subtrahend} = ?`,
    answer,
    choices: withChoices(answer)
  };
}

function makeWordProblem() {
  const name = pick(names);
  const noun = pick(nouns);
  const place = pick(places);
  const total = randomInt(120, 1000);
  const used = randomInt(55, total - 10);
  const verbs = ["regaló", "gastó", "vendieron", "usaron", "prestaron", "perdió", "sacaron"];
  const verb = pick(verbs);
  const answer = total - used;

  return {
    section: "problemas",
    prompt: `En la ${place}, ${name} tenía ${total} ${noun} y ${verb} ${used}. ¿Cuántos quedaron?`,
    answer,
    choices: withChoices(answer)
  };
}


function computeAnswerFromPrompt(prompt) {
  const numbers = prompt.match(/\d+/g);
  if (!numbers || numbers.length < 2) return null;

  const minuend = Number(numbers[0]);
  const subtrahend = Number(numbers[1]);
  if (!Number.isFinite(minuend) || !Number.isFinite(subtrahend)) return null;

  return minuend - subtrahend;
}

function isExerciseConsistent(exercise) {
  const computed = computeAnswerFromPrompt(exercise.prompt);
  return computed !== null && computed === exercise.answer;
}

function buildExercises(total, selectedSections) {
  const generators = {
    directas: makeDirectSubtraction,
    prestando: makeBorrowingSubtraction,
    problemas: makeWordProblem
  };

  return Array.from({ length: total }, () => {
    let exercise = generators[pick(selectedSections)]();

    while (!isExerciseConsistent(exercise)) {
      exercise = generators[pick(selectedSections)]();
    }

    return exercise;
  });
}

function createAnswerInput(exercise, index, mode) {
  if (mode === "multiple") {
    const field = document.createElement("fieldset");
    field.className = "options";

    exercise.choices.forEach((choice, idx) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `answer-${index}`;
      input.value = String(choice);
      input.id = `answer-${index}-${idx}`;

      label.htmlFor = input.id;
      label.appendChild(input);
      label.append(` ${choice}`);
      field.appendChild(label);
    });

    return field;
  }

  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.className = "text-answer";
  textInput.placeholder = "Escribe tu respuesta";
  textInput.inputMode = "numeric";
  textInput.dataset.index = index;
  return textInput;
}

function renderWorksheet() {
  const selectedSections = getSelectedSections();
  const total = Number(totalExercisesInput.value);

  if (selectedSections.length === 0) {
    setupMessage.textContent = "Selecciona al menos una sección.";
    return;
  }

  if (!Number.isInteger(total) || total < 10 || total > 200) {
    setupMessage.textContent = "El total debe estar entre 10 y 200 ejercicios.";
    return;
  }

  setupMessage.textContent = "";
  resultPanel.classList.add("hidden");
  resultContent.innerHTML = "";

  const mode = answerMode.value;
  currentAnswerMode = mode;
  currentExercises = buildExercises(total, selectedSections);

  const sectionTitles = {
    directas: "Parte 1: Restas directas",
    prestando: "Parte 2: Resta prestando",
    problemas: "Parte 3: Problemas de la vida real"
  };

  worksheetTitle.textContent = `Prueba móvil: ${total} ejercicios`;
  worksheetContent.innerHTML = "";

  let counter = 1;
  SECTION_KEYS.forEach((section) => {
    const items = currentExercises
      .map((exercise, index) => ({ exercise, index }))
      .filter(({ exercise }) => exercise.section === section);
    if (!selectedSections.includes(section) || items.length === 0) return;

    const block = document.createElement("section");
    block.className = "worksheet-block";
    const heading = document.createElement("h3");
    heading.textContent = sectionTitles[section];
    block.appendChild(heading);

    const list = document.createElement("ol");
    list.start = counter;

    items.forEach(({ exercise, index }) => {
      const idx = index;
      const li = document.createElement("li");

      const statement = document.createElement("p");
      statement.className = "question";
      statement.textContent = exercise.prompt;
      li.appendChild(statement);
      li.appendChild(createAnswerInput(exercise, idx, mode));
      list.appendChild(li);
    });

    counter += items.length;
    block.appendChild(list);
    worksheetContent.appendChild(block);
  });
}

function getUserAnswer(index, mode) {
  if (mode === "multiple") {
    const checked = document.querySelector(`input[name="answer-${index}"]:checked`);
    return checked ? Number(checked.value) : null;
  }

  const input = document.querySelector(`.text-answer[data-index="${index}"]`);
  if (!input || input.value.trim() === "") return null;

  const numericValue = Number(input.value.replace(/,/g, ".").trim());
  return Number.isFinite(numericValue) ? numericValue : null;
}

function gradeWorksheet() {
  if (currentExercises.length === 0) {
    setupMessage.textContent = "Primero genera una prueba.";
    return;
  }

  const mode = currentAnswerMode;
  let correct = 0;
  let answered = 0;

  currentExercises.forEach((exercise, index) => {
    const answer = getUserAnswer(index, mode);
    if (answer === null) return;

    const expectedAnswer = computeAnswerFromPrompt(exercise.prompt);
    const safeAnswer = expectedAnswer === null ? exercise.answer : expectedAnswer;

    answered += 1;
    if (answer === safeAnswer) {
      correct += 1;
    }
  });

  const total = currentExercises.length;
  const incorrect = answered - correct;
  const blank = total - answered;
  const score = Math.round((correct / total) * 100);

  resultContent.innerHTML = `
    <p><strong>Puntaje:</strong> ${score}%</p>
    <p><strong>Correctas:</strong> ${correct} de ${total}</p>
    <p><strong>Incorrectas:</strong> ${incorrect}</p>
    <p><strong>Sin responder:</strong> ${blank}</p>
  `;

  resultPanel.classList.remove("hidden");
}

generateBtn.addEventListener("click", renderWorksheet);
gradeBtn.addEventListener("click", gradeWorksheet);
printBtn.addEventListener("click", () => window.print());

renderWorksheet();
