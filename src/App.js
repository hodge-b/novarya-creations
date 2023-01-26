import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

// Page imports
import AdminManageInventory from './components/pages/AdminManageInventory';
import AdminSettings from './components/pages/AdminSettings';
import AdminAddPage from './components/pages/AdminAddPage';
import PreLaunch from './components/pages/PreLaunch';
import Dashboard from './components/pages/Dashboard';
import Header from './components/component/Header';
import Login from './components/pages/Login';


export default function App() {

    // Admin dashboard button clicks
    const onAdminDashboardButtonClick = e => {
        const buttonLabel = e.target.className.split(" ")[0];
        
        // Button routes
        switch(buttonLabel) {
            case 'admin-dashboard--btn--add-product':
                break;
            case 'admin-dashboard--btn--manage-inventory':
                break;
            case 'admin--dashboard--btn--store-front':
                break;
            case 'admin--dashboard--btn--settings':
                break;
            default:
                break;
        }
    }

    return(
        <ThemeProvider
            breakpoints={['xxxl','xxl','xl','lg','md','sm','xs','xxs']}
            minBreakpoint='xxs'
        >
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<PreLaunch />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/admin/dashboard' element={<Dashboard authorized={true} onclick={onAdminDashboardButtonClick}/>} />
                    <Route path='/admin/add-product' element={<AdminAddPage />} />
                    <Route path='/admin/manage-inventory' element={<AdminManageInventory />} />
                    <Route path='/admin/settings' element={<AdminSettings />} />
                </Routes>
            </Router>
        </ThemeProvider>
    )
}