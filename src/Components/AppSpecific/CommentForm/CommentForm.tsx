import * as constants from '../../../Assets/Utils/Constants/constants';
import Col from '../../General/Flexboxes/Column/Col';
import Row from '../../General/Flexboxes/Row/Row';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useCommentForm } from './useCommentForm';
import '../../../Styles/GeneralClasses/generalClasses.css';
import './CommentForm.css';

function CommentForm() {
    const {
        text,
        textChangeHandler,
        submitCommentHandler
    } = useCommentForm();

    return (
        <form className="comment-form card flex-col" onSubmit={submitCommentHandler}>
            <Col styles='comment-form__inner'>
                <textarea
                    required
                    value={text}
                    className="comment-form__inner__textarea"
                    placeholder={constants.COMMENT_FORM_TEXTAREA_PLACEHOLDER}
                    onChange={(event: any) => textChangeHandler(event.target.value)}
                />
                <Row styles='comment-form__inner__submit-button-container'>
                    <Stack spacing={2} direction="row">
                        <Button type="submit" variant="contained">{constants.SUBMIT_WORDING}</Button>
                    </Stack>
                </Row>
            </Col>
        </form>
    );
}

export default CommentForm;