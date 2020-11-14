export const REQUEST_CAROUSEL_API_DATA = 'REQUEST_CAROUSEL_API_DATA';
export const RECEIVE_CAROUSEL_API_DATA = 'RECEIVE_CAROUSEL_API_DATA';

export const receiveCarouselApiData =  data => ({type: RECEIVE_CAROUSEL_API_DATA, payload: data});
export const requestCarouselApiData =  () => ({type: REQUEST_CAROUSEL_API_DATA});

export const advanceSlide = () => {
    return {
        type: 'INCREMENT_SLIDE'
    }
}

export const recedeSlide = () => {
    return {
        type: 'DECREMENT_SLIDE'
    }
}