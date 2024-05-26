import React from 'react';
import './alert.css'; // This file will contain styles for the alert

const Alert = ({ message, type, onClose }) => {
    if (!message) return null;

    return (
        <div className={`alert ${type}`}>
            <span className="closebtn" onClick={onClose}>&times;</span>
            {message}
        </div>
    );
};

export default Alert;
