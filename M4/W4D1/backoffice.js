const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhZDdiNDk2OGRlNTAwMTU1MmEzYzIiLCJpYXQiOjE3NTA3ODM5MjQsImV4cCI6MTc1MTk5MzUyNH0.DBSrUBT1C73K0ZIemZ54M3p3ybTelUzRrTyugQDAcZs";

const tableBody = document.querySelector("tbody");
const productName = document.querySelector("#name");
const productDescription = document.querySelector("#description");
const productBrand = document.querySelector("#brand");
const productImage = document.querySelector("#imageUrl");
const productPrice = document.querySelector("#price");
const form = document.querySelector("#productForm");

let editingProductId = null; // Per capire se siamo in modalità modifica o aggiunta

getData();

// Recupera prodotti
async function getData() {
    try {
        const result = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
        });
        const data = await result.json();
        console.log(data);
        tableBody.innerHTML = "";
        inputArray(data);
    } catch (e) {
        console.error("Errore durante il fetch:", e);
    }
}

// Crea righe tabella
function inputArray(products) {
    const productTr = products.map((product) => createTableRow(product));
    tableBody.append(...productTr);
}

// Crea riga prodotto singola
function createTableRow(product) {
    const tr = document.createElement("tr");

    const tdImage = document.createElement("td");
    const img = document.createElement("img");
    img.src = product.imageUrl;
    tdImage.appendChild(img);

    const tdName = document.createElement("td");
    tdName.innerText = product.name;

    const tdBrand = document.createElement("td");
    tdBrand.innerText = product.brand;

    const tdPrice = document.createElement("td");
    tdPrice.innerText = `${product.price}€`;

    const tdActions = document.createElement("td");

    const editBtn = document.createElement("button");
    editBtn.className = "editBtn btn btn-sm me-2";
    editBtn.innerText = "✏️";
    editBtn.addEventListener("click", () => {
        editingProductId = product._id;
        productName.value = product.name;
        productDescription.value = product.description;
        productBrand.value = product.brand;
        productImage.value = product.imageUrl;
        productPrice.value = product.price;
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); // Se la lista è lunga almeno porta dritti al form (fondo pagina)
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn btn btn-sm";
    deleteBtn.innerText = "🗑️";
    deleteBtn.addEventListener("click", () => deleteProduct(product._id));

    tdActions.append(editBtn, deleteBtn);

    tr.append(tdImage, tdName, tdBrand, tdPrice, tdActions);
    return tr;
}

// Elimina prodotto
async function deleteProduct(id) {
    if (!confirm("Sei sicuro di voler eliminare questo prodotto?")) return;

    try {
        await fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });
        getData();
    } catch (e) {
        console.error("Errore durante l'eliminazione:", e);
    }
}

// Inserisci o modifica
form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
    }

    const data = {
        name: productName.value,
        description: productDescription.value,
        brand: productBrand.value,
        imageUrl: productImage.value,
        price: parseFloat(productPrice.value),
    };

    const method = editingProductId ? "PUT" : "POST";
    const url = editingProductId ? `https://striveschool-api.herokuapp.com/api/product/${editingProductId}` : "https://striveschool-api.herokuapp.com/api/product/";

    try {
        await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
        });

        form.reset();
        form.classList.remove("was-validated");
        editingProductId = null;
        getData();
    } catch (e) {
        console.error("Errore durante il salvataggio:", e);
    }
});
