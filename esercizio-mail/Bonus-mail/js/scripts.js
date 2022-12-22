// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.
// Bonus
// Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

//creo l'elenco delle mail ammissibili
const validMail = ['laura@gmail.com', 'giovanni@live.it', 'franco@outlook.com'];

//vado a prendere gli elementi html
const mailInput = document.getElementById('mail-input');
const button = document.querySelector ('button');
const result = document.getElementById('result');


//all'evento di click...
button.addEventListener ('click',
	function() {

        //creo una flag per ricordarmi se ho trovato un risultato valido
        let flag = false;

        //prendo l'input dell'utente e per sicurezza lo metto in lowercase
        const mail = mailInput.value.toLowerCase();

        //rendo visibile la result box
        document.getElementById('result-box').style.opacity="1";

        //faccio il controllo confrontando l'input dell'utente con ogni elemento dell'array
        for (let i = 0; i < validMail.length; i++) {
        
            if (mail == validMail[i]) {
                //restituisco il risultato positivo    
                result.innerHTML = "Complimenti, la tua e-mail è valida!"

                //alzo la flag
                flag = true;
                
                //chiudo il ciclo
                break;
            }  
        }

        // restituisco un messaggio negativo se non ho trovato corrispondenze
        if (flag == false) {
            result.innerHTML = "Ops! La tua mail non è valida";
        }
    }
)




