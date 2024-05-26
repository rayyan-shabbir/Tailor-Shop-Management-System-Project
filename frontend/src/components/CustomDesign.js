import React, { useState } from 'react';
import axios from 'axios';
import './design.css';
import Alert from './Alert';

function CustomDesign() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        category: '',
        message: ''
    });

    const [alert, setAlert] = useState({ message: '', type: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const closeAlert = () => {
        setAlert({ message: '', type: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/custom-design', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 201) {
                setAlert({ message: 'Design Saved successfully!', type: 'success' });
            } else {
                setAlert({ message: 'Failed to save design!', type: 'success' });
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error saving design.');
        }
    };

    return (
        <div>
            <Alert message={alert.message} type={alert.type} onClose={closeAlert} />
            <div className="image-container">
                <img src="images/d2.jpeg" alt="Design" />
                <div className="overlay-text">
                    <h1>Design your own</h1>
                </div>
            </div>

            <div className="content">
            <section id="design_form" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/design_background.jpeg)` }}>
                    <div id="pic">
                        <h1>Select your Measurement</h1>
                        <img src="images/ms.jpeg" alt="Measurement" />
                    </div>
                    <div id="form-container">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required onChange={handleChange} />

                            <label htmlFor="mobile">Mobile No:</label>
                            <input type="text" id="mobile" name="mobile" required onChange={handleChange} />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required onChange={handleChange} />

                            <label htmlFor="category">Select Category:</label>
                            <select id="category" name="category" onChange={handleChange}>
                                <option value="category">Select Category</option>
                                <option value="3_piece">3 Piece</option>
                                <option value="2_piece">2 Piece</option>
                                <option value="shirt_piece">Shirt Piece</option>
                            </select>

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="6" required onChange={handleChange}></textarea>

                            <button type="submit">Proceed</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CustomDesign;
