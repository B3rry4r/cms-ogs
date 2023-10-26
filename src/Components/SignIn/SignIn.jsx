import React from 'react';
import './SignIn.scss'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate()

    return (
        <div className='sign-in' >
            <div className="container">
                <h1>Sign-In</h1>

                <div className="form">
                    <input type="email" name="Email" id="" placeholder='Email' />
                    <input type="password" name="" id="" placeholder='Password' />
                </div>
                <span className="button">Sign-In</span>
                <p>Don't have an account? <span onClick={()=>{navigate('/sign-up')}} >Sign-Up</span></p>
            </div>
            <div className="filtered circle-1"></div>
            <div className="filtered circle-2"></div>
            <div className="filtered circle-3"></div>
        </div>
    )
}

export default SignIn