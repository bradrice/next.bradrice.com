import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
// import * as sagas from './sagas.mock';
import * as sagas from './sagas/sagas';
import {} from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

export default (preloadState, options) => {
    createStore(reducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
        )
)
    }

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}