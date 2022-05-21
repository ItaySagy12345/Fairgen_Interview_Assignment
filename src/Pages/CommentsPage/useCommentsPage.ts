import * as commentsService from '../../Services/commentsService';
import * as library from '../../Assets/Utils/Library/library';
import * as constants from '../../Assets/Utils/Constants/constants';
import { Comment } from '../../Interfaces/IComment';
import { useState, useEffect } from 'react';

export function useCommentsPage() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [hasMoreComments, setHasMoreComments] = useState<boolean>(true);

    useEffect(() => {
        getAndSetComments();
    }, []);

    const getAndSetComments = async () => {
        if (comments.length >= constants.MAX_NUM_COMMENTS) {
            setHasMoreComments(false);
            return;
        }
        let fetchedComments = await commentsService.getComments(comments.length);
        fetchedComments = fetchedComments.map((fetchedComment: Comment) => ({
            ...fetchedComment,
            body: library.getCapitalizedString(fetchedComment.body)
        }));
        setComments((prevState: Comment[]) => [...prevState, ...fetchedComments]);
    };

    return {
        comments,
        hasMoreComments,
        getAndSetComments
    };
}