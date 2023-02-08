import { useNavigate } from "react-router-dom";
import DashboardButton from "../components/DashboardButton";
import Header from "../components/Header";

function Settings() {
    const navigate = useNavigate();

    const handleClick = e => {
        e.preventDefault();
        const buttonLabel = e.target.className.split(' ')[0];
        console.log(buttonLabel)
        switch(buttonLabel) {
            case 'btn__settings__go-back':
                navigate('/dashboard');
                break;
            case 'btn__settings__change-password':
                navigate('/change-password');
                break;
            case 'btn__settings__configure-api':
                navigate('/configure-api');
                break;
            default:
                navigate('/dashboard');
                break;
        }
        
    }

    return (
        <>
            <Header />
            <section className='pt-4 container text-center'>
                <h1 className='display-4'>Settings</h1>
                <div className="mt-4 container">
                    <button className='btn__settings__go-back col-3 col-sm-1 mt-3 mb-4 mb-md-5 btn btn-info text-white' onClick={handleClick} >
                        <i className='btn__settings__go-back ri-arrow-go-back-fill display-6'></i>
                    </button>
                    <div className="row justify-content-center">
                        <DashboardButton childClass={'btn__settings__change-password'} icon={'ri-lock-unlock-fill'} title='Change Password' onclick={handleClick} />
                        <DashboardButton childClass={'btn__settings__configure-api'} icon={'ri-stock-fill'} title='Configure API' onclick={handleClick} />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Settings;