// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль
// по кліку на button.change - color і виводить значення кольору в span.color.

const eventButton = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");
const body = document.body;

eventButton.addEventListener("click", () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  let resultColor = body.getAttribute("style");
  currentColor.textContent = resultColor.slice(18, resultColor.length - 1);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
