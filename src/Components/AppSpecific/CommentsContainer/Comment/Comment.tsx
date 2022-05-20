import Col from "../../../General/Flexboxes/Column/Col";
import Row from "../../../General/Flexboxes/Row/Row";
import { CommentProps } from "./ICommentProps";
import '../../../../Styles/GeneralClasses/generalClasses.css';
import './Comment.css';

function Comment({ comment }: CommentProps) {
    return (
        <Col styles="comment-container card">
            <Col styles="comment-container__inner">
                <Row styles="comment-container__inner__email"><>{comment.email}</></Row>
                <Row styles="comment-container__inner__body"><>{comment.body}</></Row>
            </Col>
        </Col>
    );
}

export default Comment;