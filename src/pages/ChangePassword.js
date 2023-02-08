import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Header from "../components/Header";
import axios from '../api/axios';

function ChangePassword() {
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [retypeNewPassword, setRetypeNewPassword] = useState('');

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
                <h1 className='display-4'>Change Password</h1>
                <div className="row justify-content-center">
                    <form className='col-11 col-sm-8 mt-4 container border rounded' id='form' onSubmit={handleSubmit}>
                        <div className="row justify-content-start">
                            <div className='col-12 col-sm-8 mt-3 mb-sm-4 text-start'>
                                <label>Old Password</label>
                                <input 
                                    className='form-control'
                                    type="password"
                                    value={oldPassword}
                                    onChange={e => setOldPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className='col-12 col-sm-8 mt-3 mb-sm-4 text-start'>
                                <label>New Password</label>
                                <input 
                                    className='form-control'
                                    type="password"
                                    value={newPassword}
                                    onChange={e => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className='col-12 col-sm-8 mt-3 mb-sm-4 text-start'>
                                <label>Retype New Password</label>
                                <input 
                                    className='form-control'
                                    type="password"
                                    value={retypeNewPassword}
                                    onChange={e => setRetypeNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row justify-content-center">
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
export default ChangePassword;