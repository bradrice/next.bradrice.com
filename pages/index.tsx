import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React from 'react';
// import './home.scss';
import Carousel from '../components/carousel/carousel';
import Layout from '../components/layout';
import { requestCarouselApiData } from '../state/actions/carouselActions';
import { connect } from 'react-redux';

// const setCurrentSlide = (val:number) => store.dispatch({type: 'INCREMENT_SLIDE', payload: val});

interface IArtworkItem {
  "id": string,
  "title": string,
  "media": string,
  "description":string,
  "created":string,
  "width":string,
  "height": string,
  "artimage":string,
  "sold":boolean,
  "price":string,
  "forSale":boolean
}


interface IArtworkProps {
  "artwork": IArtworkItem[],
  requestCarouselApiData: any
}


class HomePage extends React.Component <IArtworkProps> { 

  render(){
    return (
      <Layout>
      <div className="row">
        <div className="col-sm-12">
          <div className="HomePage">
            <div className="mt-1">
            <Carousel />
            </div>
        </div>
        <div className="col-sm-8 offset-sm-2">
          <div className="homecopy">
          <p className="text-center">View more of my <Link href="/art"><a className="btn btn-primary">Artwork</a></Link></p>
          <p>My artwork is all original, one of a kind pieces unless otherwise noted. I paint primarily in watercolor and or acrylic. I explore a number of subject matter as well as abstract art.</p>
          </div>
        </div>
        </div>
      </div>
      </Layout>
    )
  }
};

export default HomePage;

