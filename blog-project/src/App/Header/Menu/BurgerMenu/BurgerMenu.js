import React, { useState, useEffect } from 'react';
import './BurgerMenu.css'; // Create a CSS file for styling
import Menu from '../Menu';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                setIsOpen(false);
            }
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);

        }
    }, [])
    return (
        <div className="burger-menu">
            <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {isOpen && (
                <div className="mobile_menu">
                    <ul className="menu_list">
                        <li className="menu_list_item"><a href="/" className="menu_link">Blog</a></li>
                        <li className="menu_list_item"><a href="/" className="menu_link">About</a></li>
                        <li className="menu_list_item"><a href="/" className="menu_link">Lines</a></li>
                        <li className="menu_list_item"><a href="/" className="menu_link">Projects</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default BurgerMenu;
