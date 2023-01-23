import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './components/pages/Login';
import PreLaunch from './components/pages/PreLaunch';

export default function App() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<PreLaunch />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    );
}