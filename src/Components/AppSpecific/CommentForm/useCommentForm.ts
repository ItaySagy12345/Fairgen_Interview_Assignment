import * as commentsService from '../../../Services/commentsService';
import * as constants from '../../../Assets/Utils/Constants/constants';
import { useDebounce } from '../../../Hooks/useDebounce';
import { NewComment } from '../../../Interfaces/INewComment';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export function useCommentForm() {
    const [text, setText] = useState<string>('');
    const [didMount, setDidMount] = useState<boolean>(false);
    const [newComment, setNewComment] = useState<NewComment>({ id: '', text: '' });
    const debouncedNewComment = useDebounce<any>(newComment, constants.DEBOUNCE_TIMER);

    const textChangeHandler = (inputText: string) => {
        setText(inputText);
    };

    useEffect(() => {
        if (!didMount) {
            setDidMount(true);
            return;
        }
        didMount && submitComment(debouncedNewComment);
    }, [debouncedNewComment]);

    const submitComment = async (newComment: NewComment) => {
        const postCommentConfirmation: number = await commentsService.postComment(newComment);
        // postCommentConfirmation === 200 && render success message...
    };

    const submitCommentHandler = async (event: any) => {
        try {
            event.preventDefault();
            setNewComment({ id: nanoid(5), text: text });
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