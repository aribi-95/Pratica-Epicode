// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

/*
​‌‍STEP PER L'ESERCIZIO
1)
- leggere il totale del carrello 
- leggere se l'utente è ambassador: se lo e', scontare il carrello
- verificare se è dovuta la spedizione 
- dire al cliente quanto spende alla fine
​
2)
- creare un array di tutti gli utenti
- stampare in console tutti gli utenti e se sono ambassador
- creare un array di utenti in cui ci sono solo gli ambassador
*/

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
};

const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
};

const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
};

const lucia = {
    name: "Lucia",
    lastName: "Bianchi",
    isAmbassador: true,
};

const john = {
    name: "John",
    lastName: "Smith",
    isAmbassador: false,
};

const sofia = {
    name: "Sofia",
    lastName: "Martinez",
    isAmbassador: true,
};

const li = {
    name: "Li",
    lastName: "Wang",
    isAmbassador: false,
};

const fatima = {
    name: "Fatima",
    lastName: "Al-Farsi",
    isAmbassador: true,
};

const prices = [34, 5, 82, 27, 3];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = marco; //cambia il valore qui per provare se il tuo algoritmo funziona!

// 1)
let total = 0;
for (let x of prices) {
    total += x;
}
// console.log(total)

if (utenteCheEffettuaLAcquisto.isAmbassador) {
    total *= 0.7;
}
// console.log(total)

if (total < 100) {
    total += shippingCost;
}
console.log(`Il tuo totale da pagare è ${total.toFixed(2)}€`);

// 2)
let users = [];
users.push(marco, paul, amy, lucia, john, sofia, li, fatima);
console.log(users);
// più semplicemente, potevo scrivere let users = [marco, paul, amy, lucia, john, sofia, li, fatima]

let ambassadors = [];
for (let user of users) {
    if (user["isAmbassador"]) {
        console.log(`${user["name"]} ${user["lastName"]} è un ambassador`);
        ambassadors.push(user);
    } else {
        console.log(`${user["name"]} ${user["lastName"]} non è un ambassador`);
    }
}
console.log(ambassadors);
