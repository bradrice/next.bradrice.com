import { RECEIVE_CAROUSEL_API_DATA } from '../actions/carouselActions';

const initialState: any[] = [];

const carousel = (state:any = initialState, action:any ) => {
    switch(action.type){
        case RECEIVE_CAROUSEL_API_DATA:
            let carousel = action.payload;
            console.log("in carousel reducer:", action);
            return [...carousel.artwork];
    }
    return state;
}

export default carousel;