import { useState, useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";
import SingleBook from "./SingleBook";

import fantasy from "../assets/books/fantasy.json";
import horror from "../assets/books/horror.json";
import romance from "../assets/books/romance.json";
import scifi from "../assets/books/scifi.json";
import history from "../assets/books/history.json";

function AllTheBooks({ searchTerm, selected, setSelected, setSelectedTitle }) {
    const { theme } = useContext(ThemeContext);

    const [selectedGenre, setSelectedGenre] = useState("Fantasy");

    const booksByGenre = {
        Fantasy: fantasy,
        Horror: horror,
        Romance: romance,
        SciFi: scifi,
        History: history,
    };

    const currentBooks = booksByGenre[selectedGenre];

    const filteredBooks = currentBooks.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <Form.Select
                value={selectedGenre}
                onChange={(e) => {
                    setSelectedGenre(e.target.value);
                    setSelected("");
                }}
                className="my-3"
                data-bs-theme={theme}
            >
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="SciFi">SciFi</option>
                <option value="History">History</option>
            </Form.Select>

            <Row>
                {filteredBooks.map((book) => (
                    <Col
                        key={book.asin}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        className="mb-4"
                    >
                        <SingleBook
                            book={book}
                            selected={selected}
                            setSelected={setSelected}
                            setSelectedTitle={setSelectedTitle}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AllTheBooks;
