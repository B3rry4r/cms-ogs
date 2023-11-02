import React from 'react';
import './Footer.scss';
import logo from '../../Assets/logo.png';

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
                            <li><a href="https://cmsogsamericas.org/">OGS Americas Website</a></li>
                            <li><a href="http://www.cms-ogs-uk.org/">OGS UK & Europe Website</a></li>
                            <li><a href="http://www.//cmsgrammarschool.org/">CMS Grammar School Website</a></li>
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
                    <span>Created By Excel</span>
            </div>
                <div className="f-filter circle-i"></div>
                <div className="f-filter circle-iii"></div>
                <img src={logo} alt="ogs-logo" />
        </div>
    )
}

export default Footer