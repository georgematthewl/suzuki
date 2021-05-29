import React from "react";
import { Link } from "react-router-dom";

import Divider from "components/UI/Divider";
import Button from "components/UI/Button";

import "./Footer.scss";

const Footer = ({ paddingBottom }) => {
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
      <Link key={index} className="black" to="/">
        {menu}
      </Link>
    ));
  }

  return (
    <footer className="pl--1 pr--1 bg-white footer">
      <nav className="footer--menu d--flex flex--wrap j-content--center">
        {renderNavigationList()}
      </nav>
      <Divider />
      <div>
        <h5 className="text-center mb--0-5 text-size--16 text-uppercase">
          Alamat
        </h5>
        <h6 className="text-center text-size--14 mb--0 mt--0">
          SUZUKI Nusantara Jaya Sentosa
        </h6>
        <p className="mt--0 mb--1 text-size--14 text-center">
          Jl. Soekarno - Hatta no. 289, Bojongloa Kidul Bandung 40234
        </p>
      </div>
      <div className="d--flex j-content--center a-items--center f-direction--column">
        <Button secondary className="mb--1 width--60">
          <div className="d--flex a-items--center j-content--center">
            <img
              src={require("assets/icon/pin-outline.svg").default}
              className="mr--0-5"
              alt="Pin Icon"
            />
            <span className="text-size--14 text-uppercase text-bold">
              Cek Google Maps
            </span>
          </div>
        </Button>
        <Button className="width--60">
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
      </div>
      <Divider />
      <div className="text-center">
        <h5 className="text-center mb--1 text-size--16">
          HOTLINE 24 JAM (Bebas Pulsa)
        </h5>
        <img
          src={require("assets/call-center.png").default}
          alt="Call Center Suzuki"
        />
      </div>
      <div className="text-center mt--1">
        <h5 className="text-center mb--1 text-size--16 text-uppercase">
          Download My Suzuki
        </h5>
        <img
          src={require("assets/my-suzuki.png").default}
          alt="Download My Suzuki"
          className="mb--1"
        />
        <div />
        <img
          className="mb--2"
          src={require("assets/ecstar.png").default}
          alt="ECSTAR"
        />
      </div>
      <div
        style={{ paddingBottom }}
        className="text-center bg-primary p--1 text-size--14 white full-width pb--2"
      >
        <p className="mb--0 mt--0">© 2020 Suzuki Indonesia.</p>
        <p className="mt--0">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
