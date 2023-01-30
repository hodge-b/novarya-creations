import { customRoutes } from './components/utilities/Routes';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer, useState } from 'react';

// Page imports
import PreLaunch from './components/pages/PreLaunch';
import Login from './components/pages/Login';
import AdminDashboard from './components/pages/AdminDashboard';
import AdminAddProduct from './components/pages/AdminAddProduct';
import AdminManageInventory from './components/pages/AdminManageInventory';
import AdminSettings from './components/pages/AdminSettings';
import Header from './components/component/Header';
import AdminChangePassword from './components/pages/AdminChangePassword';
import AdminAPIConfigurationForm from './components/pages/AdminAPIConfigurationForm';
import Home from './components/pages/Home';

const VIEW_MODE = {
    PRE_LAUNCH: 'pre-launch',
    LOGIN: 'login',
    ADMIN_DASHBOARD: 'admin-dashboard',
    ADMIN_ADD_PRODUCT: 'admin-add-product',
    ADMIN_MANAGE_INVENTORY: 'admin-manage-inventory',
    ADMIN_SETTINGS: 'admin-settings',
    ADMIN_CHANGE_PASSWORD: 'admin-change-password',
    ADMIN_API_CONFIGURATION: 'admin-api-configuration'
}

function reducer(state, action) {

}

export default function App() {
    let navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, {});
    const [viewMode, setViewMode] = useState(VIEW_MODE.PRE_LAUNCH);

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

    // Manage inventory button clicks
    const onSettingsButtonClick = e => {
        const buttonLabel = e.target.className.split(" ")[0];
        switch(buttonLabel) {
            case 'admin-settings--btn--go-back':
                navigate(customRoutes.admin_dashboard);
                break;
            case 'admin-settings--btn--change-password':
                navigate(customRoutes.admin_settings_change_password);
                break;
            case 'admin-settings--btn--api-configuration':
                navigate(customRoutes.admin_settings_api_configuration);
                break;
            default:
                navigate(customRoutes.admin_dashboard);
                break;
        }
    }

    return(
        <ThemeProvider breakpoints={['xxxl','xxl','xl','lg','md','sm','xs','xxs']} minBreakpoint='xxs'>
            {/*<Header /> */}
            <Routes>
                <Route path={customRoutes.pre_launch} element={<PreLaunch />} />
                <Route path={customRoutes.index} element={<Home />} />
                <Route path={customRoutes.login} element={<Login />} />
                <Route path={customRoutes.admin_dashboard} element={<AdminDashboard authorized={true} onclick={onAdminDashboardButtonClick}/>} />
                <Route path={customRoutes.admin_add_product} element={<AdminAddProduct onclick={onAddProductButtonClick} />} />
                <Route path={customRoutes.admin_manage_inventory} element={<AdminManageInventory onclick={onManageInventoryButtonClick} />} />
                <Route path={customRoutes.admin_settings} element={<AdminSettings onclick={onSettingsButtonClick} />} />
                <Route path={customRoutes.admin_settings_change_password} element={<AdminChangePassword onclick={onSettingsButtonClick} />} />
                <Route path={customRoutes.admin_settings_api_configuration} element={<AdminAPIConfigurationForm onclick={onSettingsButtonClick} />} />
            </Routes>
        </ThemeProvider>
    )
}