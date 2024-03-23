import React from 'react';
import { BiSearch, BiFilter } from 'react-icons/bi'; 
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img 
        src="https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1564793209998-HT4V8J383MOR2UOKPEAE/YangsKitchen_Logo_DARK.png?format=1500w"
        alt="Restaurant Name"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="header-searchbar">
            <input placeholder="🔍 Search" className="search-input" />
            <BiFilter className="filter-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
