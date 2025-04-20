# 🔍 Job Search App

Ecco il mio progettino di fine modulo **M2**.  
Questo sito permette ad un utente di cercare tra alcune offerte di lavoro in base al titolo e alla posizione geografica.

## 📝 Descrizione del progetto

L'applicazione permette all'utente di:

-   Inserire un **titolo lavorativo** (es. `developer`)
-   Inserire una **location geografica** (es. `US`)
-   Ottenere una lista di offerte lavorative coerenti con entrambi i criteri

La ricerca è **case-insensitive** e supporta il **partial match**: trova anche parole parziali contenute nei titoli o nelle location.

---

## 🚀 Ricerca dinamica

-   Ricerca per **titolo** e **location**
-   Matching parziale su entrambi i campi
-   Visualizzazione dei risultati in una tabella
-   Messaggio “No jobs found” in assenza di risultati

---

## 🧠 Logica JavaScript

-   L'array `jobs[]` contiene tutte le offerte predefinite (non modificabile).
-   La funzione `searchJob(title, location)` filtra i risultati e popola la tabella HTML.
-   Il numero di risultati trovati è visualizzato tramite il numero di righe nella tabella.

Esempio di struttura di ritorno (internamente):

```js
{
  result: [/* array di job matching */],
  count: 3
}
```

---

## 📂 Ispirazione

L'estetica è stata progettata ispirandomi a LinkedIn.
