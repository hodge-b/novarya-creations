import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/component/Header';
import Login from './components/pages/Login';
import PreLaunch from './components/pages/PreLaunch';

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
                </Routes>
            </Router>
        </ThemeProvider>
    );
}