// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// Cтвори функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >,
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const mainDiv = document.querySelector("#boxes");
const actionDiv = document.querySelector("#controls").children;

const input = actionDiv[0];
const createButton = actionDiv[1];
const destroyButton = actionDiv[2];

createButton.addEventListener("click", () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", () => {
  mainDiv.innerHTML = "";
  startSize = 30;
});

let startSize = 30;
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const size = startSize; // + i * 10;
    startSize += 10;
    const div = document.createElement("div");
    mainDiv.append(div);
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = `${getRandomHexColor()}
  `;
  }
}
