// Trovo il libro che mi ha portato sulla pagina details
const queryParams = new URLSearchParams(window.location.search);
const asin = queryParams.get("id");

// Fetch dei libri
fetchBooks();
function fetchBooks() {
    fetch("https://striveschool-api.herokuapp.com/books")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            renderBook(data);
        });
}

function renderBook(books) {
    const thisBook = books.find((book) => book.asin === asin);

    const title = document.getElementById("title");
    title.textContent = thisBook.title;

    const infoContainer = document.getElementById("infoContainer");
    infoContainer.innerHTML = `
        <img src="${thisBook.img}" alt="${thisBook.title}" />
        <div>
            <p><strong>Category:</strong> ${thisBook.category}</p>
            <p><strong>Plot:</strong>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p><strong>Price:</strong> €${thisBook.price}</p>
        </div>
    `;
}
