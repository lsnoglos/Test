const SECTION_KEYS = ["directas", "prestando", "problemas"];

const sectionChecks = [...document.querySelectorAll(".section-check")];
const totalExercisesInput = document.getElementById("totalExercises");
const generateBtn = document.getElementById("generateBtn");
const printBtn = document.getElementById("printBtn");
const setupMessage = document.getElementById("setupMessage");
const worksheetTitle = document.getElementById("worksheetTitle");
const worksheetContent = document.getElementById("worksheetContent");

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

function makeDirectSubtraction() {
  const subtrahend = randomInt(10, 499);
  const result = randomInt(10, 500);
  const minuend = subtrahend + result;
  return `${minuend} - ${subtrahend} = ______`;
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

  return `${minuend} - ${subtrahend} = ______`;
}

function makeWordProblem() {
  const name = pick(names);
  const noun = pick(nouns);
  const place = pick(places);
  const total = randomInt(120, 1000);
  const used = randomInt(55, total - 10);
  const verbs = ["regaló", "gastó", "vendieron", "usaron", "prestaron", "perdió", "sacaron"];
  const verb = pick(verbs);

  return `En la ${place}, ${name} tenía ${total} ${noun} y ${verb} ${used}. ¿Cuántos quedaron? ______`;
}

function buildExercises(total, selectedSections) {
  const generators = {
    directas: makeDirectSubtraction,
    prestando: makeBorrowingSubtraction,
    problemas: makeWordProblem
  };

  const pool = selectedSections.flatMap((section) => Array.from({ length: total }, () => generators[section]()));
  return shuffle(pool).slice(0, total);
}

function splitBySection(exercises) {
  const parts = { directas: [], prestando: [], problemas: [] };

  exercises.forEach((item) => {
    if (item.includes("¿Cuántos")) {
      parts.problemas.push(item);
    } else {
      const left = Number(item.split("-")[0].trim());
      const right = Number(item.split("-")[1].split("=")[0].trim());
      const mOnes = left % 10;
      const sOnes = right % 10;
      const mTens = Math.floor(left / 10) % 10;
      const sTens = Math.floor(right / 10) % 10;
      if (sOnes > mOnes || sTens > mTens) {
        parts.prestando.push(item);
      } else {
        parts.directas.push(item);
      }
    }
  });

  return parts;
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

  const exercises = buildExercises(total, selectedSections);
  const groups = splitBySection(exercises);
  const sectionTitles = {
    directas: "Parte 1: Restas directas",
    prestando: "Parte 2: Resta prestando",
    problemas: "Parte 3: Problemas de la vida real"
  };

  worksheetTitle.textContent = `Guía generada: ${total} ejercicios aleatorios`;
  worksheetContent.innerHTML = "";

  let counter = 1;
  SECTION_KEYS.forEach((section) => {
    if (!selectedSections.includes(section)) return;

    const block = document.createElement("section");
    block.className = "worksheet-block";
    const heading = document.createElement("h3");
    heading.textContent = sectionTitles[section];
    block.appendChild(heading);

    const list = document.createElement("ol");
    list.start = counter;
    groups[section].forEach((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      list.appendChild(li);
      counter += 1;
    });

    block.appendChild(list);
    worksheetContent.appendChild(block);
  });
}

generateBtn.addEventListener("click", renderWorksheet);
printBtn.addEventListener("click", () => window.print());

renderWorksheet();
