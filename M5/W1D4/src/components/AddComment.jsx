import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddComment({ bookId, onAddComment }) {
    const [rangeValue, setRangeValue] = useState(1);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (comment.trim() === "") {
            alert("Devi inserire un commento!");
            return;
        }

        const newComment = {
            comment,
            rate: Number(rangeValue),
            elementId: bookId,
        };

        onAddComment(newComment);

        setComment("");
        setRangeValue(1);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 px-5">
                <Form.Range min="1" max="5" step="1" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
                <Form.Label>Valutazione: {rangeValue}/5 ★</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Scrivi un commento..." value={comment} onChange={(e) => setComment(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Inserisci
            </Button>
        </Form>
    );
}

export default AddComment;
