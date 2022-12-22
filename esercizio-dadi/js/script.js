// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//genero il numero del giocatore e lo mostro
const playerNumber = Math.round(Math.random() * 5 + 1);
console.log('il numero del giocatore è: ' + playerNumber);

//genero il numero del computer e lo mostro
const computerNumber = Math.round(Math.random() * 5 + 1);
console.log('il numero del computer è: ' + computerNumber);

// confronto i due numeri e comunico il vincitore

if (playerNumber == computerNumber) {
    console.log('è un pareggio!');
}
else if (playerNumber > computerNumber) {
    console.log('vince il giocatore!');
}
else {
    console.log('vince il computer!');
}

/* si potrebbe fare anche con un array "dado" (che contiene i numeri da 1 a 6) e con math random generare l'indice per dire quale faccia viene fuori, ma mi sembrava un po' assurdo */