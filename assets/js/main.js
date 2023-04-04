// function creailbox(eleinHTML, classi, text) {
//     let quadro = document.createElement(eleinHTML);
//     quadro.className = classi;
//     quadro.innerText = text;

//     return quadro;
// }


let griglia = document.querySelector('.griglia');

const playButton = document.getElementById('play');
const level = document.getElementById('levelGame');
const mainHTML = document.querySelector('main');


playButton.addEventListener('click', function () {
    gamingActive();
})

function gamingActive() {

    let levels = parseInt(level.value);
    MyFunction_set(levels)



    mainHTML.innerHTML = '';

    let extSquare = document.createElement('div');
    extSquare.classList.add('griglia');



    mainHTML.appendChild(extSquare);


    for (let i = 1; i <= levels; i++) {

        let campo = document.createElement.add('div');
        campo.classList.add('box');
        campo.innertext = i;

        document.querySelector('.griglia').appendChild(campo);




        // this.classList.toggle(`blue`);

    }
}

function MyFunction_set(x) {
    x = Math.sqrt(x);

    r.style.setProperty('--numbBoxes', x);
}



// for (let i = 1; i <= 100; i++) {

//     const campo = creailbox("div", "box blue", i);

//     campo.addEventListener("click", function () {

//         this.classList.toggle(`blue`);
//     })


//     griglia.append(campo);
// }