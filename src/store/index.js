/* global window */
import {createStore, applyMiddleware, compose} from 'redux';
import saga from 'redux-saga';
import {rootSaga} from '@state';
import reducers from './reducers';

const isProduction = process.env.NODE_ENV === 'production';

const sagaMiddleware = saga();

let store;

export default initialState => {
    if (isProduction) {
        store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));
        sagaMiddleware.run(rootSaga);
    } else {
        // eslint-disable-next-line
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const enhancer = composeEnhancers(
            applyMiddleware(sagaMiddleware)
        );
        store = createStore(reducers, initialState, enhancer);
        let sagaTask = sagaMiddleware.run(rootSaga);
        if (module.hot) {
            module.hot.accept('./reducers', () => store.replaceReducer(reducers));
            module.hot.accept('./sagas.js', () => {
                sagaTask.cancel();
                sagaTask.done.then(() => {
                    sagaTask = sagaMiddleware.run(rootSaga);
                });
            });
        }
    }

    return store;
};
