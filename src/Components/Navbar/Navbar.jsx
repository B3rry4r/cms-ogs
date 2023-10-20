import React, { useState } from 'react';
import Logo from '../../Assets/logo.png';
import './Navbar.scss';
import { useEffect } from 'react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  useEffect(() => {
    const left = document.querySelector('.left-sticky');
    const right = document.querySelector('.right-sticky');
    const showNav = () => {
      if (window.scrollY > 220) {
        left.classList.add('scale');
        right.classList.add('scale');
      } else {
        left.classList.remove('scale');
        right.classList.remove('scale');
      }
    };

    window.addEventListener('scroll', showNav);

    return () => {
      window.removeEventListener('scroll', showNav);
    };
  }, []);


  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('disable-scroll');
    } else {
      document.body.classList.remove('disable-scroll');
    }

    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, [isMenuOpen]);

  const openMenu = () => {
    setisMenuOpen(!isMenuOpen)
    const navFull = document.querySelector('.full-navigation');
    navFull.classList.toggle('animate');

    gsap.from('.right-half', {
      delay: 1,
      right: 0
    })
  };



  return (
    <div className='navbar'>
      <div className="top-navigation">
        <div className="one">
          <img src={Logo} alt="OGS" />
        </div>
        <div className="two">
          <h1>O G S</h1>
        </div>
        <ul className="three">
          <li>
            <NavLink activeClassName='active' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/events'>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/projects'>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/executives'>
              Executives
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/OGS'>
              OGS
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="sticky-navigation">
        <div className="left-sticky">
          <div className="container">
            <h1>OGS.</h1>
          </div>
        </div>
        <div className="right-sticky" onClick={openMenu} >
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="full-navigation">
        <div className="right-half">
          <div className="top">
            <span>Navigation</span>
            <div className="line"></div>
          </div>
          <div className="middle">
            <ul>
              <li>
                <NavLink activeClassName='active' to='/' onClick={openMenu} >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/events' onClick={openMenu} >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/projects' onClick={openMenu} >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/executives' onClick={openMenu} >
                  Executives
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/about' onClick={openMenu} >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/OGS' onClick={openMenu} >
                  OGS
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Threads</li>
              <li>X</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar