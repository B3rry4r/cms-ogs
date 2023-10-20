import React from 'react';
import './Footer.scss';
import logo from '../../Assets/logo1.svg';

const Footer = () => {
    return (
        <div className='footer' >
            <div className="content-p">

                <div className="top">
                    <h1>OLD GRAMMARIANS SOCIETY</h1>
                </div>
                <div className="middle">
                    <div className="f-container">
                        <span>Navigation</span>
                        <ul>
                            <li className='active' >Home</li>
                            <li>Project</li>
                            <li>Events</li>
                            <li>Executives</li>
                            <li>About</li>
                            <li>OGS</li>
                        </ul>
                    </div>
                    <div className="f-container">
                        <span>Connect</span>
                        <ul>
                            <li>OGS Americas Website</li>
                            <li>OGS UK & Europe Website</li>
                            <li>CMS Grammar School Website</li>
                            <li>View our Ionic Structures</li>
                        </ul>
                    </div>
                    <div className="f-container">
                        <span>Contact Us</span>
                        <ul>
                            <li>+(234)-XXX-XXX-XX</li>
                            <li>contact@cmsogs.ng</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom">
                    <span>Copyright © 2023 Old Grammarians Society</span>
                    <span>Code By Excel</span>
            </div>
                <div className="f-filter circle-i"></div>
                <div className="f-filter circle-iii"></div>

                <img src={logo} alt="ogs-logo" />
        </div>
    )
}

export default Footer