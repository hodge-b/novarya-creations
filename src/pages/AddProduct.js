import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Header from "../components/Header";
import axios from '../api/axios';

function AddProduct() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [description, setDescription] = useState('');
    const [sku, setSku] = useState('');
    const [price, setPrice] = useState('');

    const LOGIN_URL = process.env.REACT_APP_API_URL + '/products';

    const handleClick = e => {
        e.preventDefault();
        navigate('/dashboard');
    }

    const handleFileChange = e => {
        setSelectedFile(e.target.files[0]);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('file', selectedFile);
        formData.append('description', description);
        formData.append('sku', sku);
        formData.append('price', price);

        axios.post(LOGIN_URL, formData)
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }

    return (
        <>
            <Header />
            <section className='pt-5 container text-center'>
                <h1 className='display-4'>Add Product</h1>
                <div className="row justify-content-center">
                    <form className='col-11 col-sm-8 mt-4 container border rounded' id='form' onSubmit={handleSubmit}>
                        <div className="row justify-content-start">
                            <div className='col-12 col-sm-8 mt-3 mb-sm-4 text-start'>
                                <label htmlFor='title'>Title</label>
                                <input 
                                    className='form-control'
                                    type="text"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className='col-12 col-sm-8 mt-3 mb-sm-4 text-start d-flex flex-column'>
                                <label>Image</label>
                                <input className='overflow-hidden' type='file' onChange={handleFileChange} required />
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className='col-12 col-sm-8 mt-4 text-start'>
                                <label>Description</label>
                                <textarea 
                                    className='form-control'
                                    rows='4' 
                                    style={{resize: 'none'}}
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    required
                                ></textarea> 
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className='col-6 col-sm-3 mt-3 text-start'>
                                <label>SKU</label>
                                <input 
                                    className='form-control'
                                    type="text"
                                    value={sku}
                                    onChange={e => setSku(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className='col-6 col-sm-3 mt-3 text-start'>
                                <label>Price</label>
                                <input 
                                    className='form-control'
                                    type="text"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-8 p-2 mt-5 mb-3 container d-flex justify-content-around">
                                <button className='px-4 btn btn-info text-white' type='submit'>Save</button>
                                <button className='btn btn-info text-white' onClick={handleClick}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default AddProduct;