import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";

import Backdrop from "components/Backdrop";
import Button from "components/Button";
import Divider from "components/Divider";

import "./Menu.scss";

const Menu = ({ handleMenu }) => {
  const [isOpen, toggleOpen] = useState(false);

  const listNavigation = [
    "Beranda",
    "Tentang Kami",
    "Mobil",
    "Service",
    "Sparepart",
    "Hubungi Kami",
  ];

  function renderNavigationList() {
    return listNavigation.map((menu, index) => (
      <Link key={index} className="mb--1 d--block black" to="/">
        {menu}
      </Link>
    ));
  }

  return (
    <div>
      <div className="hamburger-menu">
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={() => {
            toggleOpen(!isOpen);
            handleMenu(!isOpen);
          }}
          height={12}
          width={20}
          color="white"
        />
      </div>
      <div className={`menu-list ${isOpen ? "active" : ""}`}>
        <nav className="text-bold text-size--18">{renderNavigationList()}</nav>
        <Divider />
        <Button>
          <div className="d--flex a-items--center j-content--center">
            <img
              src={require("assets/icon/phone-outline.svg").default}
              className="mr--0-5"
              alt="Phone Icon"
            />
            <span className="text-size--14 text-uppercase text-bold">
              (022) 5204645
            </span>
          </div>
        </Button>
        <div className="d--flex a-items--center mt--1">
          <img
            width={81}
            src={require("assets/call-center.png").default}
            alt="Call Center Suzuki"
            className="mr--1"
          />
          <img
            width={164}
            src={require("assets/my-suzuki.png").default}
            alt="Download My Suzuki"
            className="mb--1"
          />
        </div>
        <footer className="p--absolute bottom--0 text-size--12">
          <p className="mb--0 mt--0">© 2020 Suzuki Indonesia.</p>
          <p className="mt--0">All rights reserved.</p>
        </footer>
      </div>
      <Backdrop isHide={!isOpen} />
    </div>
  );
};

export default Menu;
