import { useState, useEffect, useContext } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

import { ThemeContext } from "../context/ThemeContext";

const authorizationToken =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhZDdiNDk2OGRlNTAwMTU1MmEzYzIiLCJpYXQiOjE3NTI5OTYxNTAsImV4cCI6MTc1NDIwNTc1MH0.j4Gl4k5xN72X27nBV7dsgp5Sji3PuceAEMjHVg0QVQ0";

function CommentArea({ bookId, bookTitle }) {
    const [comments, setComments] = useState([]);
    const { theme } = useContext(ThemeContext);
    const titleTheme = theme === "dark" ? "text-light" : "text-dark";

    useEffect(() => {
        if (!bookId) return;

        fetch(
            `https://striveschool-api.herokuapp.com/api/books/${bookId}/comments`,
            {
                headers: { Authorization: authorizationToken },
            }
        )
            .then((res) => res.json())
            .then((data) => setComments(data))
            .catch((err) => console.error(err));
    }, [bookId]);

    // Funzione per aggiungere un commento
    const addComment = (newComment) => {
        fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            method: "POST",
            headers: {
                Authorization: authorizationToken,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComment),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Errore invio commento");
                }
            })
            .then((savedComment) => {
                setComments((prev) => [...prev, savedComment]);
            })
            .catch((err) => console.error(err));
    };

    // Funzione per modificare un commento
    const updateComment = (id, updatedData) => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
            method: "PUT",
            headers: {
                Authorization: authorizationToken,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Errore aggiornamento commento");
                return res.json();
            })
            .then((updatedComment) => {
                setComments((prev) =>
                    prev.map((comment) =>
                        comment._id === id ? updatedComment : comment
                    )
                );
            })
            .catch((err) => console.error(err));
    };

    // Funzione per cancellare un commento
    const deleteComment = (id) => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: authorizationToken,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Errore cancellazione commento");
                // Aggiorno localmente senza rifetch
                setComments((prev) => prev.filter((c) => c._id !== id));
            })
            .catch((err) => console.error(err));
    };

    return (
        <>
            <h3 className={`text-center ${titleTheme}`}>
                <i>{bookTitle}</i>
            </h3>

            <hr className={"border-2 border-secondary"} />

            <div className="p-3">
                <CommentList
                    reviews={comments}
                    onUpdateComment={updateComment}
                    onDeleteComment={deleteComment}
                />
            </div>

            <hr className={"mt-0 border-2 border-secondary"} />

            <div className="p-3">
                <h4 className={`mb-4 text-center ${titleTheme}`}>
                    Inserisci la tua recensione!
                </h4>

                <AddComment bookId={bookId} onAddComment={addComment} />
            </div>
        </>
    );
}

export default CommentArea;
