import React, {useState, useEffect} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    return(
        <div className="p-1 container">
            <h2 className="text-center">Login</h2>
            <form className="mt-3 p-3 border rounded">
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
                    <Button className='btn btn-info center' onClick={() => {navigate('/admin/dashboard')}}>Login</Button>
                </div>
            </form>
        </div>
    )
}