export const REQUEST_ARTWORK_API_DATA = 'REQUEST_ARTWORK_API_DATA';
export const RECEIVE_ARTWORK_API_DATA = 'RECEIVE_ARTWORK_API_DATA';
export const REQUEST_ARTWORK_PAGED_DATA = 'REQUEST_ARTWORK_PAGED_DATA';
export const RECEIVE_ARTWORK_PAGED_API_DATA = 'RECEIVE_ARTWORK_PAGED_API_DATA';
export const REQUEST_API_FAILURE = 'FETCH_ATRWORKS_FAILURE';
export const SET_SALE_ITEM = 'SET_SALE_ITEM'
export const REQUEST_ARTWORK_DETAIL_API_DATA = 'REQUEST_ARTWORK_DETAIL_API_DATA';
export const RECEIVE_ARTWORK_DETAIL_API_DATA = 'RECEIVE_ARTWORK_DETAIL_API_DATA';

export const requestArtworkApiData =  () => ({type: REQUEST_ARTWORK_API_DATA});
export const requestArtworkDetailApiData =  (data) => ({type: REQUEST_ARTWORK_DETAIL_API_DATA, payload: data});
export const receiveArtworkDetailApiData =  (data) => ({type: RECEIVE_ARTWORK_DETAIL_API_DATA, payload: data});
export const requestArtworkPagedApiData = data => ({type: REQUEST_ARTWORK_PAGED_DATA, payload: data});
export const receiveArtworkApiData =  data => ({type: RECEIVE_ARTWORK_API_DATA, payload: data});
export const receiveArtworkPagedApiData =  data => ({type: RECEIVE_ARTWORK_PAGED_API_DATA, payload: data});
export const setSaleItem = data => ({type: SET_SALE_ITEM, payload: data});
