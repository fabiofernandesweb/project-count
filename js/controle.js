
let valor = 0;
const valorElemento = document.getElementById("valor");
const btnDecremento = document.getElementById("decremento");
const btnResetar = document.getElementById("resetar");
const btnIncremento = document.getElementById("incremento");

btnDecremento.addEventListener("click", () => {
  valor--;
  valorElemento.textContent = valor;
  valorElemento.style.color = "#ff1111";
});

btnResetar.addEventListener("click", () => {
  valor = 0;
  valorElemento.textContent = valor;
  valorElemento.style.color = "blue";
});

btnIncremento.addEventListener("click", () => {
  valor++;
  valorElemento.textContent = valor;
  valorElemento.style.color = "#15ff1f";
});