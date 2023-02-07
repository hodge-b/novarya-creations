import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";

// import pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddProduct from './pages/AddProduct';
import Settings from "./pages/Settings";
import Inventory from "./pages/Inventory";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                {/* Public routes */}
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />

                {/* Protected routes */}
                <Route element={<RequireAuth />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/add-product' element={<AddProduct />} />
                    <Route path='/inventory' element={<Inventory />} />
                    <Route path='/settings' element={<Settings />}/>
                </Route>
            </Route>
        </Routes>
    )
}
export default App;