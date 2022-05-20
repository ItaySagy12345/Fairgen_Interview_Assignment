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

//Numbers:
export const COMMENT_MAX_LENGTH = 100;

// Conditional styling:
export const ENABLED_BUTTON_STYLE = 'blue-white-button enabled-blue-white-button';
export const DISABLED_BUTTON_STYLE = 'blue-white-button disabled-blue-white-button';
export const ENABLED_ERROR_STYLE = 'enabled-red-pink-error-message';
export const DISABLED_ERROR_STYLE = 'disabled-red-pink-error-message';