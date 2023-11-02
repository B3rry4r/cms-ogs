import React from 'react';
import './UserDashboard.scss'

const UserDashboard = () => {
    return (
        <div className='dashboard' >
            <div className="container">
                <h1>Dashboard</h1>
                <div className="left">
                <div className="user-image">
                    ?
                </div>
                <div className="user-details">
                    <h2>Username</h2>
                    <p>John Doe</p>
                </div>
                <div className="user-details">
                    <h2>Password</h2>
                    <h2>********</h2>
                </div>
                </div>
            </div>
            <div className="filtered circle-1"></div>
            <div className="filtered circle-2"></div>
            <div className="filtered circle-3"></div>
        </div>
    )
}

export default UserDashboard