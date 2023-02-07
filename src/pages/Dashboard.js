import DashboardButton from "../components/DashboardButton";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Dashboard() {
    const navigate = useNavigate();

    const handleClick = e => {
        e.preventDefault();
        const buttonLabel = e.target.className.split(' ')[0];
        console.log(buttonLabel)
        switch(buttonLabel) {
            case 'btn__dashboard__add-product':
                navigate('/add-product');
                break;
            case 'btn__dashboard__inventory':
                navigate('/inventory');
                break;
            case 'btn__dashboard__store-front':
                navigate('/');
                break;
            case 'btn__dashboard__settings':
                navigate('/settings');
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
                
                <h1 className='display-4'>Dashboard</h1>
                <div className="mt-4 container">
                    <DashboardButton childClass='btn__dashboard__add-product' icon='ri-price-tag-3-fill' title='Add Product' onclick={handleClick} />
                    <DashboardButton childClass='btn__dashboard__inventory' icon='ri-file-edit-fill' title='Inventory' onclick={handleClick} />
                    <DashboardButton childClass='btn__dashboard__store-front' icon='ri-store-3-fill' title='Store Front' onclick={handleClick} />
                    <DashboardButton childClass='btn__dashboard__settings' icon='ri-settings-5-fill' title='Settings' onclick={handleClick} />
                </div>
            </section>
        </>
    )
}
export default Dashboard;