import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Header from "../components/Header";
import axios from '../api/axios';

function ConfigureAPI() {
    const navigate = useNavigate();
    const [apiUrl, setApiUrl] = useState('');
    const [apiSecret, setApiSecret] = useState('');
    // const LOGIN_URL = process.env.REACT_APP_API_URL + '/products';

    const handleClick = e => {
        e.preventDefault();
        navigate('/dashboard');
    }

    const handleSubmit = async e => {
        e.preventDefault();
    }

    return (
        <>
            <Header />
            <section className='pt-5 container text-center'>
                <h1 className='display-4'>Configure API</h1>
                <div className="row justify-content-center">
                    <form className='col-11 col-sm-8 mt-4 container border rounded' id='form' onSubmit={handleSubmit}>
                        <div className="row justify-content-center">
                            <div className="row justify-content-start">
                                <div className='col-12 col-sm-8 mt-3 mb-sm-4 text-start'>
                                    <label>API URL</label>
                                    <input 
                                        className='form-control'
                                        type="text"
                                        value={apiUrl}
                                        onChange={e => setApiUrl(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-start">
                                <div className='col-12 col-sm-8 mt-3 mb-sm-4 text-start'>
                                    <label>API Secret</label>
                                    <input 
                                        className='form-control'
                                        type="password"
                                        value={apiSecret}
                                        onChange={e => setApiSecret(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-8 p-2 mt-5 mb-3 container d-flex justify-content-around">
                                <button className='px-4 btn btn-info text-white' type='submit'>Save</button>
                                <button className='btn btn-info text-white' onClick={handleClick}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default ConfigureAPI;