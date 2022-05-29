/*
export const ADD_BOOK = 'ADD_BOOK';

export const addBook = (payload) => {
    return {
        type: ADD_BOOK,
        payload
    }
}
*/

import { createAction } from "@reduxjs/toolkit";

export const addBook = createAction('addBook');
export const deleteBook = createAction('deleteBook');
