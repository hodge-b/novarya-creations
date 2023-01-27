import React from 'react';

export default function AdminManageInventory() {

    const handleSubmit = e => {
        e.preventDefault();

    }

    const products = [];

    return(
        <>
            <div className="container">
                <h2 className="mt-5 display-5 text-center">Manage Inventory</h2>
                <div className="p-5 mt-5 container shadow rounded">
                    <div className="d-flex justify-content-center">
                        <input className="form-control w-50" type="text" placeholder="Search" />
                    </div>
                    <p className="mt-5 h3">Display Order</p>
                    <div className="p-1 mt-1 container border rounded text-left">
                        <div className="container">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}