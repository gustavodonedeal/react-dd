import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const configureStore = (preloadedState = undefined) => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)
    );
};