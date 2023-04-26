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
const covered = document.querySelector('covering');


playButton.addEventListener('click', function () {
    gamingActive();
})

function gamingActive() {

    let levels = parseInt(level.value);
    let bombing = bombGenerate(levels);
    console.log(bombing);

    arraySquare = [];
    MyFunction_set(levels)



    mainHTML.innerHTML = '';

    let extSquare = document.createElement('div');
    extSquare.classList.add('griglia');



    mainHTML.appendChild(extSquare);


    for (let i = 1; i <= levels; i++) {

        let campo = document.createElement('div');
        campo.classList.add('box', 'playableBox');

        campo.innerText = i;
        arraySquare.push(i);

        document.querySelector('.griglia').appendChild(campo);

        campo.addEventListener('click', function () {

            if (!bombing.includes(i)) {
                this.classList.toggle('blue');

            } else {
                this.classList.toggle('red');
                campo.innerHTML = '<i class="fa-solid fa-bomb fa-shake" style="color: #efff14;"></i>'
                alert("Bombaaa!!!!")
                covered.classList.remove('d-none');
                covered.classList.add('d-block');
            }



        })



    }



    // if (arrayBombs.includes(arraySquare)) {
    //     campo.innerText = `<i class="fa-solid fa-bomb fa-shake"></i>`
    // }

}

function bombGenerate(levels) {

    let arrayBombs = [];
    console.log(arrayBombs.length);

    while (arrayBombs.length < 16) {
        bombs = bombsRandom(1, levels);

        if (!arrayBombs.includes(bombs)) {
            arrayBombs.push(bombs);
        }

    }
    return arrayBombs
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