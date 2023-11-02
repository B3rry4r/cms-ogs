import React from 'react';
import './Contact.scss';
import Logo from '../../Assets/logo.png';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
  const navigate = useNavigate()

  return (
    <div className='contact' >
      <div className="contents">
        <div className="c-top">
          <div className="left">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
          </div>
          <div className="right">
            <h1>CONTACT THE OGS</h1>
            <div className="contact-btn">
              <a href="tel:+234XXXXXXX">+234XXXXXXX</a>
              <a href="mailto:contact@cmsogs.ng">Contact@cmsogs.com</a>
            </div>
          </div>
        </div>
        <div className="c-bottom">
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>X</li>
          </ul>
        </div>
        <span onClick={() => { navigate('/') }} >Home</span>
      </div>
    </div>
  )
}

export default Contact