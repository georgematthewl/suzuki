import React from "react";

import Logo from "assets/logo.png";
import "./Header.scss";

const Header = ({ isMenuOpen }) => {
  return (
    <header
      className={`header d--flex a-items--center ${isMenuOpen ? "hide" : ""}`}
    >
      <img className="logo" src={Logo} alt="Suzuki Logo" />
      <div>
        <h5 className="mt--0 mb--0 text-size--11">PT Nusantara Jaya Sentosa</h5>
        <p className="mt--0 mb--0 text-size--10">
          Main Dealer Suzuki Jawa Barat
        </p>
      </div>
    </header>
  );
};

export default Header;
