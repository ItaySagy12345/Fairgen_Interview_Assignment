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
            const newComment: NewComment = { id: nanoid(1), text: text };
            await commentsService.postComment(newComment);
            resetCommentFields();
        } catch (err: any) {
            console.log(err);
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