import React from 'react';
import { Link } from 'react-router-dom';
import { FooterComp } from './styled-compoents/FooterCamp';
import { FaPlayCircle } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterComp>
            <div className='logo-name'>
            <Link to="/"><FaPlayCircle className='footer-logo' style={{ fontSize: "3rem" }} /></Link>
            <small className='yousri'>YOUSRI&reg;</small>
            </div>
            <small className='all-rights'>MovieApp &copy; All Rights Reserved</small>
        </FooterComp>
    );
};

export default Footer;