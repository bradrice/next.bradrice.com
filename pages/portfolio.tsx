import Head from 'next/head'
import styles from '../styles/Portfolio.module.scss'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { NextPageContext } from 'next'
import { env } from 'process';
import Card from 'react-bootstrap/Card';
import { CustomModal } from '../components/modal/custom-modal';
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
            <h1 className="mt-1 mb-2">
            Portfolio
            </h1>
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
    <Card.Img className={styles.cardImage} onClick={()=>{
                handleClick('changeRequestsPage.png', 'React development')
                }} src="images/portfolio/changeRequestsPage.png" />
        <Card.Body>
            <p className={styles.dscr}>React code: Change Requests from Github, in Codelogic</p>
        </Card.Body>
    </Card>
    </div>

    <div className="col-sm-4">
    <Card className={styles.cardItem}>
    <Card.Img className={styles.cardImage} onClick={()=>{
                handleClick('multi-select-explorer.png', 'React development')
                }} src="images/portfolio/multi-select-explorer.png" />
        <Card.Body>
            <p className={styles.dscr}>React custom built search, with multi-select in CodeLogic.</p>
        </Card.Body>
    </Card>
    </div>

    <div className="col-sm-4">
    <Card className={styles.cardItem}>
    <Card.Img className={styles.cardImage} onClick={()=>{
                handleClick('context-manu.png', 'React development')
                }} src="images/portfolio/context-manu.png" />
        <Card.Body>
            <p className={styles.dscr}>React development CodeLogic app.</p>
        </Card.Body>
    </Card>
    </div>
    </div>

    <div className="row">
    <h2 className="large-12 columns">Mobile App Development</h2>
    </div>

    <div className="row">
        <div className="col-sm-4">
            <Card className={styles.cardItem}>
                <Card.Img className={styles.cardImage} onClick={()=>{
                    handleClick('tumobile-loginscreen.jpg', "Mobile app development")
                    }} src="images/portfolio/tumobile-loginscreen.jpg" />
                <Card.Body>
                <p className={styles.dscr}>Mobile app - Tooling U-SME class player</p>
                </Card.Body>
            </Card>				
        </div>

        <div className="col-sm-4">
            <Card className={styles.cardItem}>
                <Card.Img className={styles.cardImage} onClick={()=>{
                    handleClick('tumobile-studentlist.jpg', "Mobile app development")
                    }} src="images/portfolio/tumobile-studentlist.jpg" />
                <Card.Body>
                <p className={styles.dscr}>Mobile app - Tooling U-SME class player</p>
                </Card.Body>
            </Card>				
        </div>

        <div className="col-sm-4">
            <Card className={styles.cardItem}>
                <Card.Img className={styles.cardImage} onClick={()=>{
                    handleClick('tumobile-class.jpg', "Mobile app development")
                    }} src="images/portfolio/tumobile-class.jpg" />
                <Card.Body>
                <p className={styles.dscr}>Mobile app - Tooling U-SME class player</p>
                </Card.Body>
            </Card>				
        </div>
    </div>
    <div className="row">
    <h2 className="large-12 columns">Web Development</h2>
    </div>

<div className="row">

