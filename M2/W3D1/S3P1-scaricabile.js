/* ESERCIZIO 1 
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri. 
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3. 
*/

const crazySum = (num1, num2) => (num1 === num2 ? (num1 + num2) * 3 : num1 + num2);

console.log(crazySum(3, 7));
console.log(crazySum(5, 5));

/* ESERCIZIO 2 
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400. 
*/

const boundary = (num1) => (num1 >= 20 && num1 <= 100) || num1 === 400;

console.log(boundary(56));
console.log(boundary(400));
console.log(boundary(254));

/* ESERCIZIO 3 
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE). 
*/

const reverseString = (string) => string.split("").reverse().join("");

console.log(reverseString("Arianna"));

/* ESERCIZIO 4 
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola. 
*/

function upperFirst(string) {
    let words = string.split(" ");
    // console.log(words)
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

console.log(upperFirst("javascript è molto divertente!"));

/* ESERCIZIO 5 
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10. 
*/

function giveMeRandom(n) {
    let randomNumbers = [];
    for (let i = 0; i < n; i++) {
        let randomNumber = Math.floor(Math.random() * 11);
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

console.log(giveMeRandom(12));

//EXTRA:
/* ESERCIZIO 1 
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato. 
*/

const area = (l1, l2) => l1 * l2;

console.log(area(3, 8));

/* ESERCIZIO 2 
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19. 
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3. 
*/

const crazyDiff = (num) => {
    const diff = Math.abs(num - 19);
    return diff > 19 ? diff * 3 : diff;
};

console.log(crazyDiff(-8));
console.log(crazyDiff(23));

/* ESERCIZIO 3 
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro. 
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche. 
*/

function codify(string) {
    let words = string.split(" ");
    if (words[0] === "code") {
        return string;
    } else {
        words.unshift("code");
        return words.join(" ");
    }
}

console.log(codify("mi piacciono i treni"));
console.log(codify("code va sempre messo a inizio frase"));

/* ESERCIZIO 4 
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro. 
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false. 
 SUGGERIMENTO: operatore modulo 
*/

const check3and7 = (num) => num % 3 === 0 || num % 7 === 0;

console.log(check3and7(8));

/* ESERCIZIO 5 
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere. 
*/

const cutString = (string) => string.slice(1, string.length - 1);

console.log(cutString("questa stringa va tagliata alle estremità"));
