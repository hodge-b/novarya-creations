import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Controller from './Controller';

export default function App() {
    return(
        <ThemeProvider breakpoints={['xxxl','xxl','xl','lg','md','sm','xs','xxs']} minBreakpoint='xxs'>
            <Router>
                <Controller />
            </Router>
        </ThemeProvider>
    )
}