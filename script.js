const btnNumbers = document.querySelectorAll(".botoes-numbers");
const btnOperators = document.querySelectorAll(".botoes-operator");
const display = document.getElementById("display");
const result = document.querySelector(".result-input");



btnNumbers.forEach(btnNumbers => {
    btnNumbers.addEventListener("click", () => {
        display.value += btnNumbers.textContent.trim();
    });
    console.log(btnNumbers.value);
});