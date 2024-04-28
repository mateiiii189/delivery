import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = () => {
    const [searchVisible, setSearchVisible] = useState(false);

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    return (
        <div className="navbar">
            <img src='https://i.imgur.com/SzWbk6P.png' className="logo" />
            <div className="list">
                <Link className="home" to='/'>Home</Link>
                <Link className="food" to='/restaurants'>Food</Link>
                <Link className="about" to='/about'>About</Link>
            </div>
            <div className="search-cart-account">
                <div className="search-cart-container">
                    <div className={`search-bar ${searchVisible ? '' : 'visible'}`}>
                        <input
                            type="text"
                            placeholder="Ex:McDuck"
                            className="search-bar__input"
                        />
                        <button className="search-bar__submit" onClick={toggleSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
                <div className='shopping-cart'>
                    <FontAwesomeIcon icon={faShoppingBag} />
                </div>
                <div className='account'>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
