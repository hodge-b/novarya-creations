import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Dashboard({authorized}) {
    if (!authorized) {
        console.log(authorized)
        return <Navigate replace to="/login" />;
    }
    return(
        <>
            <h2>Dashboard</h2>
        </>
    )
}