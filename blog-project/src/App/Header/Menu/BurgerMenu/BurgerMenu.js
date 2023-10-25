import React, { useState, useEffect } from 'react';
import './BurgerMenu.css'; // Create a CSS file for styling
import Menu from '../Menu';
import DefaultMenu from './DefaultMenu/DefaultMenu';

function BurgerMenu(

) {
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
                    <DefaultMenu
                        type="additional"
                    />
                </div>
            )}
        </div>
    );
}

export default BurgerMenu;
