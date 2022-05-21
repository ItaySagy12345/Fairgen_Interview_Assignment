import { Comment } from "../../../Interfaces/IComment";

export interface CommentsContainerProps {
    comments: Comment[];
    hasMoreComments: boolean;
    onFetchMoreComments: any;
}