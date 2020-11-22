import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './home.css';
// import store from '../../state/store';
// import { connect } from 'react-redux';
import styles from './art.module.scss';
import Link from 'next/link';
// import { requestArtworkApiData, setSaleItem, requestArtworkPagedApiData } from '../../state/actions/artworkActions';
// import { ConnectedSaleInfo } from '../saleInfo/saleInfo';
// import ArtModal from '../common/modal/modal';
// import * as bootstrap from 'bootstrap/dist/js/bootstrap.js';
// import { ConnectedPager } from '../pager/pager'
import Layout from '../../components/layout';
import { getAllArtIds, getArtData } from '../../lib/art';
import { fetchArtworkData, fetchArtworkPagedData } from '../../lib/api';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns';
import SaleInfo from '../../components/saleinfo/saleinfo';

// const setCurrentSlide = (val:number) => store.dispatch({type: 'INCREMENT_SLIDE', payload: val});
interface IArtworkItem {
  "previous": string,
  "next": string,
  "artworks": [
      {
      "id": string,
      "title": string,
      "media": string,
      "description":string,
      "created":string,
      "width":string,
      "height": string,
      "artimage":any[],
      "sold":boolean,
      "price":string,
      "price_format":string,
      "forSale":boolean
    }
  ]
}

interface IArtworkProps {
  "artwork": IArtworkItem,
  requestArtworkApiData: any,
  requestArtworkPagedData: any
}

export default function ArtListPage({ artData }) {
  let artLoaded = artData.results.length > 0;
  console.log("In return:", artData.results);
  const [artWork, setArt] = useState(artData.results)
  let art;
      if(artLoaded) {
        art = (
          <Layout>
          <div className={styles.artHolder}>
            <div className="row">
              <div className="col-sm-12 col-md-4">
              <div className="form-conntrol filter-control">
              <label htmlFor="media" className="form-label">Filter by Media</label>
              <select className="form-select" id="meida-select" name="media">
                <option value="all">All</option>
                <option value="W">Watercolor</option>
                <option value="A">Acrylic</option>
                <option value="MM">Mixed Media</option>
                {/* <option value="O">Oil</option> */}
            </select>
            </div>
              </div>
            </div>
          </div>
          <div className={styles.artHolder}>
              <CardColumns>
                {(artWork || []).map(item => (
                    <Card className={styles.cardItem} key={item.id}>
                        <Card.Img src={item.artimage.gallery_large} alt={item.description}  />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                        <p>{item.description}</p>
                      <Link href={`/art/${item.id}`}>Detail</Link>
                        </Card.Text>
                      </Card.Body>      
                    </Card>       
                  ))}
              </CardColumns>
              </div>
              {/* <ConnectedPager /> */}
          </Layout>
        )
      } else {
        art = (
          <div>The server must be down currently. Please check back later.</div>
        )
      }
        return  (
          <div>
            {art}
          </div>
          )
      }

  const goToCheckout = () => {
    console.log("Go to link");
  }

  const setArt = async (e:any) => {
          const url = `${process.env.REACT_APP_API_SERVER}/api/artwork/media/?media=${e.target.value}`;
          console.log(e.target.value);
          const artData = await fetchArtworkPagedData(url);
          // e.persist(); //THE MAIN LINE THAT WILL SET THE VALUE
          // this.setState({value: e.target.value});
      }

export async function getStaticProps({ params }) {
  const artData = await fetchArtworkPagedData(`${process.env.NEXT_PUBLIC_REACT_APP_API_SERVER}/api/artwork/?page=1&page_size=15`);
  console.log("artwork:", artData);
  return {
    props: {
      artData
    }
  }
}
// class ArtPage extends React.Component <IArtworkProps> { 
//   constructor(props) {
//     super(props);
//     this.state = {
//         render: false //Set render state to false
//     }
// }
  
//     componentDidMount() {
//         this.props.requestArtworkApiData();
//         const toggler = document.getElementById("navbarSupportedContent");
//         toggler?.classList.remove('show');
//         setTimeout(function() { //Start the timer
//           this.setState({render: true}) //After 1 second, set render to true
//           }.bind(this), 2000);
//     }

