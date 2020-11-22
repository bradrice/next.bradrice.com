import React from 'react';
import Layout from '../components/layout'


class AboutPage extends React.Component  {  

  componentDidMount() {
    const toggler = document.getElementById("navbarSupportedContent");
    toggler?.classList.remove('show');
  }
  
  render (){
    return (
    <Layout>
    <div className="col-sm-12">
      <div className="m-4">
        <h1>About me</h1>
        <p>I have been an artist all of my life, so it was natural for me to study art at <a href="https://www.uakron.edu">The University of Akron</a>. As a senior, I completed a work study in New York City at Franklin Furnace art gallery.</p>
        <p>After returning to Ohio, I worked for a number of advertising agencies as a freelancer and eventually landed a job as an illustrator for a local newspaper. While working for <a href="http://www.hkmdm.com">HKM Direct Market Communications</a>, a marketing company. I taught myself web design there where I built a web to digital print application. This experience with my love for art and design opened a door for me to return to The University of Akron as a web designer.</p>
        <p>I currently work for <a href="https://www.toolingu.com/">Tooling U-SME</a> as a Front End Web Developer</p>
        <p>I am married with two kids. I love my family and enjoy doing things with them and teaching them about the world of computers. My wife is the Executive Director at <a href="http://www.leadershipmedinacounty.com">Leadership Medina County</a>. Together we grow in knowledge and share our love for business, technolgy and working to better our world.</p>
        <p>I live in Lodi, Ohio,</p>
        {/* <h3>The details</h3> */}
        {/* <ul class="pbox">
          <li><a href="/resume">My resumé</a></li>
          <li><a href="/portfolio">A portfolio of my web work</a></li>
        </ul> */}
      </div>
  </div>
  </Layout>
    )}
  };

export default AboutPage;
