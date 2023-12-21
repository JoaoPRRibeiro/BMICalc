const form = document.querySelector("#form");
const recebePeso = document.querySelector("#peso");
const recebeAltura = document.querySelector("#altura");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  resultado();
});

function resultado() {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = ``;
  const p = document.createElement("p");
  let imc = recebePeso.value / recebeAltura.value ** 2;

  if (imc <= 18.5 && imc !== 0) {
    p.classList.add("abaixoPeso");
    p.innerHTML = `Under the weight`;
    resultado.appendChild(p);
  } else if (imc > 18.5 && imc <= 24.9) {
    p.classList.add("normalPeso");
    p.innerHTML = `Normal weight`;
    resultado.appendChild(p);
  } else if (imc > 25 && imc <= 29.9) {
    p.classList.add("sobrePeso");
    p.innerHTML = `Overweight`;
    resultado.appendChild(p);
  } else if (imc > 30 && imc <= 34.9) {
    p.classList.add("obesidade1");
    p.innerHTML = `Grade 1 obesity`;
    resultado.appendChild(p);
  } else if (imc > 35 && imc <= 39.9) {
    p.classList.add("obesidade2");
    p.innerHTML = `Grade 2 obesity`;
    resultado.appendChild(p);
  } else if (imc >= 40) {
    p.classList.add("obesidade3");
    p.innerHTML = `Grade 3 obesity`;
    resultado.appendChild(p);
  }
}
