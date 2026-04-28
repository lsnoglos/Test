const SECTION_KEYS = ["directas", "prestando", "problemas"];

const sectionChecks = [...document.querySelectorAll(".section-check")];
const totalExercisesInput = document.getElementById("totalExercises");
const answerMode = document.getElementById("answerMode");
const generateBtn = document.getElementById("generateBtn");
const gradeBtn = document.getElementById("gradeBtn");
const printBtn = document.getElementById("printBtn");
const finishBtn = document.getElementById("finishBtn");
const studentNameInput = document.getElementById("studentName");
const dateInput = document.getElementById("dateInput");
const todayBtn = document.getElementById("todayBtn");
const setupMessage = document.getElementById("setupMessage");
const worksheetTitle = document.getElementById("worksheetTitle");
const worksheetContent = document.getElementById("worksheetContent");
const resultPanel = document.getElementById("resultPanel");
const resultContent = document.getElementById("resultContent");
const finishPanel = document.getElementById("finishPanel");
const finishMessage = document.getElementById("finishMessage");

let currentExercises = [];
let currentAnswerMode = "multiple";
let lastResults = null;

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
  const minuend = randomInt(200, 1000);
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

function getSectionLabel(section) {
  const labels = {
    directas: "Restas directas",
    prestando: "Resta prestando",
    problemas: "Problemas de la vida real"
  };

  return labels[section] || section;
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
  finishMessage.textContent = "";
  lastResults = null;
  resultPanel.classList.add("hidden");
  finishPanel.classList.add("hidden");
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
      const li = document.createElement("li");

      const statement = document.createElement("p");
      statement.className = "question";
      statement.textContent = exercise.prompt;
      li.appendChild(statement);
      li.appendChild(createAnswerInput(exercise, index, mode));
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

function buildResultSummary(results) {
  const uniqueSections = [...new Set(currentExercises.map((exercise) => exercise.section))];
  const sectionsText = uniqueSections.map((section) => getSectionLabel(section)).join(", ");
  const studentName = studentNameInput.value.trim() || "El estudiante";

  return `${studentName} ha finalizado los exámenes de ${sectionsText} y ha logrado ${results.score}% (${results.correct} de ${results.total} correctas).`;
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

  lastResults = {
    score,
    correct,
    total,
    incorrect,
    blank,
    summary: ""
  };
  lastResults.summary = buildResultSummary(lastResults);

  resultContent.innerHTML = `
    <p><strong>Puntaje:</strong> ${score}%</p>
    <p><strong>Correctas:</strong> ${correct} de ${total}</p>
    <p><strong>Incorrectas:</strong> ${incorrect}</p>
    <p><strong>Sin responder:</strong> ${blank}</p>
  `;

  resultPanel.classList.remove("hidden");
  finishPanel.classList.remove("hidden");
}

function makeResultCanvas(summaryText) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#f4f9ff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#1f3c88";
  ctx.fillRect(80, 80, canvas.width - 160, canvas.height - 160);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 56px Arial";
  ctx.fillText("Resultados del examen", 140, 220);

  ctx.font = "40px Arial";
  const words = summaryText.split(" ");
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (ctx.measureText(testLine).width > 760) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });
  if (currentLine) lines.push(currentLine);

  lines.forEach((line, i) => {
    ctx.fillText(line, 140, 340 + i * 58);
  });

  ctx.fillStyle = "#b7f7d4";
  ctx.font = "bold 36px Arial";
  ctx.fillText("Compartido desde la guía de matemática", 140, 940);

  return canvas;
}

function canvasToFile(canvas, filename) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("No fue posible generar la imagen de resultados."));
        return;
      }

      resolve(new File([blob], filename, { type: "image/png" }));
    }, "image/png");
  });
}

function setTodayDate() {
  if (!dateInput) return;

  const today = new Date();
  const formattedDate = today.toLocaleDateString("es-CL");
  dateInput.value = formattedDate;
}

async function finishAndShare() {
  if (!lastResults) {
    finishMessage.textContent = "Primero debes ver los resultados.";
    return;
  }

  try {
    finishMessage.textContent = "Generando imagen de resultados...";
    const summary = buildResultSummary(lastResults);
    const canvas = makeResultCanvas(summary);
    const file = await canvasToFile(canvas, "resultados-examen.png");

    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: "Resultados del examen",
        text: summary,
        files: [file]
      });
      finishMessage.textContent = "Listo. Selecciona WhatsApp y el contacto para enviar la imagen.";
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    const downloadLink = document.createElement("a");
    downloadLink.href = imageUrl;
    downloadLink.download = file.name;
    downloadLink.click();
    URL.revokeObjectURL(imageUrl);

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(summary)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    finishMessage.textContent = "Se descargó la imagen. Adjunta la imagen en WhatsApp y elige el contacto.";
  } catch (error) {
    console.error(error);
    finishMessage.textContent = "No se pudo compartir automáticamente. Intenta nuevamente.";
  }
}

generateBtn.addEventListener("click", renderWorksheet);
gradeBtn.addEventListener("click", gradeWorksheet);
printBtn.addEventListener("click", () => window.print());
finishBtn.addEventListener("click", finishAndShare);
if (todayBtn) {
  todayBtn.addEventListener("click", setTodayDate);
}

renderWorksheet();
