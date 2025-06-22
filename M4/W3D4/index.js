// Mappa per associare le etichette visibili del dropdown alle proprietà degli oggetti utente
const labelToKeyMap = {
    Name: "name",
    Username: "username",
    "E-mail": "email",
};

// Elementi DOM
const dropdownItems = document.querySelectorAll(".dropdown-item");
const filterLabelElement = document.getElementById("filterLabel");
const filterButton = document.getElementById("filterButton");
const inputElement = document.querySelector("input");
const tableBody = document.querySelector("tbody");

// Gestione click sul dropdown
dropdownItems.forEach((item) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        const selectedText = this.textContent.trim();
        filterLabelElement.textContent = selectedText;
    });
});

// Variabile globale per contenere tutti gli utenti
let allUsers = [];

getUsers();
async function getUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error();
        allUsers = await res.json();
        renderUsers(allUsers);

        filterButton.addEventListener("click", filter);
    } catch (error) {
        console.log("Problemi nello scaricamento dei dati");
        tableBody.innerHTML = `<tr><td colspan="3">Errore nel caricamento degli utenti.</td></tr>`;
    }
}

function filter() {
    const input = inputElement.value.toLowerCase();
    const selectedLabel = filterLabelElement.textContent;
    const key = labelToKeyMap[selectedLabel];

    if (input && key) {
        const filteredUsers = allUsers.filter((user) => user[key].toLowerCase().includes(input));

        if (filteredUsers.length > 0) {
            renderUsers(filteredUsers);
        } else {
            tableBody.innerHTML = `<tr><td colspan="3">Nessun utente trovato.</td></tr>`;
        }
    } else {
        console.log("Mancano parametri per filtrare!");
        renderUsers(allUsers);
    }
}

function renderUsers(users) {
    tableBody.innerHTML = users
        .map(
            (user) =>
                `<tr>
                    <th scope="row" class="fw-normal">${user.name}</th>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                </tr>`
        )
        .join("");
}