//     launchArtModal = (imagesrc, imagetitle) => {
//       const options = {'imgagesrc': imagesrc, 'title': imagetitle}
//       // var myModalEl = document.getElementById('artModal')
//       const modal = new bootstrap.Modal(document.getElementById('artModal'), options) // Returns a Bootstrap modal instance
//       const myModal = document.getElementById('artModal');
//       // console.log(imagesrc, imagetitle);
//       const modalTitle = myModal!.querySelector('.modal-title');
//       modalTitle!.textContent = imagetitle;
//       let img = document.createElement("img");
//       img.setAttribute("src", imagesrc);
//       img.setAttribute("class", 'img-fluid');
//       const modalBody = myModal!.querySelector('.modal-body');
//       modalBody!.innerHTML = '';
//       modalBody!.appendChild(img);
//   // modalBodyInput.value = recipient
//       modal.show();
//     }

//     goToDetail = (id) => {
//       this.props.history.push(`/artdetail/${id}`);
//     }

//     fetchMore = () => {
//       console.log("fetch url:", this.props.next);
//       this.props.requestArtworkPagedData(this.props.next)
//     }

//     change = (e:any) => {
//       const url = `${process.env.REACT_APP_API_SERVER}/api/artwork/media/?media=${e.target.value}`;
//       console.log(e.target.value);
//       this.props.requestArtworkPagedData(url)
//       // e.persist(); //THE MAIN LINE THAT WILL SET THE VALUE
//       // this.setState({value: e.target.value});
//   }
  
//     render() {
//       let artwork;
//       let artLoaded = this.props.artwork.length > 0;
//       console.log(this.props.artwork);
//       if(artLoaded) {
//         artwork = (
//           <div className="art">
//             <div className="row">
//               <div className="col-sm-12 col-md-4">
//               <div className="form-conntrol filter-control">
//               <label htmlFor="media" className="form-label">Filter by Media</label>
//               <select className="form-select" id="meida-select" name="media" onChange={this.change.bind(this)}>
//                 <option value="all">All</option>
//                 <option value="W">Watercolor</option>
//                 <option value="A">Acrylic</option>
//                 <option value="MM">Mixed Media</option>
//                 {/* <option value="O">Oil</option> */}
//             </select>
//             </div>
//               </div>
//             </div>
            
            
//             <div className="row" data-masonry='{"percentPosition": true }'>
//               {(this.props.artwork || []).map(item => (
//                 <div className="col-sm-6 col-lg-4" key={item.id} >
//                   <div className="card m-1">
//                     <div className="card-img-top">
//                       <img className="img-fluid d-block mx-auto" onClick={() => {
//                         return this.goToDetail(item.id)
//                       }} src={item.artimage.gallery_large} alt={item.description}  />
//                     </div>
//                     <div className="card-body">
//                       <h5 className="card-title">{item.title}</h5>
//                       <div className="details">
//                       <p>{item.description}</p>
//                       <p>Size: {item.width} x {item.height}<br />
//                       {item.media}</p>
//                       {item.sold ? <p className="sold">Sold</p> : ""}
//                       <ConnectedSaleInfo forSale={item.forSale} price={item.price} price_format={item.price_format} description={item.description} title={item.title} id={item.id} isSold={item.isSold} />
//                       </div>
//                   </div>
//                   </div>
//                 </div>                  
//                 ))}
//             </div>
//             <ConnectedPager />
//           </div>
//         )
//       } else {
//         if(this.state.render) {
//         artwork = (
//           <div>The server must be down currently. Please check back later.</div>
//         )
//         } else {
//           artwork = <div></div>
//         }
//       }
//         return  (
//           <div>
//             {artwork}
//           </div>
//           )
//       } 
//     };

// const mapStateToProps = (state /*, ownProps*/) => {
//   return {
//     artwork: state.artwork.artworks,
//     next: state.artwork.next,
//     previous: state.artwork.previous
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//       requestArtworkApiData: () => {
//         dispatch(requestArtworkApiData());
//       },
//       requestArtworkPagedData: (url:string) => {
//         console.log('getting ready to dispatch with this url', url);
//         dispatch(requestArtworkPagedApiData(url));
//       }
//   };
// }

// export const ConnectedArtPage = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ArtPage)

// export default HomePage;
