import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './placeorder.module.css';
import Alert from './Alert';

const PlaceOrder = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        category: '',
        message: ''
    });

    useEffect(() => {
        const selectedImageUrl = localStorage.getItem('selectedImageUrl');
        if (selectedImageUrl) {
            setFormData((prevData) => ({
                ...prevData,
                selectedImageUrl
            }));
        }
    }, []);

    const [alert, setAlert] = useState({ message: '', type: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/stitch-order', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
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
        <div className={styles.content}>
            {alert.message && <Alert message={alert.message} type={alert.type} onClose={closeAlert} />}
            <section
                id="rates"
                className={styles.ratesSection}
                style={{ backgroundImage: "url('images/wall.jpeg')", backgroundSize: 'cover' }}
            >
                <div id="form-container" className={styles.formContainer}>
                    <h1>Book your order now</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                        <label htmlFor="mobile">Mobile No:</label>
                        <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                        <label htmlFor="category">Select Category:</label>
                        <select id="category" name="category" value={formData.category} onChange={handleChange}>
                            <option value="">Select Category</option>
                            <option value="3_piece">3 Piece</option>
                            <option value="2_piece">2 Piece</option>
                            <option value="shirt_piece">Shirt Piece</option>
                        </select>

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>

                        <button type="submit" className={styles.placeOrderButton}>Proceed</button>
                    </form>
                </div>
                <div id="pic" className={styles.picContainer}>
                    <img src="images/shirt.jpeg" alt="Shirt Image" />
                    <img src="images/trouser.jpeg" alt="Trouser Image" />
                </div>
            </section>
            <section id="section2" className={styles.section2} style={{ backgroundImage: "url('/images/howwork.jpeg')" }}>
            </section>
        </div>
    );
};

export default PlaceOrder;
