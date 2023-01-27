import React, {useState, useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    return(
        <div className="p-1 container text-center">
            <h2 className="mt-5 display-5">Login</h2>
            <form className="p-5 mt-5 container shadow rounded w-50 text-start">
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputUsername">Username</label>
                    <input 
                        className="form-control"
                        id="inputUsername"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputPassword">Password</label>
                    <input 
                        className="form-control"
                        id="inputPassword"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="text-center">
                    <button className='btn text-info shadow-sm center' onClick={() => {navigate('/admin/dashboard')}}>Login</button>
                </div>
            </form>
        </div>
    )
}