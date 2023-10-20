import React from 'react';
import './Loader.scss';

const Loader = () => {
    return (
        <div className='loader' >
            <div className="overlays-container">
                <div className="overlay"></div>
                <div className="overlay"></div>
                <div className="overlay"></div>
                <div className="overlay"></div>
                <div className="overlay"></div>
            </div>
            <div className="spinner-content">
                <div class="lds-ripple"><div></div><div></div></div>
                <h1>O G S</h1>
            </div>  
        </div>
    )
}

export default Loader