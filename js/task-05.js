const inputEl = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  }
});
