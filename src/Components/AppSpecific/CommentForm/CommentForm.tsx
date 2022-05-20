import * as constants from '../../../Assets/Utils/Constants/constants';
import GeneralButton from '../../General/GeneralButton/GeneralButton';
import Col from '../../General/Flexboxes/Column/Col';
import Row from '../../General/Flexboxes/Row/Row';
import Sign from '../../General/Sign/Sign';
import { useCommentForm } from './useCommentForm';
import '../../../Styles/GeneralClasses/generalClasses.css';
import './CommentForm.css';

function CommentForm() {
    const {
        text,
        textChangeHandler,
        getSubmitButtonStyles,
        getErrorMessageStyles,
        getButtonStatus,
        getCharCount,
        submitCommentHandler
    } = useCommentForm();

    return (
        <form className="comment-form card flex-col" onSubmit={submitCommentHandler}>
            <Col styles='comment-form__inner'>
                <textarea
                    required
                    value={text}
                    className="comment-textarea"
                    placeholder={constants.COMMENT_FORM_TEXTAREA_PLACEHOLDER}
                    onChange={(event: any) => textChangeHandler(event.target.value)}
                />
                <Row styles="comment-char-counter"><>{getCharCount()}</></Row>
                <Row styles='comment-error-submit-container'>
                    <Row styles="comment-error-submit-inner-container">
                        <Row styles="comment-form-error-sign-wrapper">
                            <Sign
                                wording={constants.COMMENT_ERROR_MESSAGE}
                                styles={getErrorMessageStyles()}
                                colorPrimary={"red"}
                                colorSecondary={"pink"}
                                borderRadius={6}
                            />
                        </Row>
                        <Row styles="comment-form-button-wrapper">
                            <GeneralButton
                                wording={constants.SUBMIT_COMMENT_BUTTON_WORDING}
                                styles={getSubmitButtonStyles()}
                                isDisabled={getButtonStatus()}
                            />
                        </Row>
                    </Row>
                </Row>
            </Col>
        </form>
    );
}

export default CommentForm;