import * as constants from '../Assets/Utils/Constants/constants';

export async function getComments() {
    try {
        const response = await constants.API.get(constants.COMMENTS_ROUTE);
        return response.data;
    } catch (err: any) {
        throw err.response.data.message;
    }
}