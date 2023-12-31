import React, { useState } from 'react';
import Logo from '../../Assets/logo.png';
import './Navbar.scss';
import { useEffect } from 'react';
import gsap from 'gsap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  useEffect(() => {
    const token = user?.token
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogOut()
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location, user?.token])



  const handleLogOut = () => {
    localStorage.clear('profile');
    window.location = '/sign-in'
  }


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
        {user && (
          <div className="one">
            {user?.result?.name.slice(0, 1)}
            {/* <img src={Logo} alt="OGS" /> */}
          </div>
        )}
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
          {
            user && (
              <li>
                <NavLink activeClassName='active' to='/nominees'>
                  Nominee's
                </NavLink>
              </li>
            )
          }
          <li>
            <NavLink activeClassName='active' to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/contact-us'>
              Contact-Us
            </NavLink>
          </li>
          {/* <li>
            <NavLink activeClassName='active' to='/OGS'>
              OGS
            </NavLink>
          </li> */}
          {
            user ? (
              <li className='sign-out' onClick={handleLogOut} >
                Sign-Out
              </li>
            ) : (
              <li className='sign'>
                <NavLink activeClassName='active' to='/sign-up'>
                  Sign-Up
                </NavLink>
                <span className='sign-in-btn' onClick={() => { navigate('/sign-in') }} >Sign-In</span>
              </li>
            )
          }

        </ul>
      </div>
      <div className="sticky-navigation">
        <div className="left-sticky">
          <div className="container">
            <img src={Logo} alt="logo" />
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
              {
                user && (
                  <li>
                    <NavLink activeClassName='active' to='/nominees' onClick={openMenu} >
                      Nominee's
                    </NavLink>
                  </li>
                )
              }
              <li>
                <NavLink activeClassName='active' to='/about' onClick={openMenu} >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/contact-us' onClick={openMenu} >
                  Contact-Us
                </NavLink>
              </li>
              {/* <li>
                <NavLink activeClassName='active' to='/OGS' onClick={openMenu} >
                  OGS
                </NavLink>
              </li> */}
            </ul>
          </div>
          <div className="bottom">
            {
              user ? (
                <ul>
                  <li className='user' >{user?.result?.name.slice(0, 1)}</li>
                  <li onClick={
                    () => {
                      openMenu()
                      handleLogOut()
                    }
                  } >Sign Out</li>
                </ul>
              ) : (
                <ul>
                  <li onClick={
                    () => {
                      navigate('/sign-in')
                      openMenu()
                    }
                  } >Sign In</li>
                  <li onClick={
                    () => {
                      navigate('/sign-up')
                      openMenu()
                    }} >Sign Up</li>
                </ul>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar