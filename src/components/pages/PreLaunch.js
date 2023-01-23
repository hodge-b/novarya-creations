import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function PreLaunch() {
    return(
        <div className="container">
            <h3>Welcome to</h3>
            <h2>Novarya Creations!</h2>
            <p>This website is currently under construction.</p>
            <p>If you are the administrator <Link to="/login">login here</Link></p>
            <i class="ri-hammer-line"></i>
        </div>
    )
}