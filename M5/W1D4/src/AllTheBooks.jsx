import books from "./assets/books/romance.json";
import { Container, Row, Col, Card } from "react-bootstrap";

function AllTheBooks() {
    return (
        <Container>
            <Row>
                {books.map((book) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={book.asin} className="mb-4">
                        <Card className="h-100 d-flex flex-column">
                            <Card.Img variant="top" src={book.img} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text className="mt-auto">Price: {book.price} €</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AllTheBooks;
