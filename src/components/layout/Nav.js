import React from "react";
import Logo from "../../assets/Logo.png";
import Tags from "./Tags";

const Nav = () => {
  return (
    <div className='nav'>
      <div className='col s12 center-align'>
        <div className='logo-img'>
          <img src={Logo} alt='PixaFind' width='150px' />
        </div>
      </div>
      <Tags />
    </div>
  );
};

export default Nav;
