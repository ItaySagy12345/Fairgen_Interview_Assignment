import * as constants from '../Assets/Utils/Constants/constants';
import { NewComment } from '../Interfaces/INewComment';
import { Comment } from '../Interfaces/IComment';

export async function postComment(newComment: NewComment): Promise<number> {
    try {
        const response = await constants.ASSIGN_COMMENT_API.post(constants.ASSIGN_COMMENT_ROUTE, newComment);
        return response.status;
    } catch (err: any) {
        throw err.response.data.message;
    }
}

export async function getComments(startIndex: number): Promise<Comment[]> {
    try {
        const response = await constants.JSON_PLACEHOLDER_API.get(`${constants.GET_COMMENTS_ROUTE}?_start=${startIndex}&_limit=${constants.COMMENT_FETCH_INCREMENT}`);
        return response.data;
    } catch (err: any) {
        throw err.response.data.message;
    }
}