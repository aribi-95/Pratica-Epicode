const goButton = document.getElementById("button-search");
goButton.addEventListener("click", function () {
    const input = document.getElementById("searchField").value;
    fetchAndDisplay(input, "searchSection");
});

fetchAndDisplay("queen", "queenSection");
fetchAndDisplay("eminem", "eminemSection");
fetchAndDisplay("metallica", "metallicaSection");

//

function fetchAndDisplay(query, sectionId) {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            const section = document.getElementById(sectionId);
            section.innerHTML = "";
            data.data.slice(0, 6).forEach((song) => {
                const card = `
                <div class="col mb-4">
                    <div class="card h-100" id="${song.album.id}">
                    <img src="${song.album.cover_big}" class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">${song.title}</h5>
                        <p class="card-text">${song.artist.name}</p>
                    </div>
                    </div>
                </div>
                `;
                section.innerHTML += card;
            });
            section.parentElement.classList.remove("d-none");
        });
}
