import React from 'react';
import headerStyles from './header.module.scss';
import NavLink from '../link/link';
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" role="navigation">
        <button className="navbar-toggler" id="navbartoggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse top-menu" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><NavLink href="/"><a className="nav-link">Home</a></NavLink></li>
            <li className="nav-item"><NavLink href="/about"><a className="nav-link">About</a></NavLink></li>
            <li className="nav-item"><NavLink href="/art"><a className="nav-link">Art</a></NavLink></li>
            {/* <li className="nav-item"><Link href="/resume" className="nav-link" activeStyle={activeStyle}>Resume</Link></li> */}
            {/* <li className="nav-item"><Link href="/portfolio" className="nav-link" activeStyle={activeStyle}>Portfolio</Link></li> */}
            <li className="nav-item"><NavLink href="/contact"><a className="nav-link">Contact</a></NavLink></li>

          </ul>
        </div>
      </nav>
    <div className={headerStyles.logo}>
      <img src="/images/BR1-bw.png" alt="Brad Rice" className={headerStyles.logoImg} /> <div className={headerStyles.logoName}>Brad Rice | Art & Technology</div>
    </div>
    </header>
    
  )
}

export default Header;