<div className="col-sm-4">
    <Card className={styles.cardItem}>
    <Card.Img className={styles.cardImage} onClick={()=>{
                handleClick('UA_Home.png', 'React development')
                }} src="images/portfolio/UA_Home_thumb.jpg" />
        <Card.Body>
            <p className={styles.dscr}>University of Akron Home page, responsive for mobile devices</p>
        </Card.Body>
    </Card>
    </div>

    <div className="col-sm-4">
    <Card className={styles.cardItem}>
    <Card.Img className={styles.cardImage} onClick={()=>{
                handleClick('curr_guide.jpg', 'HTML')
                }} src="images/portfolio/curr_guide_thumb.jpg" />
        <Card.Body>
            <p className={styles.dscr}>Custom built responsive site for Prospective students visiting UA searching for majors offered.</p>
        </Card.Body>
    </Card>
    </div>

    <div className="col-sm-4">
    <Card className={styles.cardItem}>
    <Card.Img className={styles.cardImage} onClick={()=>{
                handleClick('curriculum-search.png', 'Angular JS')
                }} src="images/portfolio/curriculum-search_thumb.png" />
        <Card.Body>
            <p className={styles.dscr}>Custom built responsive site for Prospective students visiting UA searching for classes available.</p>
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
        <Card.Img className={styles.cardImage} onClick={()=>{
                handleClick('ncb_promo.jpg', 'Photoshop technique')
                }} src="images/portfolio/ncb_promo_thumb.jpg" />
        <Card.Body>
            <p className={styles.dscr}>National City bank offer for car loans that gave away gas gift cards when taking out a loan. Photoshop technique.</p>
        </Card.Body>
    </Card>
    </div>

    <div className="col-sm-4">
    <Card className={styles.cardItem}>
        <Card.Img className={styles.cardImage} onClick={()=>{
                handleClick('uh_laurelwood_1.jpg', 'Photoshop technique')
                }} src="images/portfolio/uh_laurelwood_1_thumb.jpg" />
        <Card.Body>
        <p className={styles.dscr}>Brochure cover to promote University Health Systems Laurelwood Hospital pyschological services. Photoshop technique.</p>
        </Card.Body>
    </Card>
    </div>

    <div className="col-sm-4">
    <Card className={styles.cardItem}>
        <Card.Img className={styles.cardImage} onClick={()=>{
                handleClick('gl_science.jpg', "Brochure design and layout")
                }} src="images/portfolio/gl_science_thumb.jpg" />
        <Card.Body>
        <p className={styles.dscr}>The Annual Report, 1999 for Great Lakes Science Center.</p>
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
            <Card.Img className={styles.cardImage} onClick={()=>{
                handleClick('lodi_chamber.png', "Logo design")
                }} src="images/portfolio/lodi_chamber_thumb.png" />
            <Card.Body>
            <p className={styles.dscr}>Logo design - Village of Lodi Chamber of Commerce</p>
            </Card.Body>
        </Card>				
    </div>

    <div className="col-sm-4">
        <Card className={styles.cardItem}>
            <Card.Img className={styles.cardImage} onClick={()=>{
                handleClick('mt25.png', "Logo design")
                }} src="images/portfolio/mt25.png" />
            <Card.Body>
            <p className={styles.dscr}>Logo design - Faith based social services.</p>
            </Card.Body>
        </Card>	      
   </div>

    <div className="col-sm-4">
        <Card className={styles.cardItem}>
            <Card.Img className={styles.cardImage} onClick={()=>{
                handleClick('online_learners.jpg', "Icon design")
                }} src="images/portfolio/online_learners_thumb.jpg" />
            <Card.Body>
            <p className={styles.dscr}>Icon - The University of Akron Online Learners web application.</p>
            </Card.Body>
        </Card>	
    </div>
</div>

<div className="row">
	<div className="col-sm-4">
        <Card className={styles.cardItem}>
            <Card.Img className={styles.cardImage} onClick={()=>{
                handleClick('quickpass.jpg', "Icon design")
                }} src="images/portfolio/quickpass_thumb.jpg" />
            <Card.Body>
            <p className={styles.dscr}>Icon design - Quickpass Macintosh application</p>
            </Card.Body>
        </Card>	
    </div>
				
    <div className="col-sm-4">
        <Card className={styles.cardItem}>
            <Card.Img className={styles.cardImage} onClick={()=>{
                handleClick('Z-alert_500.png', "Icon design")
                }} src="images/portfolio/Z-alert_500.png" />
            <Card.Body>
            <p className={styles.dscr}>Icon design - Z-Alert text messaging application</p>
            </Card.Body>
        </Card>	

    </div>
			<div className="col-sm-4">
            <Card className={styles.cardItem}>
            <Card.Img className={styles.cardImage} onClick={()=>{
                handleClick('golden_ideas.jpg', "Icon design")
                }} src="images/portfolio/golden_ideas_thumb.jpg" />
            <Card.Body>
            <p className={styles.dscr}>Icon design - Golden Ideas web application</p>
            </Card.Body>
        </Card>
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

