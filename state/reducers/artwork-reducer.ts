import { RECEIVE_ARTWORK_API_DATA, RECEIVE_ARTWORK_PAGED_API_DATA } from '../actions/artworkActions';

const initialState = {artworks: [], next: '', previous: '', count: '0'}

const artwork = (state:any = initialState, action:any ) => {
    switch(action.type){
        case RECEIVE_ARTWORK_API_DATA:
            let art = action.payload.results;
            console.log(action);
            return {artworks: [...art], next: action.payload.next, previous: action.payload.previous, count: action.payload.count, pages: Math.ceil(action.payload.count / 10)};
        case RECEIVE_ARTWORK_PAGED_API_DATA:
            let artwork = action.payload.results;
            console.log(action);
            return {artworks: [...artwork], next: action.payload.next, previous: action.payload.previous, count: action.payload.count, pages: Math.ceil(action.payload.count / 10)};
        }
    return state;
}

export default artwork;