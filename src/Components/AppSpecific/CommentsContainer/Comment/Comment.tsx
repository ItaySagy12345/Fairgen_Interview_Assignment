import Col from "../../../General/Flexboxes/Column/Col";
import { CommentProps } from "./ICommentProps";

function Comment({ comment }: CommentProps) {
    return (
        <Col styles="comment-container">
            <Col>
                <>{comment.email}</>
                <>{comment.body}</>
            </Col>
        </Col>
    );
}

export default Comment;