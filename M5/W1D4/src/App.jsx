import { useState, useContext } from "react";
import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
import AllTheBooks from "./components/AllTheBooks.jsx";
import "./assets/app.css";
import { ThemeContext } from "./context/ThemeContext.jsx";

function App() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <MyNav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <main
                className="mb-5"
                style={
                    theme === "light"
                        ? { backgroundColor: "white" }
                        : { backgroundColor: "rgb(38 43 48)" }
                }
            >
                <Welcome />
                <AllTheBooks searchTerm={searchTerm} />
                <MyFooter />
            </main>
        </>
    );
}

export default App;
