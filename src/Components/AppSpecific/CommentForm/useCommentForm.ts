import * as commentsService from '../../../Services/commentsService';
import { NewComment } from '../../../Interfaces/INewComment';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export function useCommentForm() {
    const [text, setText] = useState<string>('');

    const textChangeHandler = (inputText: string) => {
        setText(inputText);
    };

    const submitCommentHandler = async (event: any) => {
        try {
            event.preventDefault();
            const newComment: NewComment = { id: nanoid(5), text: text };
            const postCommentConfirmation: number = await commentsService.postComment(newComment);
            // postCommentConfirmation === 200 && render success message...
        } catch (err: any) {
            console.log(err);
        } finally {
            resetCommentFields();
        }
    };

    const resetCommentFields = () => {
        setText('');
    };

    return {
        text,
        textChangeHandler,
        submitCommentHandler
    };
}