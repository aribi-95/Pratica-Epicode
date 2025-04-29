// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

removeTwitter();

function removeTwitter() {
    document.querySelector(".p-4:last-of-type li:nth-of-type(2)").remove();
}

//

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

let continuaLeggere = []; // mi creo un array con i link "Continua a leggere"

document.querySelectorAll("a").forEach((link) => {
    if (link.textContent.includes("Continua a leggere")) {
        continuaLeggere.push(link);
    }
});

// Aggiungo l'event listener a ciascun link trovato
continuaLeggere.forEach((link) => {
    link.addEventListener("click", () => {
        link.parentElement.remove();
    });
});

//

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

let authors = document.querySelectorAll(".blog-post-meta a");

authors.forEach((author) => {
    author.addEventListener("mouseover", () => {
        alert(author.innerText);
    });
});
