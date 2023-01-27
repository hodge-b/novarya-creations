import React from 'react';

export default function AdminAddProduct({onclick}) {
    return(
        <>
            <div className="container text-center">
                <h2 className="mt-5 display-5">Add Product</h2>
            </div>
            <div className="p-5 mt-5 container shadow rounded">
                <form>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="product-name">Product Name</label>
                        <input className="form-control w-50" id="product-name" type="text" />
                        <div className="form-text" id="product-name-help">Product name must not contain special characters ie. !#$</div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="product-image">Image</label>
                        <button className="form-control w-25">Add Image</button>
                        <div className="form-text">Image must be in formats: JPG, PNG</div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="product-sku">SKU</label>
                        <input className="form-control w-25" id="product-sku" type="text" />
                        <div className="form-text" id="product-sku-help">SKU must be unique and follow a pattern: 2 alphabetical <br /> characters followed by a hyphen then a sequence of <br /> 4 digits ie. AA-0001</div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label"  htmlFor="product-description" >Description</label>
                        <textarea className="form-control w-75" id="product-description" rows="5"></textarea>
                        <div className="form-text" id="product-description-help">Must not exceed 250 characters in length</div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="product-price">Price</label>
                        <input className="form-control w-25" id="product-price" type="number" />
                        <div className="form-text">Currency is display in Canadian Dollars CAD</div>
                    </div>
                    <div className="mt-5 container">
                        <button class="me-5 btn shadow-sm text-info" type="button">Save</button>
                        <button class="mx-5 btn shadow-sm text-info" onClick={onclick}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}