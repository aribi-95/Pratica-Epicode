import { useState, useContext } from "react";
import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
import AllTheBooks from "./components/AllTheBooks.jsx";
import "./assets/app.css";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea.jsx";

function App() {
    const { theme } = useContext(ThemeContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [selected, setSelected] = useState("");
    const [selectedTitle, setSelectedTitle] = useState("");

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

                <Container fluid className="px-3">
                    <Row>
                        <Col xs={8}>
                            <AllTheBooks
                                searchTerm={searchTerm}
                                selected={selected}
                                setSelected={setSelected}
                                setSelectedTitle={setSelectedTitle}
                            />
                        </Col>
                        <Col xs={4}>
                            <div style={{ position: "sticky", top: "80px" }}>
                                <h1
                                    className={`text-center ${
                                        theme === "dark"
                                            ? "text-light"
                                            : "text-dark"
                                    }`}
                                >
                                    Commenti
                                </h1>

                                <hr className={"border-2 border-secondary"} />
                                {selected ? (
                                    <CommentArea
                                        bookId={selected}
                                        bookTitle={selectedTitle}
                                    />
                                ) : (
                                    <p
                                        className={`text-center ${
                                            theme === "dark"
                                                ? "text-light"
                                                : "text-dark"
                                        }`}
                                    >
                                        Clicca sulla copertina di un libro per
                                        visualizzare le recensioni degli utenti!
                                    </p>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>

                <MyFooter />
            </main>
        </>
    );
}

export default App;
