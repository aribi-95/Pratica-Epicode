// ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri decimali.
*/
let num1 = parseFloat(prompt("Inserisci il primo numero da confrontare!"));
let num2 = parseFloat(prompt("Inserisci il secondo numero da confrontare!"));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Errore: Inserisci solo numeri validi!");
} else if (num1 > num2) {
    console.log(`${num1} è maggiore di ${num2}!`);
} else if (num1 === num2) {
    console.log(`${num1} è uguale a ${num2}!`);
} else {
    console.log(`${num1} è minore di ${num2}!`);
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
let num = parseFloat(prompt("Inserisci un numero e scopri quanto è grande!"));

if (isNaN(num)) {
    console.log("Per favore, inserisci un numero valido.");
} else if (num < 5) {
    console.log("Tiny");
} else if (num < 10) {
    console.log("Small");
} else if (num < 15) {
    console.log("Medium");
} else if (num < 20) {
    console.log("Large");
} else {
    console.log("Huge");
}

// ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/
for (let i = 0; i <= 10; i++) {
    if (i === 3 || i === 8) {
        continue;
    }
    console.log(i);
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} è pari!`);
    } else {
        console.log(`${i} è dispari!`);
    }
}

// ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let num3 = parseInt(prompt("Inserisci il primo numero!"));
let num4 = parseInt(prompt("Inserisci il secondo numero!"));

if (isNaN(num3) || isNaN(num4)) {
    console.log("Errore: Inserisci solo numeri validi!");
} else if (num3 === 8) {
    console.log(`Il primo numero inserito è 8!`);
} else if (num4 === 8) {
    console.log(`Il secondo numero inserito è 8!`);
} else if (num3 + num4 === 8) {
    console.log(`La somma dei tuoi numeri è uguale a 8!`);
} else if (num3 - num4 === 8) {
    console.log(`La sottrazione dei tuoi numeri è uguale a 8!`);
} else {
    console.log(`Nessun 8 qui!`);
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 67.32; // Cambiare il numero manualmente; nella realtà la variabile sarebbe aggiornata con il carrello

const SHIPPING = 10;

let amountToPay;

if (totalShoppingCart >= 50) {
    amountToPay = totalShoppingCart;
    console.log(`Fantastico, hai diritto alla spedizione gratuita!`);
} else {
    amountToPay = totalShoppingCart + SHIPPING;
    console.log(`Per poco! Il tuo carrello è ${totalShoppingCart.toFixed(2)}€, quindi non hai diritto alla spedizione gratuita. Aggiungi ancora ${(50 - totalShoppingCart).toFixed(2)}€ per ottenerla!`);
}
console.log(`Totale da pagare: ${amountToPay.toFixed(2)}€`);

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart2 = 40; // Cambiare il numero manualmente; nella realtà la variabile sarebbe aggiornata con il carrello

const SHIPPING2 = 10;

let discountedTotal = (totalShoppingCart2 * 0.8).toFixed(2); // Totale dopo il 20% di sconto

let amountToPay2;

if (discountedTotal >= 50) {
    amountToPay2 = discountedTotal;
    console.log(`Fantastico, hai diritto alla spedizione gratuita!`);
} else {
    amountToPay2 = parseFloat(discountedTotal) + SHIPPING2;
    console.log(`Per poco! Il tuo carrello scontato è ${discountedTotal}€, quindi non hai diritto alla spedizione gratuita. Aggiungi ancora ${((50 - discountedTotal) / 0.8).toFixed(2)}€ per ottenerla!`);
}
console.log(`Totale da pagare: ${amountToPay2}€`);

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/
let isMale = true;
let gender = isMale ? "male" : "female";
console.log(gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
for (let i = 1; i <= 100; i++) {
    let print = "";
    if (i % 3 === 0) {
        print += "Fizz";
    }
    if (i % 5 === 0) {
        print += "Buzz";
    }
    console.log(print || i);
}
