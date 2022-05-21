import * as commentsService from '../../Services/commentsService';
import * as library from '../../Assets/Utils/Library/library';
import { Comment } from '../../Interfaces/IComment';
import { useState, useEffect } from 'react';

export function useCommentsPage() {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        getAndSetComments();
    }, []);

    const getAndSetComments = async () => {
        let fetchedComments = await commentsService.getComments();
        fetchedComments = fetchedComments.map((fetchedComment: Comment) => ({
            ...fetchedComment,
            body: library.getCapitalizedString(fetchedComment.body)
        }));
        setComments(fetchedComments);
    };

    return {
        comments
    };
}