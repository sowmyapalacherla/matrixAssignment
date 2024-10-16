import React, { useState } from 'react';

import './index.css'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


    return (
        <div className='background'>
        <nav className='navbar-large'>
            
            <ul className='nav-links'>
                <li className="link">
                    <a href='#feature-section' className="link">Features</a>
                </li>
                <li className="link">
                    <a href='#about-section' className="link">Why us</a>
                </li>
                <li className="link">
                <a href='#tokenomics-section' className="link">Tokenmonics</a>
                </li>
                <li className="link">
                <a href='#roadmap-section' className="link">RoadMap</a>
                </li>
            </ul>
            <div className='logout-container'>
                <button className='logout'>Log In </button>
                <button className='white-paper'>White Paper</button>
            </div>
        </nav>
        {/* <nav className='navbar-small'>
            <h1 className='logo-mobile'>ETHAI</h1>
           
      

        </nav> */}
        <h1 className='heading'>When Innovation <br/>Meets <spam className="invest">Investment </spam></h1>
        <p className='description'>Empowering Trading Through Advanced Technology </p>
        <button className='button'>Open dApp</button>
        </div>
    )
}

export default Home