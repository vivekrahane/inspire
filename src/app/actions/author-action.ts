import { AuthorDetails, book } from "../share/models/data.model";

export const AUTHOR_LIST_REQUEST = 'author list request';
export const AUTHOR_LIST_SUCCESS= 'author list success';
export const AUTHOR_LIST_DELETE= 'author list delete';
export const AUTHOR_SORT_LIST = 'author sort list'

export class AuthorListRequestAction{
    readonly type = AUTHOR_LIST_REQUEST;
}

export class AuthorListSuccessAction{
    readonly type = AUTHOR_LIST_SUCCESS;
    constructor(public payload?:{data :AuthorDetails}){}
}

export class AuthorListDeleteAction{
    readonly type = AUTHOR_LIST_DELETE;
    constructor(public payload?:{book:book}){}
}

export class AuthorSortBookAction{
    readonly type = AUTHOR_SORT_LIST;
    constructor(public payload?:{sortBy:string}){}
}

