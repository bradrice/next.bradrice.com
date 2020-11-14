import { SET_SALE_ITEM } from '../actions/artworkActions';

const initialState:any = {};

const saleitem = (state:any = initialState, action:any ) => {
    switch(action.type){
        case SET_SALE_ITEM:
            return {...action.payload};
    }
    return state;
}

export default saleitem;