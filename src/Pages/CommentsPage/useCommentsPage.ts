import * as commentsService from '../../Services/commentsService';
import { Comment } from '../../Interfaces/IComment';
import { useState, useEffect } from 'react';

export function useCommentsPage() {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        getAndSetComments();
    }, []);

    const getAndSetComments = async () => {
        const fetchedComments = await commentsService.getComments();
        setComments(fetchedComments);
    };

    return {
        comments
    };
}