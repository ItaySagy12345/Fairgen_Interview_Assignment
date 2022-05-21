import CommentForm from '../../Components/AppSpecific/CommentForm/CommentForm';
import CommentsContainer from '../../Components/AppSpecific/CommentsContainer/CommentsContainer';
import Col from '../../Components/General/Flexboxes/Column/Col';
import { useCommentsPage } from './useCommentsPage';
import './CommentsPage.css';

function CommentsPage() {
    const {
        comments,
        hasMoreComments,
        getAndSetComments
    } = useCommentsPage();

    return (
        <Col styles="comments-page-container">
            <CommentForm />
            <CommentsContainer comments={comments} hasMoreComments={hasMoreComments} onFetchMoreComments={getAndSetComments} />
        </Col>
    );
}

export default CommentsPage;