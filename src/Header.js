import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
  return (
    <div className='header'>
      <img
        className='header-logo'
        src='https://logotyp.us/file/amazon.svg'
        alt=''
      />
      <div className='header_search'>
        <input type='text' className='header_searchInput' />
        <SearchIcon className='header_searchIcon' />
      </div>
      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'>Hello Guest</span>
          <span className='header_optionLineTwo'>Sign In</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>Orders</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>
        <div className='header_optionBasket'>
          <ShoppingBasketIcon />
          <span
            className='header_optionLineTwo 
            header_optionBasket '
          >
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
