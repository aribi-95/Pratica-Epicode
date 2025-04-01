/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// I datatype in JavaScript sono come diversi tipi di scatole in cui puoi mettere le cose. Ogni scatola ha un uso speciale.

// NUMBER - Una scatola che contiene numeri, interi o decimali
let caramelle = 10;
let prezzo = 2.5;

// BIGINT - Una scatola che contiene numeri giganteschi
const numeroGrande = 1234567890123456789012345678901234567890n;

// STRING - Una scatola che contiene parole o frasi
let nome = "Alice";
let messaggio = "Ciao, come stai?";

// BOOLEAN - Una scatola con solo due opzioni, vero o falso
let luceAccesa = true;
let piove = false;

// UNDEFINED - Una scatola vuota perché non abbiamo deciso cosa metterci
let mistero;

// NULL - Una scatola volutamente vuota (usiamo null anche per svuotare contenitori pieni)
let portafoglio = null;

// OBJECT - Una scatola con più cose dentro, come uno zaino pieno di oggetti, accoppiati tra di loro (chiave/valore)
let persona = {
    nome: "Luca",
    eta: 25,
    hobby: "calcio",
};

// ARRAY - Una scatola che contiene più elementi, ordinati
let frutta = ["mela", "banana", "arancia"];

// FUNCTION - Una scatola che contiene un "compito" che possiamo eseguire
function saluta(nome) {
    return "Ciao, " + nome + "!";
}

// SYMBOL - Una scatola con un'etichetta unica

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
(Vedi esercizio 1)
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12 + 20;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Arianna";
console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";

console.log(name1 !== name2);

console.log(name1.toLowerCase() === name2.toLowerCase());
