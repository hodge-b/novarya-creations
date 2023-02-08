import { useNavigate } from "react-router-dom";
import Logout from "./Logout";
import axios from 'axios';

function Header() {
    const navigate = useNavigate();
    const LOGIN_URL = process.env.REACT_APP_API_URL + '/logout';

    const handleClick = async e => {
        e.preventDefault();
        const buttonLabel = e.target.className.split(' ')[0];

        switch(buttonLabel) {
            case 'btn__header__logout':
                try {
                    const response = await axios.get(LOGIN_URL);
                    console.log('ran')
                } catch (err) {
                    console.log(err);
                }
                navigate('/');
                break;
            default:
                break;
        }
    }

    return (
        <header className='p-3 bg-info text-center'>
            <button className='btn__header__logout btn btn-light text-info' onClick={handleClick}>Logout</button>
        </header>

    )
}
export default Header;