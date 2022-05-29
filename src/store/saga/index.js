/* eslint-disable import/no-anonymous-default-export */
import { take } from 'redux-saga/effects';
import { addBook } from '../slices/bookSlice';

export default function* () {
    yield take(addBook.toString());
    console.log('I am not the root saga!');
}
