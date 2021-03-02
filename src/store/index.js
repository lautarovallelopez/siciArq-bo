import { createHashHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from 'store/reducers';
import rootSaga from 'store/sagas';

export const history = createHashHistory();

const sagaMiddleware = createSagaMiddleware();

const middleware = [routerMiddleware(history), sagaMiddleware];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(createRootReducer(history), enhancer);

sagaMiddleware.run(rootSaga);

export default store;
