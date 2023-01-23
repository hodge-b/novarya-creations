import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="p-5 container">
            <h2 className="text-center">Login</h2>
            <form className="mt-3 p-5 border rounded">
                <div className="mb-3">
                    <label className="form-label" for="inputUsername">Username</label>
                    <input 
                        className="form-control"
                        id="inputUsername"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" for="inputPassword">Password</label>
                    <input 
                        className="form-control"
                        id="inputPassword"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="text-center">
                    <Button className='btn btn-info center'>Login</Button>
                </div>
            </form>
        </div>
    )
}