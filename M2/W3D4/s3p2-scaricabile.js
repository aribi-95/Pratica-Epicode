// Il tuo compito è creare un sito e-commerce per Smartphones.
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto.
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

//

// ESERCIZIO 7
function cambiaTitolo(nuovoTitolo) {
    document.querySelector("h1").textContent = nuovoTitolo;
}

// ESERCIZIO 8
function cambiaSfondo(colore) {
    document.body.style.backgroundColor = colore;
}

// ESERCIZIO 9
function cambiaIndirizzo(nuovoIndirizzo) {
    document.getElementById("indirizzo").textContent = nuovoIndirizzo;
}

// ESERCIZIO 10
function aggiungiClasse(nuovaClasse) {
    document.querySelectorAll("table a").forEach((el) => el.classList.add(nuovaClasse));
}

// ESERCIZIO 11
function mostraNascondiImmagini() {
    document.querySelectorAll("table img").forEach((el) => {
        el.classList.toggle("invisibile");
    });
}

// ESERCIZIO 12
function prezzoColorato() {
    function coloreRgbRandom() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    let color = coloreRgbRandom();

    document.querySelectorAll("table .prezzo").forEach((el) => (el.style.color = color));
}
