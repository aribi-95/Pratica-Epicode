const shelf = document.getElementById("shelf");
const cart = document.getElementById("cart");
let addedToCart = [];

// Fetch dei libri
fetchBooks();
function fetchBooks() {
    fetch("https://striveschool-api.herokuapp.com/books")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            books = data;
            renderBooks(data);
            addToCart();
            removeCard();
        });
}

// Popoliamo la pagina
function renderBooks(booksToRender) {
    let html = "";
    booksToRender.forEach((book) => {
        const isAdded = addedToCart.includes(book.asin);
        const buttonText = isAdded ? "Added to cart!" : "Add to cart";
        const buttonClass = isAdded ? "btn btn-success" : "btn btn-primary";

        html += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
                <div class="card p-0 overflow-hidden">
                    <img src="${book.img}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title" title="${book.title}">${book.title}</h5>
                        <p class="card-text">Price: ${book.price}€</p>
                        <div class="btnWrapper mb-1">
                            <a href="/details.html?id=${book.asin}" 
                            class="btn btn-secondary detailsButton px-4">
                                Read more...
                            </a>
                        </div>
                        <div class="btnWrapper">
                            <a href="#" 
                            class="btn btn-danger removeCard" 
                            data-asin="${book.asin}">
                                Remove
                            </a>
                            <a href="#" 
                            class="${buttonClass} addToCart" 
                            data-asin="${book.asin}" 
                            data-title="${book.title}" 
                            data-price="${book.price}" 
                            data-img="${book.img}">
                                ${buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    shelf.innerHTML = html;
}

// Funzione per aggiungere al carrello
function addToCart() {
    const addToCartButtons = document.querySelectorAll(".addToCart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const asin = this.dataset.asin;
            const title = this.dataset.title;
            const price = this.dataset.price;
            const img = this.dataset.img;

            if (addedToCart.includes(asin)) return;

            addedToCart.push(asin);

            this.textContent = "Added to cart!";
            this.className = "btn btn-success addToCart";

            const cartItem = document.createElement("div");
            cartItem.setAttribute("data-asin", asin);
            cartItem.className = "cartItem mb-2 p-2 border rounded";
            cartItem.innerHTML = `
                <div><img src="${img}" style="width: 50px"></div>
                <div>
                    <p class="mb-0"><strong>${title}</strong></p>
                    <p class="mb-0">Price: ${price}€</p>
                </div>
            `;
            cart.appendChild(cartItem);
        });
    });
}

// Funzione per filtrare i libri
let books = [];
const inputSearch = document.getElementById("inputSearch");
inputSearch.addEventListener("keyup", searchUsers);

function searchUsers(event) {
    const valoreInput = event.target.value;
    if (valoreInput.length >= 3) {
        shelf.innerHTML = "";
        const booksFiltered = books.filter((book) => book.title.toLowerCase().includes(valoreInput.toLowerCase()));
        renderBooks(booksFiltered);
        addToCart();
    }
    if (valoreInput.length < 3) {
        shelf.innerHTML = "";
        renderBooks(books);
        addToCart();
    }
}

// Funzione per rimuovere un libro
function removeCard() {
    const removeCardButtons = document.querySelectorAll(".removeCard");
    removeCardButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const asin = this.dataset.asin;
            addedToCart = addedToCart.filter((item) => item !== asin);

            const cartItem = cart.querySelector(`[data-asin="${asin}"]`);
            if (cartItem) cartItem.remove();

            this.closest(".col-12").remove();
        });
    });
}
