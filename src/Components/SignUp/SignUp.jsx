import React from 'react';
import './SignUp.scss';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()


    return (
        <div className='sign-up'>
            <div className="container">
                <h1>Sign-Up</h1>

                <div className="form">
                    <input type="text" name="FirstName" id="" placeholder='First Name' />
                    <input type="text" name="LastName" id="" placeholder='Last Name' />
                    <input type="password" name="" id="" placeholder='Password' />
                    <input type="email" name="Email" id="" placeholder='Email' />
                </div>

                <span className="button">Sign-Up</span>

                <p>already have an account? <span onClick={()=>{navigate('/sign-in')}} >Sign-In</span></p>
            </div>

            <div className="filtered circle-1"></div>
            <div className="filtered circle-2"></div>
            <div className="filtered circle-3"></div>
        </div>
    )
}

export default SignUp