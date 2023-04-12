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
const r = document.querySelector(':root');


playButton.addEventListener('click', function () {
    gamingActive();
})

function gamingActive() {

    let levels = parseInt(level.value);
    arrayBombs = [];
    arraySquare = [];
    MyFunction_set(levels)



    mainHTML.innerHTML = '';

    let extSquare = document.createElement('div');
    extSquare.classList.add('griglia');



    mainHTML.appendChild(extSquare);


    for (let i = 1; i <= levels; i++) {

        let campo = document.createElement('div');
        campo.classList.add('box', 'blue');

        campo.innerText = i;
        arraySquare.push(i);

        document.querySelector('.griglia').appendChild(campo);

        campo.addEventListener('click', function () {
            this.classList.toggle('blue');
            if (arrayBombs.includes(i)) {
                campo.innerText = `<i class="fa-solid fa-bomb fa-shake"></i>`
            }

        })



    }

    for (let k = 1; k <= 16; k++) {
        bombs = bombsRandom(1, levels);
        arrayBombs.push(bombs);
    }

    // if (arrayBombs.includes(arraySquare)) {
    //     campo.innerText = `<i class="fa-solid fa-bomb fa-shake"></i>`
    // }

}

function MyFunction_set(x) {
    x = Math.sqrt(x);

    r.style.setProperty('--numbBoxes', x);
}

function bombsRandom(min, max) {
    return Math.floor(Math.random() * max) + min;
}



// for (let i = 1; i <= 100; i++) {

//     const campo = creailbox("div", "box blue", i);

//     campo.addEventListener("click", function () {

//         this.classList.toggle(`blue`);
//     })


//     griglia.append(campo);
// }