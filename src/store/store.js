import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
// import bookReducer from "./reducers/bookReducer";
import bookReducer from './slices/bookSlice';
// import authReducer from './slices/authSlice';
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();
/*
const store = configureStore({
    reducer: {
        books: bookReducer,
        auth: authReducer
    }
});
*/

const store = configureStore({
    reducer: {
        books: bookReducer
    },
    // middleware: { sagaMiddleware },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({ 
            thunk: false 
        })
        .concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;
