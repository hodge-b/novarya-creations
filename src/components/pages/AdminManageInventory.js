import React from 'react';
import ProductCard from '../component/ProductCard';
import { productList } from '../utilities/ProductList';

export default function AdminManageInventory({onclick}) {

    const productElements = productList.map(item => (
        <ProductCard key={item.id} id={item.id} product_name={item.product_name} sku={item.sku} />
    ));

    return(
        <>
            <div className="container">
                <h2 className="mt-5 display-5 text-center">Manage Inventory</h2>
                <div className="p-5 mt-5 container shadow rounded" style={{backgroundColor: "#fff"}}>
                    <div className="d-flex justify-content-between p-2">
                        <input className="form-control w-75" type="text" placeholder="Search" />
                        <div className="container w-25 text-end">
                            <div className="container shadow-sm btn w-25" onClick={onclick}>
                                <i className="ri-arrow-go-back-fill display-6 text-info"></i>
                            </div>
                        </div>
                    </div>
                    <p className="mt-5 h3">Display Order</p>
                    <div className="p-1 mt-1 container border rounded text-left overflow-auto" style={{maxHeight: "40rem"}}>
                        {productElements}
                    </div>
                </div>
            </div>
        </>
    )
}