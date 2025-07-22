import SingleComment from "./SingleComment";
import { Table } from "react-bootstrap";

function CommentList({ reviews, onUpdateComment, onDeleteComment }) {
    return (
        <Table striped bordered hover>
            <tbody>
                {reviews.map((review) => (
                    <SingleComment key={review._id} review={review} onUpdateComment={onUpdateComment} onDeleteComment={onDeleteComment} />
                ))}
            </tbody>
        </Table>
    );
}

export default CommentList;
