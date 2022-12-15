import Head from 'next/head'
import styles from '../styles/Portfolio.module.scss'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { NextPageContext } from 'next'
import { env } from 'process';
import Card from 'react-bootstrap/Card';
import { CustomModal } from '../components/modal/custom-modal';
import { getStaticProps } from '.';
import Button from 'react-bootstrap/Button'


export default function PortfolioPage() {

    const [showModal, setShowModal] = useState<boolean>();
    const [modalImage, setModalImage] = useState<string>('');
    const [modalTitle, setModalTitle] = useState<string>('');

    const closeModal = () => setShowModal(false);

    const handleClick = (image, title) => {
        setModalTitle(title);
        setModalImage(image); 
        setShowModal(true);
    }

    return (
      <Layout>
      <div className="row">
        <div className="col-sm-12">
          <div className={styles.PortfolioPage}>
            <div className="mt-1 mb-2">
            Portfolio
            </div>
          </div>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-12">
        <div id="body">
		<div className="row">
            <h2 className="large-12 columns">CodeLogic application</h2>
		</div>

        <div className="row">

<div className="col-sm-4">
    <Card className={styles.cardItem}>
    <Card.Img className={styles.cardImage} src="images/portfolio/changeRequestsPage.png" />
        <Card.Body>
            <p className="dscr">Change Requests from Github, in Codelogic</p>
        </Card.Body>
    </Card>
    </div>

    <div className="col-sm-4">
    <Card className={styles.cardItem}>
    <Card.Img className={styles.cardImage} src="images/portfolio/multi-select-explorer.png" />
        <Card.Body>
            <p className="dscr">Custom built search, with multi-select in CodeLogic.</p>
        </Card.Body>
    </Card>
    </div>

    <div className="col-sm-4">
    <Card className={styles.cardItem}>
    <Card.Img className={styles.cardImage} src="images/portfolio/context-manu.png" />
        <Card.Body>
            <p className="dscr">Custom built context menu inside of CodeLogic app.</p>
        </Card.Body>
    </Card>
    </div>
    </div>
        

<div className="row">

<div className="col-sm-4">
    <Card className={styles.cardItem}>
    <Card.Img className={styles.cardImage} src="images/portfolio/UA_Home_thumb.jpg" />
        <Card.Body>
            <p className="dscr">University of Akron Home page, responsive for mobile devices</p>
        </Card.Body>
    </Card>
    </div>

    <div className="col-sm-4">
    <Card className={styles.cardItem}>
    <Card.Img className={styles.cardImage} src="images/portfolio/curr_guide_thumb.jpg" />
        <Card.Body>
            <p className="dscr">Custom built responsive site for Prospective students visiting UA searching for majors offered.</p>
        </Card.Body>
    </Card>
    </div>

    <div className="col-sm-4">
    <Card className={styles.cardItem}>
    <Card.Img className={styles.cardImage} src="images/portfolio/curriculum-search_thumb.png" />
        <Card.Body>
            <p className="dscr">Custom built responsive site for Prospective students visiting UA searching for classes available.</p>
        </Card.Body>
    </Card>
    </div>
    </div>



<div className="row">
    <h2 className="large-12 columns">Print collateral advertising</h2>
</div>

<div className="row">
    <div className="col-sm-4">
    <Card className={styles.cardItem}>
        <Card.Img className={styles.cardImage} src="images/portfolio/ncb_promo_thumb.jpg" />
        <Card.Body>
            <p className="dscr">National City bank offer for car loans that gave away gas gift cards when taking out a loan. Photoshop technique.</p>
            <Button variant="primary" size="sm" onClick={()=>{
                handleClick('ncb_promo.jpg', 'Photoshop technique')
                }}>View Larger Image</Button>
        </Card.Body>
    </Card>
    </div>

    <div className="col-sm-4">
    <Card className={styles.cardItem}>
        <Card.Img className={styles.cardImage} src="images/portfolio/uh_laurelwood_1_thumb.jpg" />
        <Card.Body>
        <p className="dscr">Brochure cover to promote University Health Systems Laurelwood Hospital pyschological services. Photoshop technique.</p>
        <Button variant="primary" size="sm" onClick={()=>{
                handleClick('uh_laurelwood_1.jpg', 'Photoshop technique')
                }}>View Larger Image</Button>
        </Card.Body>
    </Card>
    </div>

    <div className="col-sm-4">
    <Card className={styles.cardItem}>
        <Card.Img className={styles.cardImage} src="images/portfolio/gl_science_thumb.jpg" />
        <Card.Body>
        <p className="dscr">The Annual Report, 1999 for Great Lakes Science Center.</p>
        <Button variant="primary" size="sm" onClick={()=>{
                handleClick('gl_science.jpg', "Brochure design and layout")
                }}>View Larger Image</Button>
        </Card.Body>
    </Card>
        </div>
</div>

<div className="row">
    <h2 className="large-12 columns">Identity</h2>
</div>

<div className="row">
    <div className="col-sm-4">
        <Card className={styles.cardItem}>
            <Card.Img className={styles.cardImage} src="images/portfolio/lodi_chamber_thumb.png" />
            <Card.Body>
            <p className="dscr">Logo design - Village of Lodi Chamber of Commerce</p>
            <Button variant="primary" size="sm" onClick={()=>{
                handleClick('lodi_chamber.png', "Logo design")
                }}>View Larger Image</Button>
            </Card.Body>
        </Card>				
    </div>

    <div className="col-sm-4">
        <Card className={styles.cardItem}>
            <Card.Img className={styles.cardImage} src="images/portfolio/mt25.png" />
            <Card.Body>
            <p className="dscr">Logo design - Faith based social services.</p>
            <Button variant="primary" size="sm" onClick={()=>{
                handleClick('mt25.png', "Logo design")
                }}>View Larger Image</Button>
            </Card.Body>
        </Card>	      
   </div>

    <div className="col-sm-4">
        <Card className={styles.cardItem}>
            <Card.Img className={styles.cardImage} src="images/portfolio/online_learners_thumb.jpg" />
            <Card.Body>
            <p className="dscr">Icon - The University of Akron Online Learners web application.</p>
            <Button variant="primary" size="sm" onClick={()=>{
                handleClick('online_learners.jpg', "Icon design")
                }}>View Larger Image</Button>
            </Card.Body>
        </Card>	
    </div>
</div>

<div className="row">
	<div className="col-sm-4">
        <Card className={styles.cardItem}>
            <Card.Img className={styles.cardImage} src="images/portfolio/quickpass_thumb.jpg" />
            <Card.Body>
            <p className="dscr">Icon design - Quickpass Macintosh application</p>
            <Button variant="primary" size="sm" onClick={()=>{
                handleClick('quickpass.jpg', "Icon design")
                }}>View Larger Image</Button>
            </Card.Body>
        </Card>	
    </div>
				
    <div className="col-sm-4">
        <Card className={styles.cardItem}>
            <Card.Img className={styles.cardImage} src="images/portfolio/Z-alert_500.png" />
            <Card.Body>
            <p className="dscr">Icon design - Z-Alert text messaging application</p>
            <Button variant="primary" size="sm" onClick={()=>{
                handleClick('Z-alert_500.png', "Icon design")
                }}>View Larger Image</Button>
            </Card.Body>
        </Card>	

    </div>
			<div className="col-sm-4">
            <Card className={styles.cardItem}>
            <Card.Img className={styles.cardImage} src="images/portfolio/golden_ideas_thumb.jpg" />
            <Card.Body>
            <p className="dscr">Icon design - Golden Ideas web application</p>
            <Button variant="primary" size="sm" onClick={()=>{
                handleClick('golden_ideas.jpg', "Icon design")
                }}>View Larger Image</Button>
            </Card.Body>
        </Card>
    </div>

    <div className="row">
    <h2 className="large-12 columns">Mobile App Development</h2>
    </div>

    <div className="row">
        <div className="col-sm-4">
            <Card className={styles.cardItem}>
                <Card.Img className={styles.cardImage} src="images/portfolio/tumobile-loginscreen.jpg" />
                <Card.Body>
                <p className="dscr">Mobile app - Tooling U-SME class player</p>
                <Button variant="primary" size="sm" onClick={()=>{
                    handleClick('tumobile-loginscreen.jpg', "Mobile app development")
                    }}>View Larger Image</Button>
                </Card.Body>
            </Card>				
        </div>

        <div className="col-sm-4">
            <Card className={styles.cardItem}>
                <Card.Img className={styles.cardImage} src="images/portfolio/tumobile-studentlist.jpg" />
                <Card.Body>
                <p className="dscr">Mobile app - Tooling U-SME class player</p>
                <Button variant="primary" size="sm" onClick={()=>{
                    handleClick('tumobile-studentlist.jpg', "Mobile app development")
                    }}>View Larger Image</Button>
                </Card.Body>
            </Card>				
        </div>

        <div className="col-sm-4">
            <Card className={styles.cardItem}>
                <Card.Img className={styles.cardImage} src="images/portfolio/tumobile-class.jpg" />
                <Card.Body>
                <p className="dscr">Mobile app - Tooling U-SME class player</p>
                <Button variant="primary" size="sm" onClick={()=>{
                    handleClick('tumobile-class.jpg', "Mobile app development")
                    }}>View Larger Image</Button>
                </Card.Body>
            </Card>				
        </div>
    </div>
</div>
</div>
</div>
</div>
<CustomModal show={showModal} image={modalImage} title={modalTitle} close={closeModal}/>
</Layout>
    )
};

// export function getStaticProps({ params }) {
//   // console.log("artwork:", artitem);
//   return {
//     props: {
//       image: getState(image),
//       show: getState(show)
//     }
//   }
// }

