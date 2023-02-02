import React, {useState, useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';

export default function Login( {user, setUser, onclick}) {
    let navigate = useNavigate();

    return(
        <div className="p-1 container text-center">
            <h2 className="mt-5 display-5">Login</h2>
            <form className="p-5 mt-5 container shadow rounded w-50 text-start" style={{backgroundColor: "#fff"}}>
                <div className="mb-4">
                    <label className="form-label" htmlFor="inputUsername">Username</label>
                    <input 
                        className="form-control"
                        id="inputUsername"
                        type="text"
                        value={user.name}
                        onChange={e => setUser(prevUser => {return{...prevUser, name: e.target.value}})}
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label" htmlFor="inputPassword">Password</label>
                    <input 
                        className="form-control"
                        id="inputPassword"
                        type="password"
                        value={user.password}
                        onChange={e => setUser(prevUser => {return{...prevUser, password: e.target.value}})}
                    />
                </div>
                <div className="mt-5 text-center">
                    <button className='login--btn btn text-info shadow-sm center' onClick={onclick}>Login</button>
                </div>
            </form>
        </div>
    )
}