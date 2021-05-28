import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "components/Header";
import Menu from "components/Menu";

import "./Container.scss";

const Container = ({ children }) => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} />
      <Menu handleMenu={toggleMenu} />
      <div className={`container ${isMenuOpen ? "hide" : ""}`}>{children}</div>
    </>
  );
};

export default Container;
