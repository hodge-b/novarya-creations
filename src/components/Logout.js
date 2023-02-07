import { useState } from 'react';
import useAuth from '../hooks/useAuth';
 
export function Logout() {
    const { setAuth } = useAuth();
    const [user] = useState('');
    const [pwd] = useState('');
    const [accessToken] = useState('');
    setAuth({ user, pwd, accessToken });
}
export default Logout;