import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';

function Login() {
    const navigate = useNavigate();
    // const location = useLocation();

    // const from = location.state?.from?.pathname || '/';
    const LOGIN_URL = process.env.REACT_APP_API_URL + '/auth';

    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { setAuth } = useAuth();

    useEffect(() => {
        setErrorMessage('');
    }, [user, pwd])


    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(
                LOGIN_URL, 
                JSON.stringify({ user, pwd }), 
                { 
                    headers: { 'Content-Type': 'application/json'}, 
                    withCredentials: true 
                }
            );
            setIsLoading(false);
            const accessToken = response?.data?.accessToken;
            // console.log(`user: ${user}, pwd: ${pwd}, accessToken: ${accessToken}`);
            setAuth({ user, pwd, accessToken });
            setUser('');
            setPwd('');
            navigate('/dashboard');
        } catch (err) {
            if (!err?.response) {
                setErrorMessage('No server response');
            } else if (err.response?.status === 400) {
                setErrorMessage('Missing username or password');
            } else if (err.response?.status === 401) {
                setErrorMessage('Unauthorized');
            } else {
                setErrorMessage('Login failed');
            }
        }
    }

    return (
        <section className='p-1 container text-center'>
            <div className="row">
                <h1 className='col-12 p-1 display-4'>Login</h1>
            </div>
            <div className="row justify-content-center">
                <form className='col-11 col-sm-8 col-md-6 p-1 mt-4 container border rounded' onSubmit={handleSubmit}>
                    <div className="p-1 my-2 text-danger rounded container text-start">{errorMessage}</div>
                    {isLoading ?
                    <div className="spinner-border text-info" role='status'>
                        <span className="sr-only"></span>
                    </div>
                    :
                    ''}
                    <div className="row justify-content-center">
                        <div className='col-12 col-sm-10 mt-3 text-start'>
                            <label>Username</label>
                            <input 
                                className='form-control'
                                type="text"
                                value={user}
                                onChange={e => setUser(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className='col-12 col-sm-10 mt-4 text-start'>
                            <label>Password</label>
                            <input className='form-control'
                                type='password' 
                                value={pwd}
                                onChange={e => setPwd(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button className='btn mt-4 mb-3 text-white btn-info' style={{maxWidth: 'max-content'}}>Login</button>
                </form>
            </div>
        </section>
    )
}
export default Login;