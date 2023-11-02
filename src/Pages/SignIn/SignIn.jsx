import React, { useEffect, useState } from 'react';
import './SignIn.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../../Components/Auth/Auth';
import Small from '../../Components/Loader/Small/Small';

const SignIn = () => {
    const navigate = useNavigate()
    const [inputError, setInputError] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const formValue = {
        email: '',
        password: ''
    };
    const [formData, setFormData] = useState(formValue);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))

        if (user?.result?.name) {
            navigate('/')
        }
    }, [navigate, user?.result?.name])

    if (user?.result?.name) {
        return null;
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if (formData.email.length === 0 || formData.password.length === 0) {
            setInputError(true)
            return null
        };
        try {
            setIsLoading(true)
            //create a delay of 4s
            await new Promise((resolve) => setTimeout(resolve, 4000))

            const response = await axios.post(`${url}/user/signin`, formData)
            if (response) {
                setIsLoading(false);
                navigate('/');
                localStorage.setItem('profile', JSON.stringify(response?.data))
            }
        } catch (error) {
            setIsLoading(false);
            setErrorMessage(error?.response?.data?.message);
        }

    }


    return (
        <div className='sign-in' >
            <div className="container">
                <h1>Sign-In</h1>

                <div className="form">
                    <div className="input">
                        <input type="email" name="Email" placeholder='Email' onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })} />
                        {inputError && formData.email.length <= 0 ? <span className='errorMessage'>*</span> : ''}
                    </div>
                    <div className="input">
                        <input type="password" name="" placeholder='Password' onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })} />
                        {inputError && formData.password.length <= 0 ? <span className='errorMessage'>*</span> : ''}
                    </div>
                </div>
                <div className="btn-e">
                    <button className="button" onClick={handleLogin} disabled={isLoading} >
                        {
                            isLoading ? (
                                <Small />
                            ) : (
                                'Sign-In'
                            )
                        }
                    </button>
                    {
                        errorMessage && (
                            <p className='errorM'>{errorMessage}</p>
                        )
                    }
                </div>
                <p>Don't have an account? <span onClick={() => { navigate('/sign-up') }} >Sign-Up</span></p>
            </div>
            <div className="filtered circle-1"></div>
            <div className="filtered circle-2"></div>
            <div className="filtered circle-3"></div>
        </div>
    )
}

export default SignIn