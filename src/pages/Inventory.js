import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from '../api/axios';
import Widget from "../components/Widget";

function Inventory() {
    const navigate = useNavigate();
    const [productList, setProductList] = useState([]);

    const LOGIN_URL = process.env.REACT_APP_API_URL + '/products';

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await axios.get(LOGIN_URL);
            setProductList(response.data);
        } catch(err) {
            console.log(err);
        }
    };

    const handleClick = e => {
        e.preventDefault();
        navigate('/dashboard');
    }

    const productElements = productList.map(item => {
        return <Widget key={item._id} childClass='' title={item.title} sku={item.sku} onclick={handleClick} />
    });

    return (
        <section className='pt-5 container text-center'>
            <h1 className='display-4'>Manage Inventory</h1>
            <div className="p-0 mt-4 container border rounded">
                <button className='btn__settings__go-back mt-3 btn btn-info text-white' onClick={handleClick} ><i className='btn__settings__go-back ri-arrow-go-back-fill display-6'></i></button>
                <div className="p-0 mt-1 container text-center">
                    <label className='h5 mt-5'>Display Order</label>
                    <div className="p-0 container border">
                        {productElements}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Inventory;