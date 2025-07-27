import { useContext } from "react";
import SingleComment from "./SingleComment";
import { Table } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";

function CommentList({ reviews, onUpdateComment, onDeleteComment }) {
    const { theme } = useContext(ThemeContext);

    return (
        <Table striped bordered hover variant={theme}>
            <tbody>
                {reviews.map((review) => (
                    <SingleComment
                        key={review._id}
                        review={review}
                        onUpdateComment={onUpdateComment}
                        onDeleteComment={onDeleteComment}
                    />
                ))}
            </tbody>
        </Table>
    );
}

export default CommentList;
