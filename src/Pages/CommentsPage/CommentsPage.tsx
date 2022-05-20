import CommentForm from '../../Components/AppSpecific/CommentForm/CommentForm';
import CommentsContainer from '../../Components/AppSpecific/CommentsContainer/CommentsContainer';
import { useCommentsPage } from './useCommentsPage';

function CommentsPage() {
    const { comments } = useCommentsPage();

    return (
        <>
            <CommentForm />
            <CommentsContainer comments={comments} />
        </>
    );
}

export default CommentsPage;