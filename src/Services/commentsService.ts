import * as constants from '../Assets/Utils/Constants/constants';
import { NewComment } from '../Interfaces/INewComment';

export async function postComment(newComment: NewComment) {
    try {
        await constants.ASSIGN_COMMENT_API.post(constants.ASSIGN_COMMENT_ROUTE, newComment);
        // return response.status;
    } catch (err: any) {
        throw err.response.data.message;
    }
}

export async function getComments() {
    try {
        const response = await constants.JSON_PLACEHOLDER_API.get(constants.GET_COMMENTS_ROUTE);
        return response.data;
    } catch (err: any) {
        throw err.response.data.message;
    }
}