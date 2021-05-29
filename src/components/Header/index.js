/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Logo from "assets/logo.png";
import "./Header.scss";

const Header = ({ isMenuOpen }) => {
  const { pathname } = useLocation();
  const [isNoShadow, setIsNoShadow] = useState(true);

  useEffect(() => {
    removeBoxShadow();
  }, [pathname]);

  function removeBoxShadow() {
    if (!pathname.split("/")[1]) {
      setIsNoShadow(false);
    } else {
      setIsNoShadow(true);
    }
  }

  return (
    <header
      className={`header d--flex a-items--center ${isMenuOpen ? "hide" : ""} ${
        isNoShadow ? "no-box-shadow" : ""
      }`}
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
