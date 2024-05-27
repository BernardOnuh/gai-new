// Footer.js

import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import FooterStyles from '../../assets/styles/FooterStyles';
import { FaDiscord } from "react-icons/fa6";

const Footer = () => {
    return (
        <FooterStyles>
            <div className="social-links">
                <a href="https://x.com/GaiaEcoNFT" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
                </a>
                <a href="https://discord.gg/gaiaeconft" target="_blank" rel="noopener noreferrer">
                <FaDiscord />
                </a>
            </div>
        </FooterStyles>
    );
};

export default Footer;
