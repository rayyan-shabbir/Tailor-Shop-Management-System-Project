import React, { useState } from 'react';
import axios from 'axios';
import Alert from './Alert'; // Import the custom alert component
import './buying.css';

const BuyingAssistant = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        mobileNumber: '',
        productLinks: [],
        productPrice: '',
        subtotal: '',
        sumOfProducts: '',
    });

    const [productURLs, setProductURLs] = useState({
        product1: '',
        product2: '',
        product3: '',
    });

    const [alert, setAlert] = useState({ message: '', type: '' });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (checked) {
                setFormData((prevState) => ({
                    ...prevState,
                    productLinks: [...prevState.productLinks, name],
                }));
            } else {
                setFormData((prevState) => ({
                    ...prevState,
                    productLinks: prevState.productLinks.filter((link) => link !== name),
                }));
                setProductURLs((prevState) => ({
                    ...prevState,
                    [name]: '',
                }));
            }
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleURLChange = (e) => {
        const { name, value } = e.target;
        setProductURLs((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const completeFormData = {
            ...formData,
            productURLs,
        };
        try {
            const response = await axios.post('http://localhost:5000/api/buying-assistance', completeFormData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 201) {
                setAlert({ message: 'Order placed successfully!', type: 'success' });
            } else {
                setAlert({ message: 'Failed to place order.', type: 'error' });
            }
        } catch (error) {
            console.error('Error:', error);
            setAlert({ message: 'Error placing order.', type: 'error' });
        }
    };

    const closeAlert = () => {
        setAlert({ message: '', type: '' });
    };

    return (
        <div className="home">
            <Alert message={alert.message} type={alert.type} onClose={closeAlert} />
            <div className="content">
                <section id="buyimg">
                    <img src="images/buying.jpeg" alt="Buying" />
                </section>
                <section id="shop">
                    <h1>Buying and Shopping <br />Assistant</h1>
                    <p>We'll make the purchase for you & deliver to your <br />doorstep worldwide!</p>
                </section>
                <section id="section3">
                    <div className="container">
                        <img src="images/how.jpeg" alt="How it works" />
                        <div className="form-container">
                            <form id="orderForm" onSubmit={handleSubmit}>
                                <label htmlFor="fullName">Full Name:</label>
                                <input type="text" id="fullName" name="fullName" required onChange={handleInputChange} />

                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required onChange={handleInputChange} />

                                <label htmlFor="address">Address:</label>
                                <input type="text" id="address" name="address" required onChange={handleInputChange} />

                                <label htmlFor="mobileNumber">Mobile Number:</label>
                                <input type="tel" id="mobileNumber" name="mobileNumber" required onChange={handleInputChange} />

                                <label>Add Product Links:</label>
                                <div className="product-checkboxes">
                                    <label>
                                        <input type="checkbox" name="product1" onChange={handleInputChange} /> 1st URL
                                    </label>
                                    {formData.productLinks.includes('product1') && (
                                        <input type="url" name="product1" placeholder="1st Product URL" value={productURLs.product1} onChange={handleURLChange} />
                                    )}
                                    <label>
                                        <input type="checkbox" name="product2" onChange={handleInputChange} /> 2nd URL
                                    </label>
                                    {formData.productLinks.includes('product2') && (
                                        <input type="url" name="product2" placeholder="2nd Product URL" value={productURLs.product2} onChange={handleURLChange} />
                                    )}
                                    <label>
                                        <input type="checkbox" name="product3" onChange={handleInputChange} /> 3rd URL
                                    </label>
                                    {formData.productLinks.includes('product3') && (
                                        <input type="url" name="product3" placeholder="3rd Product URL" value={productURLs.product3} onChange={handleURLChange} />
                                    )}
                                </div>

                                <label htmlFor="productPrice">Product Price:</label>
                                <input type="number" id="productPrice" name="productPrice" required onChange={handleInputChange} />

                                <label htmlFor="subtotal">Subtotal (including our charges):</label>
                                <input type="number" id="subtotal" name="subtotal" required onChange={handleInputChange} />

                                <label htmlFor="sumOfProducts">Sum of All Products:</label>
                                <input type="number" id="sumOfProducts" name="sumOfProducts" required onChange={handleInputChange} />

                                <button type="submit">Shop Now</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BuyingAssistant;
