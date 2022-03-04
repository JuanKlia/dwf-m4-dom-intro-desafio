const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function agregarEtiquetasAlDom(arrayLi) {
  const el = document.querySelector(".lista");
  arrayLi.forEach((x) => {
    el.appendChild(x);
  });
}

function crearLi(arrayObjetos) {
  const arrayLi = arrayObjetos.map((cadaObjeto) => {
    const el = document.createElement("li");
    el.textContent = JSON.stringify(cadaObjeto);

    if (cadaObjeto.class == "special") {
      el.classList.add("special");
    }
    return el;
  });

  return arrayLi;
}

function eliminarLi() {
  const liEl = document.querySelectorAll(".lista li");
  liEl.forEach((x) => {
    x.remove();
  });

  return liEl;
}

function main() {
  eliminarLi();
  console.log(" tags <li> eliminados");
  const arrayLi = crearLi(cosasQueAprendimos);
  agregarEtiquetasAlDom(arrayLi);
}

main();
