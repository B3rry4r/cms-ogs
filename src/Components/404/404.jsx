import React from 'react';
import './404.scss';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate()

    const home = () => {
        navigate('/')
    }

    return (
        <div className='error' >
            <div className="error-content">
                <h1>4<span>0</span>4</h1>
                <p>Sorry but this page doesn’t exist.</p>
                <span>this website is currently under development, You can check in later for new updates.</span>
                <span className="button" onClick={home}>Visit OGS</span>
            </div>
            <div className="filtered circle-1"></div>
            <div className="filtered circle-2"></div>
            <div className="filtered circle-3"></div>
        </div>
    )
}

export default Error