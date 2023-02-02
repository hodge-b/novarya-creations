import React from 'react';

export default function ProductCard({id, product_name, sku}) {

    return(
        <div className="my-2 p-3 container border rounded d-flex align-items-center">
            <div className="d-flex align-items-center w-100">
            <i className="ri-drag-move-2-fill display-6"></i>
            <p className="my-0 ms-5 display-6">{product_name}</p>
            </div>
            <div className="d-flex ps-5">
                <div className="container btn"><i className="mx-2 ri-edit-fill text-info display-6"></i></div>
                <div className="container btn"><i className="mx-2 ri-close-fill text-danger display-6"></i></div> 
            </div>
        </div>
    )
}