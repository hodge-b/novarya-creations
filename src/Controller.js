import React from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';

// Page imports
import PreLaunch from './components/pages/PreLaunch';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import AdminAddProduct from './components/pages/AdminAddProduct';
import AdminManageInventory from './components/pages/AdminManageInventory';
import AdminSettings from './components/pages/AdminSettings';
import Header from './components/component/Header';


export default function Controller() {
    let navigate = useNavigate();

    // Admin dashboard button clicks
    const onAdminDashboardButtonClick = e => {
        const buttonLabel = e.target.className.split(" ")[0];
        
        // Button routes
        switch(buttonLabel) {
            case 'admin-dashboard--btn--add-product':
                navigate('/admin/add-product');
                break;
            case 'admin-dashboard--btn--manage-inventory':
                navigate('/admin/manage-inventory');
                break;
            case 'admin-dashboard--btn--store-front':
                navigate('/home');
                break;
            case 'admin-dashboard--btn--settings':
                navigate('/admin/settings');
                break;
            default:
                break;
        }
    }

    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={<PreLaunch />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin/dashboard' element={<Dashboard authorized={true} onclick={onAdminDashboardButtonClick}/>} />
                <Route path='/admin/add-product' element={<AdminAddProduct />} />
                <Route path='/admin/manage-inventory' element={<AdminManageInventory />} />
                <Route path='/admin/settings' element={<AdminSettings />} />
            </Routes>
        </>
    )
}