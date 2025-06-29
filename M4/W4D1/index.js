const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhZDdiNDk2OGRlNTAwMTU1MmEzYzIiLCJpYXQiOjE3NTA3ODM5MjQsImV4cCI6MTc1MTk5MzUyNH0.DBSrUBT1C73K0ZIemZ54M3p3ybTelUzRrTyugQDAcZs";

const cardsWrapper = document.querySelector("#cardsWrapper");

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
        cardsWrapper.innerHTML = "";
        renderProducts(data);
    } catch (e) {
        console.error("Errore durante il fetch:", e);
    }
}

// Popola la pagina con i prodotti
function renderProducts(productsToRender) {
    cardsWrapper.innerHTML = "";

    productsToRender.forEach((product) => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2";

        const link = document.createElement("a");
        link.href = `details.html?id=${product._id}`;
        link.className = "text-decoration-none text-reset";

        const card = document.createElement("div");
        card.className = "card p-0";

        const img = document.createElement("img");
        img.src = product.imageUrl;
        img.alt = product.name;
        img.className = "card-img-top";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.title = product.name;
        title.textContent = product.name;

        const brand = document.createElement("p");
        brand.className = "card-text";
        brand.textContent = `By ${product.brand}`;

        const price = document.createElement("p");
        price.className = "card-text";
        price.textContent = `Prezzo: ${product.price}€`;

        cardBody.appendChild(title);
        cardBody.appendChild(brand);
        cardBody.appendChild(price);
        card.appendChild(img);
        card.appendChild(cardBody);
        link.appendChild(card);
        col.appendChild(link);
        cardsWrapper.appendChild(col);
    });
}
