let sorteiado = document.querySelector(".sorteiado");
let img = document.querySelector("img");
let btnSorteiar = document.querySelector("#sorteiar");
let audio = document.querySelector("audio");
let btnReset = document.querySelector(".resetar");
let numSorteiado = 0;

btnSorteiar.addEventListener("click", () => {
  let numAleat = (n1, n2) => Math.floor(Math.random() * (n2 - n1 + 1)) + n1;
  numSorteiado = numAleat(1, 6);

  audio.play();
  img.classList.add("animacao");
  sorteiado.classList.add("aparecer");

  btnSorteiar.style.display = "none";

  setTimeout(() => {
    img.setAttribute("src", "assets/img/" + numSorteiado + ".png");
    sorteiado.textContent = numSorteiado;

    img.classList.remove("animacao");
    sorteiado.classList.remove("aparecer");
    btnSorteiar.style.display = "block";
  }, 1750);
});

btnReset.addEventListener("click", () => {
  img.setAttribute("src", "assets/img/0.png");
  sorteiado.textContent = "?";
});
