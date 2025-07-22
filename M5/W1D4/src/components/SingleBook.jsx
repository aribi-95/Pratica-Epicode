import { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { ThemeContext } from "../context/ThemeContext";

function SingleBook({ book }) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [selected, setSelected] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [currentAsin, setCurrentAsin] = useState("");
    const [currentTitle, setCurrentTitle] = useState("");

    return (
        <>
            <Card
                bg={theme === "light" ? "light" : "dark"}
                key={theme === "light" ? "Light" : "Dark"}
                text={theme === "light" ? "dark" : "white"}
                className="h-100 d-flex flex-column"
            >
                <Card.Img
                    onClick={() => {
                        setSelected(true);
                        setModalShow(true);
                        setCurrentAsin(book.asin);
                        setCurrentTitle(book.title);
                    }}
                    style={{ cursor: "pointer" }}
                    className={selected ? "border border-5 border-danger" : ""}
                    variant="top"
                    src={book.img}
                    alt={book.title}
                />
                <Card.Body className="d-flex flex-column p-2">
                    <Card.Title className="mb-1">{book.title}</Card.Title>
                    <Card.Text className="mt-auto">
                        Price: {book.price} €
                    </Card.Text>
                </Card.Body>
            </Card>

            {modalShow && (
                <CommentArea
                    show={modalShow}
                    onHide={() => {
                        setSelected(false);
                        setModalShow(false);
                    }}
                    bookId={currentAsin}
                    bookTitle={currentTitle}
                />
            )}
        </>
    );
}

export default SingleBook;
