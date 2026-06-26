const dec = document.getElementById("dec");
const inc = document.getElementById("inc");
const reset = document.getElementById("reset");
const counter = document.getElementById("count");

dec.addEventListener("click", () => {
    counter.innerText = parseInt(counter.innerText)-1;
})

inc.addEventListener("click", () => {
    counter.innerText = parseInt(counter.innerText)+1;
})

reset.addEventListener("click", () => {
    counter.innerText = 0;
})