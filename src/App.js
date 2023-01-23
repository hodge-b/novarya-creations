import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/component/Header';
import Login from './components/pages/Login';
import PreLaunch from './components/pages/PreLaunch';
import Dashboard from './components/pages/Dashboard';

export default function App() {
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
                    <Route path='/admin/dashboard' element={<Dashboard authorized={true}/>}/>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}