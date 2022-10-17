/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const fieldForm = document.getElementById('form');
const boxes = document.getElementsByClassName('box');
const difficulties = document.getElementById('difficulties');
console.log(fieldForm);




fieldForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    let gridWidth = Number(difficulties.value);
    let cellsNum = gridWidth * gridWidth;
    if(!fieldForm.classList.contains('generated')){
        generateGrid(cellsNum, fieldForm);
        generateNumbersWidth(boxes, gridWidth);
    }
    
    
});


difficulties.addEventListener('input', ()=>{
    fieldForm.classList.remove('generated');
});






function generateGrid(cellsNum, domEl){
    resetGrid();
    for (let i = 1; i <= cellsNum; i++){
        let boxEl = document.createElement('div');
        boxEl.classList.add('box');
        domEl.insertAdjacentElement('afterbegin', boxEl)
    }
    domEl.classList.add('generated');
}

function generateNumbersWidth(domElements, rowNum){
    for(let i = 0; i < domElements.length; i++){
        let number = i;
        let element = domElements[i];
        element.innerText = ++number;
        element.style.width =`calc(100%/${rowNum})`
        element.addEventListener('click', ()=>{
            //console.log(this);
            //console.log(element.innerText);
            element.classList.toggle('clicked');
        })
    }

}


function resetGrid() {
    for(let i = boxes.length - 1; i >= 0; i--){
        boxes[i].remove();
    }
    console.log(boxes);
}



