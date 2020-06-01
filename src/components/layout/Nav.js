import React from "react";
import Logo from "../../assets/Logo.png";
import Tags from "./Tags";
import { useLocation } from "react-router-dom";

const Nav = () => {
  let location = useLocation();
  let locationPathName = location.pathname;
  // console.log(location.pathname);
  // if (location.pathname.includes("imageDetails")) {
  //   console.log(true);
  // }
  return (
    <div className='nav'>
      <div className='col s12 center-align'>
        <div className='logo-img'>
          <img src={Logo} alt='PixaFind' width='150px' />
        </div>
      </div>
      {locationPathName.includes("imageDetails") ? " " : <Tags />}
    </div>
  );
};

export default Nav;
