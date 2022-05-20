import { Comment } from "../../../../Interfaces/IComment";

export interface CommentProps {
    comment: Comment;
    children?: JSX.Element | JSX.Element[];
}