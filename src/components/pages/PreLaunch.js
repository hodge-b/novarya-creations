import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { customRoutes } from '../utilities/Routes';

export default function PreLaunch() {
    return(
        <div className="pt-5 container text-center">
            <h3>Welcome to</h3>
            <h2>Novarya Creations!</h2>
            <p className="mt-5">This website is currently under construction. <br /> 
            If you are the administrator <Link to={customRoutes.login}>login here.</Link> <br /><br />
            <span className="h4">Come back soon!</span></p>
        </div>
    )
}