/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const fieldForm = document.getElementById('form');
console.log(fieldForm);




fieldForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    generateGrid(100, fieldForm);
});



function generateGrid(cellsNum, domEl){
    for (let i = 0; i < cellsNum; i++){
        let boxEl = document.createElement('div');
        boxEl.classList.add('box');
        domEl.insertAdjacentElement('afterbegin', boxEl)
    }
}



