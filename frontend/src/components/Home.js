import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StitchWoman from './StitchWoman';
import BuyingAssistant from './BuyingAssistant';
import PlaceOrder from './PlaceOrder';
import DesignCustom from './CustomDesign';
import './home.css';

function Home() {
    return (
        <Router>
            <div>
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/stitch-woman">Stitch Woman</Link>
                    <Link to="/buying-assistant">Buying Assistant</Link>
                    <Link to="/place-order">Place Order</Link>
                    <Link to="/design-custom">Design Custom</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/stitch-woman" element={<StitchWoman />} />
                    <Route path="/buying-assistant" element={<BuyingAssistant />} />
                    <Route path="/place-order" element={<PlaceOrder />} />
                    <Route path="/design-custom" element={<DesignCustom />} />
                </Routes>
            </div>
        </Router>
    );
}

function HomePage() {
    return (
        <div>
            <h1>Welcome to Yours Tailor</h1>
            <p>Select an option from the menu to get started.</p>
        </div>
    );
}

export default Home;
