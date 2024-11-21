import React, {useState} from 'react';
import "./Header.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="bg-primary text-white">
            <div className="container py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <h1 className="mb-0">Haven Real Estate</h1>
                    </div>
                    <button className="btn btn-light menu-toggle"
                    onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
                <nav className={`nav-links ${isOpen ? "open" : "" }`} >
                <a href="#home">Home</a>
                <a href="#properties">Properties</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;