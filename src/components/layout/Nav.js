import React from "react";
import Logo from "../../assets/Logo.png";

const Nav = ({ tag }) => {
  return (
    <div className='nav'>
      <div className='logo-img'>
        <img src={Logo} alt='PixaFind' width='150px' />
      </div>
    </div>
  );
};

export default Nav;
