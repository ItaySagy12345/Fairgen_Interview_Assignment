import * as constants from '../../../Assets/Utils/Constants/constants';
import Row from '../../General/Flexboxes/Row/Row';
import SymmetricalGrid from "../../General/SymmetricalGrid/SymmetricalGrid";
import InfiniteScroll from "react-infinite-scroll-component";
import { CommentsContainerProps } from "./ICommentsContainerProps";
import { useCommentsContainer } from './useCommentsContainer';
import Comment from "./Comment/Comment";
import './CommentsContainer.css';

function CommentsContainer({ comments, hasMoreComments, onFetchMoreComments }: CommentsContainerProps) {
    const { getNumOfColumns } = useCommentsContainer();

    return (
        <InfiniteScroll
            style={{ margin: 50 }}
            dataLength={comments.length}
            next={onFetchMoreComments}
            hasMore={hasMoreComments}
            loader={<h4>Loading...</h4>}
            endMessage={<Row styles="end-message"><>{constants.SCROLL_END_MESSAGE}</></Row>}>

            <SymmetricalGrid styles="comments-grid-container" numOfColumns={getNumOfColumns()}>
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        comment={comment}>
                    </Comment>
                ))}
            </SymmetricalGrid>
        </InfiniteScroll>
    );
}

export default CommentsContainer;