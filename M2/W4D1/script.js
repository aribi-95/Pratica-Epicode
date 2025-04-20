// Array iniziale, NON MODIFICARE
const jobs = [
    {
        title: "Marketing Intern",
        location: "US, NY, New York",
    },
    {
        title: "Customer Service - Cloud Video Production",
        location: "NZ, Auckland",
    },
    {
        title: "Commissioning Machinery Assistant (CMA)",
        location: "US, IA, Wever",
    },
    {
        title: "Account Executive - Washington DC",
        location: "US, DC, Washington",
    },
    {
        title: "Bill Review Manager",
        location: "US, FL, Fort Worth",
    },
    {
        title: "Accounting Clerk",
        location: "US, MD,",
    },
    {
        title: "Head of Content (m/f)",
        location: "DE, BE, Berlin",
    },
    {
        title: "Lead Guest Service Specialist",
        location: "US, CA, San Francisco",
    },
    {
        title: "HP BSM SME",
        location: "US, FL, Pensacola",
    },
    {
        title: "Customer Service Associate - Part Time",
        location: "US, AZ, Phoenix",
    },
    {
        title: "ASP.net Developer Job opportunity at United States,New Jersey",
        location: "US, NJ, Jersey City",
    },
    {
        title: "Talent Sourcer (6 months fixed-term contract)",
        location: "GB, LND, London",
    },
    {
        title: "Applications Developer, Digital",
        location: "US, CT, Stamford",
    },
    {
        title: "Installers",
        location: "US, FL, Orlando",
    },
    {
        title: "Account Executive - Sydney",
        location: "AU, NSW, Sydney",
    },
    {
        title: "VP of Sales - Vault Dragon",
        location: "SG, 01, Singapore",
    },
    {
        title: "Hands-On QA Leader",
        location: "IL, Tel Aviv, Israel",
    },
    {
        title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
        location: "GB, SOS, Southend-on-Sea",
    },
    {
        title: "Visual Designer",
        location: "US, NY, New York",
    },
    {
        title: "Process Controls Engineer - DCS PLC MS Office - PA",
        location: "US, PA, USA Northeast",
    },
    {
        title: "Marketing Assistant",
        location: "US, TX, Austin",
    },
    {
        title: "Front End Developer",
        location: "NZ, N, Auckland",
    },
    {
        title: "Engagement Manager",
        location: "AE,",
    },
    {
        title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
        location: "US, CA, Carlsbad",
    },
    {
        title: "Customer Service",
        location: "GB, LND, London",
    },
    {
        title: "H1B SPONSOR FOR L1/L2/OPT",
        location: "US, NY, New York",
    },
    {
        title: "Marketing Exec",
        location: "SG,",
    },
    {
        title: "HAAD/DHA Licensed Doctors Opening in UAE",
        location: "AE, AZ, Abudhabi",
    },
    {
        title: "Talent Management Process Manager",
        location: "US, MO, St. Louis",
    },
    {
        title: "Customer Service Associate",
        location: "CA, ON, Toronto",
    },
    {
        title: "Customer Service Technical Specialist",
        location: "US, MA, Waltham",
    },
    {
        title: "Software Applications Specialist",
        location: "US, KS,",
    },
    {
        title: "Craftsman Associate",
        location: "US, WA, Everett",
    },
    {
        title: "Completion Engineer",
        location: "US, CA, San Ramon",
    },
    {
        title: "I Want To Work At Karmarama",
        location: "GB, LND,",
    },
    {
        title: "English Teacher Abroad",
        location: "US, NY, Saint Bonaventure",
    },
];

// Salvo il bottone del file HTML in una variabile
let button = document.getElementById("search");

// Vado a prendere gli input dell'utente e chiamo la funzione searchJob()
button.addEventListener("click", () => {
    let titleInput = document.getElementById("title").value.toLowerCase().trim();
    let locationInput = document.getElementById("location").value.toLowerCase().trim();
    searchJob(titleInput, locationInput);
});

// Funzione che verifica se ci sono dei match, nel caso li inserisce in un array, e da lì li riporta nella tabella (oppure comunica "No jobs found")
function searchJob(title, location) {
    let results = []; // Creo un array vuoto

    // Aggiungo all'array i job che corrispondono alla ricerca
    for (let job of jobs) {
        let jobTitle = job.title.toLowerCase();
        let jobLocation = job.location.toLowerCase();

        if (jobTitle.includes(title) && jobLocation.includes(location)) {
            results.push(job);
        }
    }

    // Aggiorno il conteggio dei risultati
    let count = results.length;

    // Se ci sono risultati
    if (count > 0) {
        let table = document.querySelector("table"); // Vado a prendere la mia tabella dal file HTML
        table.classList.remove("hidden"); // Rendo visibile la tabella

        // Pulisco le righe esistenti della tabella (eccetto l'intestazione) e svuoto il paragrafo
        let rows = table.querySelectorAll("tr:not(:first-child)");
        rows.forEach((row) => row.remove());
        document.querySelector("#results p").innerHTML = "";

        // Inserisco i risultati nella tabella
        results.forEach((job) => {
            let row = table.insertRow();
            row.insertCell(0).innerHTML = job.title;
            row.insertCell(1).innerHTML = job.location;
        });
    } else {
        // Se non ci sono risultati
        document.querySelector("#results p").innerHTML = "No jobs found."; // Lo comunica all'utente
        document.querySelector("table").classList.add("hidden"); // Nasconde la tabella
    }
}
