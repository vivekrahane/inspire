import { Action } from "../actions";
import { AUTHOR_LIST_DELETE, AUTHOR_LIST_REQUEST, AUTHOR_LIST_SUCCESS, AUTHOR_SORT_LIST } from "../actions/author-action";
import { AuthorDetails } from "../share/models/data.model";

export interface AuthorReducerState {
    loading: boolean;
    loaded: boolean;
    author: AuthorDetails;
}


const initialstate: AuthorReducerState = {
    loading: false,
    loaded: false,
    author: {
        author: '',
        birthday: new Date,
        birthPlace: '',
        books: [],
    }
}

export function AuthorReducer(state = initialstate, action: Action): AuthorReducerState {
    switch (action.type) {
        case AUTHOR_LIST_REQUEST: {
            return { ...state, loading: true };
        }
        case AUTHOR_LIST_SUCCESS: {
            const authorData = action.payload.data;
            return { ...state, loading: false, loaded: true, author: authorData };
        }
        case AUTHOR_LIST_DELETE: {
            const books = state.author.books.filter(book => book != action.payload.book);
            return { ...state, author: { ...state.author, books } };
        }
        case AUTHOR_SORT_LIST: {
            const books = action.payload.sortBy == 'title' ? [...state.author.books].sort((a, b) => a.title.localeCompare(b.title)) :
                [...state.author.books].sort((a, b) => a.PublishDate.localeCompare(b.PublishDate)); 
            return { ...state, author: { ...state.author, books } };
        }
        default: {
            return state;
        }
    }
}

export const getLoading = (state: AuthorReducerState) => state.loading;
export const getLoaded = (state: AuthorReducerState) => state.loaded;
export const getAuthorData = (state: AuthorReducerState) => state.author;

