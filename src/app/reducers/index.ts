import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromAuthor from './author-reducer';

export interface RootReducerState {
    author: fromAuthor.AuthorReducerState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    author: fromAuthor.AuthorReducer,
};

export const getAuthorState = (state: RootReducerState) => state.author;

export const getAuthorLoaded = createSelector(getAuthorState, fromAuthor.getLoading);
export const getAuthorLoading = createSelector(getAuthorState, fromAuthor.getLoading);
export const getAuthorData = createSelector(getAuthorState, fromAuthor.getAuthorData);