import axios from 'axios';

//API:
export const API_DOMAIN = "https://jsonplaceholder.typicode.com";
export const API = axios.create({ baseURL: API_DOMAIN });

//Routes:
export const COMMENTS_ROUTE = "/comments";