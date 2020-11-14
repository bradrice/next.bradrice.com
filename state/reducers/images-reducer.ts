// import * as React from 'react';
// import * as redux from 'redux';

const ADD_SLIDES = 'ADD_SLIDES';
const INCREMENT_SLIDE = 'INCREMENT_SLIDE';
const DECREMENT_SLIDE = 'DECREMENT_SLIDE';


interface IState {
    slides: ISlide[];
    currentSlide: number;
    visibleSlides: ISlide[];
}

export interface ISlide {
    id: number;
    filename: string;
    caption: string;
    imgWidth: number;
    imgHeight: number;
    showincarousel: boolean;
}

const initialslides = [
    {
        "id": 1,
        "filename": "wall1.jpg",
        "caption": "Item one caption. A guy and his computer",
        "imgWidth": 800,
        "imgHeight": 533,
        "showincarousel": true
    },
    {
        "id": 2,
        "filename": "wall2.jpg",
        "caption": "Item two caption.",
        "imgWidth": 800,
        "imgHeight": 533,
        "showincarousel": true
    },
    {
        "id": 3,
        "filename": "wall3.jpg",
        "caption": "Item three caption.",
        "imgWidth": 800,
        "imgHeight": 704,
        "showincarousel": false
    },
    {
        "id": 4,
        "filename": "wall4.jpg",
        "caption": "Item four caption.",
        "imgWidth": 800,
        "imgHeight": 450,
        "showincarousel": true
    },
    {
        "id": 5,
        "filename": "wall5.jpg",
        "caption": "Item five caption.",
        "imgWidth": 800,
        "imgHeight": 533,
        "showincarousel": true
    },
    {
        "id": 6,
        "filename": "wall6.jpg",
        "caption": "Item six caption.",
        "imgWidth": 800,
        "imgHeight": 532,
        "showincarousel": true
    }
]

const initialState:IState = {
    slides: initialslides,
    currentSlide: 0,
    visibleSlides: initialslides.filter(item=>item.showincarousel)
}

const images = (state:any = initialState, action:any ) => {
    switch(action.type){
        case 'ADD_SLIDES':
        return {...state, slides: state.slides.concat(action.payload)};
        case 'INCREMENT_SLIDE':
            if(state.currentSlide < state.visibleSlides.length-1) {
                console.log("Increment below length");
                return {...state, currentSlide: state.currentSlide + 1};
            } else {
                console.log("Increment above length");
                return {...state, currentSlide: 0};
            }
            
        case 'DECREMENT_SLIDE':
            console.log(state.currentSlide);
            if(state.currentSlide > 0) {
                console.log("Decrement, ", state.currentSlide - 1);
                return {...state, currentSlide: state.currentSlide - 1};
            } else {
                console.log("Decrement, ", state.visibleSlides.length-1);
                return {...state, currentSlide: state.visibleSlides.length-1};
            }
    }    
    return state;
}

export default images;
