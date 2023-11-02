import React, { useEffect, useState } from 'react';
import './SignUp.scss';
import { useNavigate } from 'react-router-dom';
import { url } from '../../Components/Auth/Auth';
import axios from 'axios';
import Small from '../../Components/Loader/Small/Small';


const SignUp = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [inputError, setInputError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const formValue = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };

    const [formData, setFormData] = useState(formValue);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
        if (user?.result?.name) {
            navigate('/')
        }
    }, [navigate, user?.result?.name])
    if (user?.result?.name) {
        return null;
    }


    const submitForm = async (e) => {
        e.preventDefault();

        if (formData.firstName.length === 0 || formData.lastName.length === 0 || formData.email.length === 0 || formData.password.length === 0) {
            setInputError(true)
            return null
        };
        try {
            setIsLoading(true)
            //create a delay of 4s
            await new Promise((resolve) => setTimeout(resolve, 4000))

            const response = await axios.post(`${url}/user/signup`, formData)
            if (response) {
                setIsLoading(false);
                alert("Successful");
                navigate('/');
                localStorage.setItem('profile', JSON.stringify(response?.data))
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            setErrorMessage(error?.response?.data?.message);
        }
    }



    return (
        <div className='sign-up'>
            <div className="container">
                <h1>Sign-Up</h1>

                <div className="form">
                    <div className="input">
                        <input type="text" name="FirstName" placeholder='First Name' onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })} />
                        {inputError && formData.firstName.length <= 0 ? <span className='errorMessage' >*</span> : ''}
                    </div>
                    <div className="input">
                        <input type="text" name="LastName" placeholder='Last Name' onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })} />
                        {inputError && formData.lastName.length <= 0 ? <span className='errorMessage' >*</span> : ''}
                    </div>
                    <div className="input">
                        <input type="email" name="" placeholder='Email' onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })} />
                        {inputError && formData.email.length <= 0 ? <span className='errorMessage' >*</span> : ''}
                    </div>
                    <div className="input">
                        <input type="password" name="Password" placeholder='Password' onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })} />
                        {inputError && formData.password.length <= 0 ? <span className='errorMessage' >*</span> : ''}
                    </div>
                </div>
                <div className="btn-n-e">
                    <button className="button" onClick={submitForm} disabled={isLoading} >{
                        isLoading ? (
                            <Small />
                        ) : (
                            'Sign-Up'
                        )
                    }</button>

                    {
                        errorMessage && (
                            <p className='errorM'>{errorMessage}</p>
                        )
                    }
                </div>
                <p>already have an account? <span onClick={() => { navigate('/sign-in') }} >Sign-In</span></p>
            </div>
            <div className="filtered circle-1"></div>
            <div className="filtered circle-2"></div>
            <div className="filtered circle-3"></div>
        </div>
    )
}

export default SignUp