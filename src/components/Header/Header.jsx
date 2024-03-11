import React from 'react';
import './Header.css'
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { RiAdminLine } from "react-icons/ri";

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="headert">
                        <h1>BOOKShop</h1>
                    </div>
                    <div className="header-input">
                        <input type="text" placeholder='Search here' /><CiSearch className='search' />
                    </div>
                    <div className="basket">
                        <SlBasket />
                        <RiAdminLine />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;