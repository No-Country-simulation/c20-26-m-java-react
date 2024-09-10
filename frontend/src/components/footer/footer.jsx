import React from 'react'
import './footer.scss'
import FOOTERIMG from "../../assets/images/Footer/footer.png"
import { IconContext } from "react-icons";

import {FaFacebookF, FaYoutube, FaXTwitter, FaInstagram } from "react-icons/fa6";
const Footer = () => {
return (
    <div className='footerWrapper'>
        <div className='footerImg' style={{ backgroundImage: `url(${FOOTERIMG})` }}>

        <ul className='iconsFooterContainer'>
            <li>
                <IconContext.Provider  value={{ className:"iconFooter" }}>
                    <FaFacebookF />
                </IconContext.Provider>
            </li>
            <li>
                <IconContext.Provider value={{ className:"iconFooter" }}>
                    <FaYoutube />
                </IconContext.Provider>
            </li>
            <li>
                <IconContext.Provider value={{ className:"iconFooter" }}>
                    <FaXTwitter />
                </IconContext.Provider>
            </li>
            <li>
                <IconContext.Provider value={{ className:"iconFooter" }}>
                    <FaInstagram />
                </IconContext.Provider>
            </li>
        </ul>
        </div>
    </div>
)
}

export default Footer