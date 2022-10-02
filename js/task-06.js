// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо
// правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

let input = document.querySelector("#validation-input");

let inputLength = input.getAttribute("data-length");

input.addEventListener("blur", (event) => {
  if (event.target.value.length === Number(inputLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
