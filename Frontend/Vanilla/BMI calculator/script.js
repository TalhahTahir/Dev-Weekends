const form = document.getElementById("bmi-form");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const result = document.getElementById("bmi-result");
const message = document.getElementById("bmi-category");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const h = height.value * 0.3048;
  const bmi = (weight.value / (h * h)).toFixed(2);
  result.textContent = bmi;

  if (bmi < 18.5) {
    message.textContent = "Under Weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    message.textContent = "Normal Range";
  } else {
    message.textContent = "Overweight";
  }
});