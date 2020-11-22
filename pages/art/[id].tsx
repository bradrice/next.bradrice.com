import Layout from '../../components/layout';
import { getAllArtIds, getArtData } from '../../lib/art';
// import { loadStripe } from '@stripe/stripe-js';
// import {Elements} from '@stripe/react-stripe-js';
import SaleInfo from '../../components/saleinfo/saleinfo';
import Card from 'react-bootstrap/Card';

// const stripePromise = loadStripe('pk_test_AuwxcUOjPDUHbXyODkwDQ74r');


export default function ArtDetail({ artData }) {

    let artwork = (
        <div className="row">
          <div className="col">
            <Card className="card m-1">
            {artData.artimage &&
              <Card.Img src={artData.artimage.gallery_large} alt={artData.description}  />
            }
              <Card.Body>
                <h5 className="card-title">{artData.title}</h5>
                <div className="details">
                  <p>{artData.description}</p>
                  <p>Size: {artData.width} x {artData.height}<br />
                  {artData.media}</p>
                        {artData.sold ? <p className="sold">Sold</p> : ""}
                        {!artData.sold && artData.forSale ? <div>{artData.price_format}</div> : ""}
                        {artData.forSale ? <SaleInfo artitem={artData}/> : <div>Not for sale</div>}
                </div> 
              </Card.Body> 
            </Card>
          </div>
        </div>
      )
      return <Layout>{artwork}</Layout>

        }

export async function getStaticPaths() {
    const paths = await getAllArtIds();
    console.log(paths);
    return {
      paths,
      fallback: false
    }
  }
  
  export async function getStaticProps({ params }) {
    const artData = await getArtData(params.id);
    console.log("artwork:", artData);
    return {
      props: {
        artData
      }
    }
  }
  
