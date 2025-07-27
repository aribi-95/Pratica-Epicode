import { useContext } from "react";
import { Card } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";

function SingleBook({ book, selected, setSelected, setSelectedTitle }) {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Card
                bg={theme}
                key={theme === "light" ? "Light" : "Dark"}
                text={theme === "light" ? "dark" : "white"}
                className="h-100 d-flex flex-column"
            >
                <Card.Img
                    onClick={() => {
                        if (selected === book.asin) {
                            setSelected("");
                            setSelectedTitle("");
                        } else {
                            setSelected(book.asin);
                            setSelectedTitle(book.title);
                        }
                    }}
                    variant="top"
                    style={{ cursor: "pointer" }}
                    src={book.img}
                    alt={book.title}
                />
                <Card.Body className="d-flex flex-column p-2">
                    <Card.Title className="mb-1">{book.title}</Card.Title>
                    <Card.Text className="mt-auto">
                        Prezzo: {book.price} €
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default SingleBook;
