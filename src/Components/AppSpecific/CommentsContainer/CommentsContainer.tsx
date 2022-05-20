import SymmetricalGrid from "../../General/SymmetricalGrid/SymmetricalGrid";
import { CommentsContainerProps } from "./ICommentsContainerProps";
import { useCommentsContainer } from './useCommentsContainer';
import Comment from "./Comment/Comment";
import './CommentsContainer.css';

function CommentsContainer({ comments }: CommentsContainerProps) {
    const { getNumOfColumns } = useCommentsContainer();

    return (
        <SymmetricalGrid styles="comments-grid-container" numOfColumns={getNumOfColumns()}>
            {comments.map((comment) => (
                <Comment
                    key={comment.id}
                    comment={comment}>
                </Comment>
            ))}
        </SymmetricalGrid>
    );
}

export default CommentsContainer;