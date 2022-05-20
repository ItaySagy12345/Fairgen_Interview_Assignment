import SymmetricalGrid from "../../General/SymmetricalGrid/SymmetricalGrid";
import { CommentsContainerProps } from "./ICommentsContainerProps";
import Comment from "./Comment/Comment";
import '../../../Styles/GeneralClasses/generalClasses.css';
import './CommentsContainer.css';

function CommentsContainer({ comments }: CommentsContainerProps) {
    return (
        <SymmetricalGrid styles="comments-grid-container card" numOfColumns={3}>
            {comments.map((comment) => (
                <Comment
                    key={comment.postId}
                    comment={comment}>
                </Comment>
            ))}
        </SymmetricalGrid>
    );
}

export default CommentsContainer;