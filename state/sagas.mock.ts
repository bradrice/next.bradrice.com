import { take, put, select, takeLatest, call } from 'redux-saga/effects';
import * as mutations from './mutations';
// import { v4 as uuidv4 } from 'uuid';

import {REQUEST_ARTWORK_API_DATA, receiveArtworkApiData, receiveArtworkPagedApiData, receiveArtworkDetailApiData, REQUEST_ARTWORK_PAGED_DATA, REQUEST_ARTWORK_DETAIL_API_DATA} from './actions/artworkActions';
import {REQUEST_CAROUSEL_API_DATA, receiveCarouselApiData} from './actions/carouselActions';
import { fetchArtworkData, fetchCarouselData, fetchArtworkPagedData, fetchArtworkDetailData } from './api';
/**
 * Reducers cannot have any randomness (the must be deterministic)
 * Since the action of creating a task involves generating a random ID, it is not pure.
 * When the response to an action is not deterministic in a Redux application, both Sagas and Thunks are appropriate.
 */

function* getArtworkApiDataSaga() {
    try {
        const data = yield call(fetchArtworkData);
        yield put(receiveArtworkApiData(data))
    } catch(e) {
        console.log(e);
    }
}

function* getArtworkDetailApiDataSaga(action) {
    try {
        console.log('detail call', action.payload);
        const data = yield call(fetchArtworkDetailData, action.payload);
        yield put(receiveArtworkDetailApiData(data))
    } catch(e) {
        console.log(e);
    }
}

function* getCarouselApiDataSaga() {
    try {
        const data = yield call(fetchCarouselData);
        yield put(receiveCarouselApiData(data))
    } catch(e) {
        console.log(e);
    }
}

function* getArworkApiPagedDataSaga(action) {
    console.log('getting new artwork', action.payload);
    try {
        const data = yield call(fetchArtworkPagedData, action.payload);
        yield put(receiveArtworkPagedApiData(data))
    } catch(e) {
        console.log(e);
    }
}

export default function* mySagas() {
    yield takeLatest(REQUEST_ARTWORK_API_DATA, getArtworkApiDataSaga);
    yield takeLatest(REQUEST_ARTWORK_DETAIL_API_DATA, getArtworkDetailApiDataSaga);
    yield takeLatest(REQUEST_CAROUSEL_API_DATA, getCarouselApiDataSaga);
    yield takeLatest(REQUEST_ARTWORK_PAGED_DATA, getArworkApiPagedDataSaga);
}