import {jsonPlaceHolder} from "./api";
type post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type postArray = post[];


export const postFetchData = jsonPlaceHolder.get<postArray>("/posts").then(res => res.data);



