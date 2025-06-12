/*
STEP
1. recupero pulsante e campo input -> onclick
2. funzione onclick
3. funzione fetch
4. funzione per ciclo risultati fetch
5. funzione per html dei singoli elementi ciclati
*/

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", search);

function search() {
    event.preventDefault();
    const inputValue = document.getElementById("input");
    if (!inputValue) {
        return;
    } else {
        fetchImg(inputValue.value);
    }
}

function fetchImg(keyword) {
    fetch(`https://api.pexels.com/v1/search?query=${keyword}`, {
        headers: {
            Authorization: "674eeRFs9TjubDc5KcRiCLBqMarf0dfOeiiIQeVDVogUsiLFcZ40CgPq",
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            renderImg(data.photos);
        });
}

function renderImg(photos) {
    const container = document.getElementById("container");
    container.innerHTML = "";
    photos.forEach((photo) => {
        const image = document.createElement("img");
        image.src = photo.src.medium;
        image.alt = photo.alt;
        container.appendChild(image);
    });
}
