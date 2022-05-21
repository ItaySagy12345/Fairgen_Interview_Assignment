import CommentForm from '../../Components/AppSpecific/CommentForm/CommentForm';
import CommentsContainer from '../../Components/AppSpecific/CommentsContainer/CommentsContainer';
import { useCommentsPage } from './useCommentsPage';

function CommentsPage() {
    const {
        comments,
        hasMoreComments,
        getAndSetComments
    } = useCommentsPage();

    return (
        <>
            <CommentForm />
            <CommentsContainer comments={comments} hasMoreComments={hasMoreComments} onFetchMoreComments={getAndSetComments} />
        </>
    );
}

export default CommentsPage;