function creailbox(eleinHTML, classi, text) {
    let quadro = document.createElement(eleinHTML);
    quadro.className = classi;
    quadro.innerText = text;

    return quadro;
}

let griglia = document.querySelector('.griglia');

for (let i = 1; i <= 100; i++) {

    const campo = creailbox("div", "box blue", i);

    campo.addEventListener("click", function () {

        this.classList.toggle(`blue`);
    })


    griglia.append(campo);
}