import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

function Header() {
    const navigate = useNavigate();

    const handleClick = e => {
        e.preventDefault();
        const buttonLabel = e.target.className.split(' ')[0];

        switch(buttonLabel) {
            case 'btn__header__logout':
                <Logout />
                navigate('/');
                break;
            default:
                break;
        }
    }

    return (
        <header className='container p-3 bg-info text-center'>
            <button className='btn__header__logout btn btn-light text-info' onClick={handleClick}>Logout</button>
        </header>

    )
}
export default Header;