import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { customRoutes } from './components/utilities/Routes';

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
        switch(buttonLabel) {
            case 'admin-dashboard--btn--add-product':
                navigate(customRoutes.admin_add_product);
                break;
            case 'admin-dashboard--btn--manage-inventory':
                navigate(customRoutes.admin_manage_inventory);
                break;
            case 'admin-dashboard--btn--store-front':
                navigate(customRoutes.index);
                break;
            case 'admin-dashboard--btn--settings':
                navigate(customRoutes.admin_settings);
                break;
            default:
                break;
        }
    }

    // Add product button clicks
    const onAddProductButtonClick = e => {
        const buttonLabel = e.target.className.split(" ")[0];
        switch(buttonLabel) {
            case 'admin-add-product--btn--cancel':
                navigate(customRoutes.admin_dashboard);
                break;
            default:
                navigate(customRoutes.admin_dashboard);
                break;
        }
    }

    // Manage inventory button clicks
    const onManageInventoryButtonClick = e => {
        const buttonLabel = e.target.className.split(" ")[0];
        switch(buttonLabel) {
            case 'admin-manage-inventory--btn--go-back':
                navigate(customRoutes.admin_dashboard);
                break;
            default:
                navigate(customRoutes.admin_dashboard);
                break;
        }
    }

    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={<PreLaunch />} />
                <Route path={customRoutes.login} element={<Login />} />
                <Route path={customRoutes.admin_dashboard} element={<Dashboard authorized={true} onclick={onAdminDashboardButtonClick}/>} />
                <Route path={customRoutes.admin_add_product} element={<AdminAddProduct onclick={onAddProductButtonClick} />} />
                <Route path={customRoutes.admin_manage_inventory} element={<AdminManageInventory onclick={onManageInventoryButtonClick} />} />
                <Route path={customRoutes.admin_settings} element={<AdminSettings />} />
            </Routes>
        </>
    )
}