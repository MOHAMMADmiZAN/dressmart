import {jsonPlaceHolder} from "./api";

export declare type post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface postArray extends Array<post> {

}


// export type postArray = post[];


export const postFetchData = jsonPlaceHolder.get<postArray>("/posts").then(res => res.data);


// create axois post request function
export const postCreateData = (data: post) => jsonPlaceHolder.post<number>("/posts", data).then(res => res.status);

// create axois put request function
export const postUpdateData = (data: post) => jsonPlaceHolder.put<number>("/posts/1", data).then(res => res.status);




