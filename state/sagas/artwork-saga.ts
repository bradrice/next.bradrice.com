import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

import {REQUEST_ARTWORK_API_DATA, requestArtworkApiData} from '../actions/artworkActions';
import { fetchArtworkData } from '../api';

function* getArtworkApiData() {
    try {
        const data = yield call(fetchArtworkData);
        yield put(requestArtworkApiData())
    } catch(e) {
        console.log(e);
    }
}

export default function* mySagas() {
    yield takeLatest(REQUEST_ARTWORK_API_DATA, getArtworkApiData);
}