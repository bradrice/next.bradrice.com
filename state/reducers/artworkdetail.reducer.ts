import { RECEIVE_ARTWORK_DETAIL_API_DATA} from '../actions/artworkActions';

const initialState = {}

const artworkdetail = (state:any = initialState, action:any ) => {
    switch(action.type){
        case RECEIVE_ARTWORK_DETAIL_API_DATA:
            let artworkdetail = action.payload;
            // console.log(artworkdetail);
            return {...artworkdetail};
        }
    return state;
}

export default artworkdetail;