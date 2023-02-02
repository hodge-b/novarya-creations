import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import App from './App';
if (process.env.NODE_ENV === 'production') disableReactDevTools();
const root = createRoot(document.getElementById('root'));
root.render(<Router><App /></Router>);