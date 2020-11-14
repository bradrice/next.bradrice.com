/// <reference path="../../styles/carousel-wrapper-styles.ts" />

import React from "react";
// import { Link } from 'react-router-dom';
// import styles from '../../styles/carousel-wrapper-styles';
import {ISlide} from '../../state/reducers/images-reducer';
import { connect } from 'react-redux';
import { advanceSlide, recedeSlide } from '../../state/actions/carouselActions';
import { fetchCarouselData } from '../../lib/api';
// import './carousel.scss';
// import altimage from '/images/alt-front.jpg'

// import { connect } from "react-redux";
// import { fetchProducts } from "../../state/actions/productActions";

// const Carousel = (props:any) => {
//     return (
//         <div>Carousel here</div>
//     )
// }

const Carousel = (props:any) => {
    // const clickHandler = (e:any) => { console.log('hanlder', e) }
    console.log(props.currentSlide);
    

    const calcWidth = () => {
        return props.visibleSlides.reduce(widthReducer, 0);
    }

    const widthReducer = (accumulator:number, item:ISlide) => {
            return accumulator = accumulator + item.imgWidth;
    }

    const carouselLoaded = props.visibleSlides.length > 0;
    let carousel;
      if (!carouselLoaded){
        carousel = (
          <div className="alt-holder">
            <img src='/images/alt-front.jpg' className="img-fluid" alt="carousel didn't load" />
            <p>If you are seeing this, the server is not working properly right now. Images are served up by another service and it may be down. This is a painting I did, but is showing as an alternate to what you would normally see.</p>
          </div>
        )
      } else {
        carousel = (
          <div className="holder">
          <div className="carousel-wrapper">
            <div id="carouselHome" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselHome" data-slide-to="0" className="active"></li>
                <li data-target="#carouselHome" data-slide-to="1"></li>
                <li data-target="#carouselHome" data-slide-to="2"></li> 
              </ol>
              <div className="carousel-inner">
              {props.visibleSlides.map((slide:any, index:Number) => {
                            let isActive = index === 0 ? true: false;
                            return (
                              <div className={`carousel-item ${isActive ? "active": ""}`} key={slide.id} >
                                <img src={slide.artimage.gallery_large} className="carousel-image" data-element={index} alt="carousel img" style={styles.carouselImg} id={slide.title} />
                              </div>
                            )
                    })}
              </div>
              <a className="carousel-control-prev" href="#carouselHome" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselHome" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          </div>
        )
      }

    return (
      <div>
        {carousel}
      </div>
      
      
    )
};

export async function getStaticProps({ }) {
  const carouselData = fetchCarouselData ()
  return {
    props: {
      carouselData
    }
  }
}



export default Carousel;
