import axios from 'axios';

//API:
export const JSON_PLACEHOLDER_API_DOMAIN = "https://jsonplaceholder.typicode.com";
export const ASSIGN_COMMENT_API_DOMAIN = "test.steps.me";

export const ASSIGN_COMMENT_API = axios.create({ baseURL: ASSIGN_COMMENT_API_DOMAIN });
export const JSON_PLACEHOLDER_API = axios.create({ baseURL: JSON_PLACEHOLDER_API_DOMAIN });

//Tabs:
export const COMMENTS = "/";

//Routes:
export const ASSIGN_COMMENT_ROUTE = "/test/testAssignComment";
export const GET_COMMENTS_ROUTE = "/comments";

//Strings:
export const COMMENT_ERROR_MESSAGE = "Max Character Limit Reached";
export const CHAR_COUNT_WORDING = "Char Count:";
export const COMMENT_FORM_TEXTAREA_PLACEHOLDER = "Once upon a time...";
export const SUBMIT_COMMENT_BUTTON_WORDING = "Submit Comment";
export const SUBMIT_WORDING = "Submit";

//Numbers:
export const COMMENT_MAX_LENGTH = 100;
export const DEBOUNCE_TIMER = 500;