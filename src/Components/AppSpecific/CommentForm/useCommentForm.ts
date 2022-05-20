import * as commentsService from '../../../Services/commentsService';
import * as constants from '../../../Assets/Utils/Constants/constants';
import { NewComment } from '../../../Interfaces/INewComment';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export function useCommentForm() {
    const [text, setText] = useState<string>('');
    const [textCharArray, setTextCharArray] = useState<string[]>([]);

    const textChangeHandler = (inputText: string) => {
        const spacelessTextCharArray: string[] = inputText.split('').filter(char => char !== ' ');
        setTextCharArray(spacelessTextCharArray);
        setText(inputText);
    };

    const getSubmitButtonStyles = () => {
        return textCharArray.length > constants.COMMENT_MAX_LENGTH ? constants.DISABLED_BUTTON_STYLE : constants.ENABLED_BUTTON_STYLE;
    };

    const getErrorMessageStyles = () => {
        return textCharArray.length < constants.COMMENT_MAX_LENGTH + 1 ? constants.DISABLED_ERROR_STYLE : constants.ENABLED_ERROR_STYLE;
    };

    const getButtonStatus = () => {
        return textCharArray.length > constants.COMMENT_MAX_LENGTH;
    };

    const getCharCount = () => {
        return constants.CHAR_COUNT_WORDING + (constants.COMMENT_MAX_LENGTH - textCharArray.length);
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
        setTextCharArray([]);
    };

    return {
        text,
        textChangeHandler,
        getSubmitButtonStyles,
        getErrorMessageStyles,
        getButtonStatus,
        getCharCount,
        submitCommentHandler
    };
}