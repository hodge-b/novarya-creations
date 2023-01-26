import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

export default function Dashboard({authorized, onclick}) {
    let navigate = useNavigate();

    // Redirect user if not authorized.
    if (!authorized) {
        return <Navigate replace to="/login" />
    }
    
    return(
        <>
            <div className="container text-center">
                <h2 className="mt-5 display-5">Admin Dashboard</h2>
                <div className="mt-5 container">
                    <div className="row">
                        <div className="admin-dashboard--btn--add-product p-5 m-5 col-5 container shadow rounded btn" onClick={() => {navigate('/admin/add-product')}}>
                            <div className="row"><div className="col"><i className="ri-file-edit-fill display-1"></i></div></div>
                            <div className="row"><div className="col mt-5 h3">Add Product</div></div>
                        </div>
                        <div className="admin-dashboard--btn--manage-inventory p-5 m-5 col-5 container shadow rounded btn" onClick={() => {navigate('/admin/manage-inventory')}}>
                            <div className="row"><div className="col"><i className="ri-stack-fill display-1"></i></div></div>
                            <div className="row"><div className="col mt-5 h3">Manage Inventory</div></div>
                        </div>
                        <div className="admin-dashboard--btn--store-front p-5 m-5 col-5 container shadow rounded btn" onClick={() => {navigate('/')}}>
                            <div className="row"><div className="col"><i className="ri-store-3-fill display-1"></i></div></div>
                            <div className="row"><div className="col mt-5 h3">Store Front</div></div>
                        </div>
                        <div className="admin-dashboard--btn--settings p-5 m-5 col-5 container shadow rounded btn" onClick={() => {navigate('/admin/settings')}}>
                            <div className="row"><div className="col"><i className="ri-settings-5-fill display-1"></i></div></div>
                            <div className="row"><div className="col mt-5 h3">Settings</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}