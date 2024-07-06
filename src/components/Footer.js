import React from 'react';
import './../icon/themify-icons.css';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className="container">
            <footer className="footer">
                <p className="mb-0">
                    &copy; {currentYear} Minseop. All rights reserved.
                    <a href="https://github.com/her9797" target="_blank" rel="noopener noreferrer">Visit My GitHub</a>
                </p>
                <div className="social-links text-right m-auto ml-sm-auto">
                    <a href="https://www.youtube.com/@her97" className="link" target="_blank" rel="noopener noreferrer"><i className="ti-youtube"></i></a>
                    <a href="https://www.instagram.com/min.sup" className="link" target="_blank"><i className="ti-instagram"></i></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
