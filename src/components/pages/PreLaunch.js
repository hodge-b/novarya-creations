import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function PreLaunch() {
    return(
        <div className="pt-5 container text-center">
            <h3>Welcome to</h3>
            <h2>Novarya Creations!</h2>
            <p className="mt-5">This website is currently under construction. <br /> 
            If you are the administrator <Link to="/login">login here</Link></p>
            <i className="ri-hammer-line display-1"></i>
        </div>
    )
}