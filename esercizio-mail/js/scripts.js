// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.
// Bonus
// Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

//creo l'elenco delle mail ammissibili
const validMail = ['laura@gmail.com', 'giovanni@live.it', 'franco@outlook.com'];

//chiedo all'utente di inserire una mail
// per assicurarmi che sia paragonabile con il contenuto dell'array, metto in minuscolo il testo inserito dall'utente
const mail = prompt('Inserisci la tua Email:').toLowerCase();

//creo una flag per ricordarmi se ho trovato un risultato valido
let flag = false;

//faccio il controllo confrontando l'input dell'utente con ogni elemento dell'array
for (let i = 0; i < validMail.length; i++) {
    console.log(i);
    if (mail == validMail[i]) {
        console.log('sei stato ammesso');
        //alzo la flag
        flag = true;
        
        //chiudo il ciclo
        // i = validMail.length; - soluzione punk
        break; // soluzione suggerita da internet
    }
}

// mando un messaggio di errore se non ho trovato corrispondenze
if (flag == false) {
    console.log('la tua mail non è valida');
}