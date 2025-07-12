# ReactJS - Ripasso Fondamentali

## 1. Cos’è ReactJS?

ReactJS è una libreria JavaScript per costruire interfacce utente, in modo modulare, riutilizzabile e reattivo.  
È sviluppata da Meta e viene utilizzata per creare componenti che compongono le pagine web.

---

## 2. ReactJS è un framework, non una libreria.

Falso, React è una libreria.

---

## 3. Il file `package.json` contiene…

Molte informazioni utili, come ad esempio l’elenco di tutte le dipendenze richieste dall’applicazione.

---

## 4. `create-react-app` è l’unico modo possibile per creare un’applicazione React.

Falso. `create-react-app` è solo uno dei metodi, oggi sempre meno utilizzato nei progetti nuovi.
Meglio preferire alternative moderne come Vite.

---

## 5. Qual è il comando da lanciare nel terminale per creare una nuova create-react-app con nome “test”?

```
npx create-react-app test
```

---

## 6. Cos’è un componente React?

Un blocco di logica/contenuto riutilizzabile all’interno dell’applicazione.
Ogni componente può essere un bottone, una card ecc...

---

## 7. Un componente React può venire creato in tre modi: come funzione, classe o interfaccia.

Falso. I componenti React possono essere creati in due modi, come funzione (modo moderno, più usato oggi) o come classe (vecchio approccio, ancora valido).
Interfaccia non è un modo per creare componenti in React.

---

## 8. Le props sono frammenti di informazione assegnati all’invocazione di un componente React, utili al fine di rendere il componente dinamico e più riutilizzabile.

Vero. Le props sono valori che passiamo a un componente React per personalizzarlo.

---

## 9. Le props possono essere passate solamente da un componente genitore ad un componente figlio, non è possibile fare il contrario.

Vero. In React, le props viaggiano in un'unica direzione: dal componente genitore al componente figlio.

---

## 10. Da dove possono venire recuperate le props all’interno di un componente React creato come classe?

Possono essere recuperate all’interno dell’oggetto `this`, dentro un sotto-oggetto chiamato `props`.
