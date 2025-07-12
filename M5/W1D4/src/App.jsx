import { useState } from "react";
import MyNav from "./MyNav.jsx";
import MyFooter from "./MyFooter.jsx";
import Welcome from "./Welcome.jsx";
import AllTheBooks from "./AllTheBooks.jsx";
import "./app.css";

function App() {
    return (
        <>
            <MyNav />
            <main>
                <Welcome />
                <AllTheBooks />
                <MyFooter />
            </main>
        </>
    );
}

export default App;
