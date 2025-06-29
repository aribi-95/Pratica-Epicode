const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhZDdiNDk2OGRlNTAwMTU1MmEzYzIiLCJpYXQiOjE3NTA3ODM5MjQsImV4cCI6MTc1MTk5MzUyNH0.DBSrUBT1C73K0ZIemZ54M3p3ybTelUzRrTyugQDAcZs";

const productTitle = document.getElementById("product");
const productBrand = document.getElementById("brand");
const infoContainer = document.getElementById("infoContainer");

const queryParams = new URLSearchParams(window.location.search);
const idProd = queryParams.get("id");

getData(idProd);

// Recupera prodotto
async function getData(id) {
    try {
        const result = await fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
        });

        if (!result.ok) {
            throw new Error("Errore nella chiamata API: " + result.status);
        }
        const product = await result.json();
        // console.log(product);
        renderProduct(product);
    } catch (e) {
        productBrand.parentElement.textContent = "Errore durante il caricamento del prodotto.";
        console.error("Errore durante il fetch:", e);
    }
}

// Popola la pagina con i dettagli del prodotto
function renderProduct(product) {
    productTitle.textContent = product.name;
    productBrand.textContent = product.brand;

    infoContainer.innerHTML = "";

    const img = document.createElement("img");
    img.className = "productImg";
    img.src = product.imageUrl;

    const descDiv = document.createElement("div");

    const description = document.createElement("p");
    description.textContent = product.description;

    const price = document.createElement("p");
    price.innerHTML = `<strong>Prezzo:</strong> ${product.price}€`;

    descDiv.appendChild(description);
    descDiv.appendChild(price);

    infoContainer.appendChild(img);
    infoContainer.appendChild(descDiv);
}
