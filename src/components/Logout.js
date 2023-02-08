import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
 
const Logout = () => {

    const LOGIN_URL = process.env.REACT_APP_API_URL + '/logout';

    const { setAuth } = useAuth();
    const [user] = useState('');
    const [pwd] = useState('');
    const [accessToken] = useState('');
    setAuth({ user, pwd, accessToken });

    useEffect(() => {
        setLogout();
    }, []);

    const setLogout = async () => {
        console.log('ran')
        try {
            const response = await axios.get(LOGIN_URL);
            console.log('ran')
        } catch (err) {
            console.log(err);
        }
    }
}
export default Logout;