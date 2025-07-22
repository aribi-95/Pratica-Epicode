import { useState } from "react";

function SingleComment({ review, onUpdateComment, onDeleteComment }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedComment, setEditedComment] = useState(review.comment);
    const [editedRate, setEditedRate] = useState(review.rate);

    const handleSave = () => {
        if (editedComment.trim() === "") {
            alert("Il commento non può essere vuoto.");
            return;
        }

        onUpdateComment(review._id, {
            comment: editedComment,
            rate: Number(editedRate),
            elementId: review.elementId,
        });

        setIsEditing(false);
    };

    return (
        <tr>
            <td>{isEditing ? <input type="number" min="1" max="5" value={editedRate} onChange={(e) => setEditedRate(e.target.value)} /> : `${review.rate}/5 ★`}</td>
            <td>{isEditing ? <input type="text" value={editedComment} onChange={(e) => setEditedComment(e.target.value)} /> : review.comment}</td>
            <td style={{ textAlign: "center" }}>
                {isEditing ? (
                    <>
                        <button onClick={handleSave}>💾</button>
                        <button onClick={() => setIsEditing(false)}>❌</button>
                    </>
                ) : (
                    <button onClick={() => setIsEditing(true)}>✏️</button>
                )}
            </td>
            <td style={{ textAlign: "center" }}>
                <button onClick={() => onDeleteComment(review._id)}>🗑️</button>
            </td>
        </tr>
    );
}

export default SingleComment;
