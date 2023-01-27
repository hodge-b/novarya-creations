import React from 'react';
import {Navigate} from 'react-router-dom';

export default function Dashboard({authorized, onclick}) {
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
                        <div className="admin-dashboard--btn--add-product p-5 m-5 col-5 container shadow rounded btn" onClick={onclick}>
                            <div className="admin-dashboard--btn--add-product row"><div className="admin-dashboard--btn--add-product col"><i className="admin-dashboard--btn--add-product ri-file-edit-fill display-1"></i></div></div>
                            <div className="admin-dashboard--btn--add-product row"><div className="admin-dashboard--btn--add-product col mt-5 h3">Add Product</div></div>
                        </div>
                        <div className="admin-dashboard--btn--manage-inventory p-5 m-5 col-5 container shadow rounded btn" onClick={onclick}>
                            <div className="admin-dashboard--btn--manage-inventory row"><div className="admin-dashboard--btn--manage-inventory col"><i className="admin-dashboard--btn--manage-inventory ri-stack-fill display-1"></i></div></div>
                            <div className="admin-dashboard--btn--manage-inventory row"><div className="admin-dashboard--btn--manage-inventory col mt-5 h3">Manage Inventory</div></div>
                        </div>
                        <div className="admin-dashboard--btn--store-front p-5 m-5 col-5 container shadow rounded btn" onClick={onclick}>
                            <div className="admin-dashboard--btn--store-front row"><div className="admin-dashboard--btn--store-front col"><i className="admin-dashboard--btn--store-front ri-store-3-fill display-1"></i></div></div>
                            <div className="admin-dashboard--btn--store-front row"><div className="admin-dashboard--btn--store-front col mt-5 h3">Store Front</div></div>
                        </div>
                        <div className="admin-dashboard--btn--settings p-5 m-5 col-5 container shadow rounded btn" onClick={onclick}>
                            <div className="admin-dashboard--btn--settings row"><div className="admin-dashboard--btn--settings col"><i className="admin-dashboard--btn--settings ri-settings-5-fill display-1"></i></div></div>
                            <div className="admin-dashboard--btn--settings row"><div className="admin-dashboard--btn--settings col mt-5 h3">Settings</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}