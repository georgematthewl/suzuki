import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import Divider from "components/UI/Divider";
import Button from "components/UI/Button";
import Carousell from "components/UI/Carousell";
import Tab from "components/UI/Tab";

import Container from "components/Container";
import Footer from "components/Footer";
import FloatingItem from "components/FloatingItem";

import listPassengerCar from "data/products/passenger.json";
import listCommercialCar from "data/products/commercial.json";

const images = [
  { url: "banner/banner-1.png" },
  { url: "banner/banner-1.png" },
  { url: "banner/banner-1.png" },
  { url: "banner/banner-1.png" },
];

const Outlet = () => {
  const history = useHistory();

  function renderListPassenger() {
    return listPassengerCar.map((car, index) => (
      <Fragment key={index}>
        <div
          className="d--flex a-items-center"
          onClick={() => history.push("/product/detail")}
        >
          <div className="width--50 mr--1 d--flex a-items--center">
            <img
              src={
                require(`assets/products/passenger/${car.imageName}.png`)
                  .default
              }
              alt={car.name}
            />
          </div>
          <div className="width--50">
            <h5 className="text-size--15">{car.name}</h5>
            <p className="text-size--12 primary--lighter text-italic mb--0">
              Mulai Dari
            </p>
            <p className="text-size--14 primary mb--0-5 text-bold">
              {car.price}
            </p>
            <Button className="width--50" small>
              <span>Lihat Detail</span>
            </Button>
          </div>
        </div>
        <Divider />
      </Fragment>
    ));
  }

  function renderListCommercial() {
    return listCommercialCar.map((car, index) => (
      <Fragment key={index}>
        <div
          className="d--flex a-items-center"
          onClick={() => history.push("/product/detail")}
        >
          <div className="width--50 mr--1 d--flex a-items--center">
            <img
              src={
                require(`assets/products/commercial/${car.imageName}.png`)
                  .default
              }
              alt={car.name}
            />
          </div>
          <div className="width--50">
            <h5 className="text-size--15">{car.name}</h5>
            <p className="text-size--12 primary--lighter text-italic mb--0">
              Mulai Dari
            </p>
            <p className="text-size--14 primary mb--0-5 text-bold">
              {car.price}
            </p>
            <Button className="width--50" small>
              <span>Lihat Detail</span>
            </Button>
          </div>
        </div>
        <Divider />
      </Fragment>
    ));
  }

  function renderFloatingItem() {
    return (
      <FloatingItem>
        <div className="d--flex f-direction--column a-items--center j-content--center width--25">
          <img src={require("assets/icon/wa.svg").default} alt="WA Icon" />
          <p className="text-size--10 mt--0-25 mb--0">WhatsApp</p>
        </div>
        <div className="d--flex f-direction--column a-items--center j-content--center width--25">
          <img
            src={require("assets/icon/pricelist.svg").default}
            alt="Price Icon"
          />
          <p className="text-size--10 mt--0-25 mb--0">Daftar Harga</p>
        </div>
        <div className="d--flex f-direction--column a-items--center j-content--center width--25">
          <img
            src={require("assets/icon/book-service.svg").default}
            alt="Book Service Icon"
          />
          <p className="text-size--10 mt--0-25 mb--0">Pesan Servis</p>
        </div>
        <div className="d--flex f-direction--column a-items--center j-content--center width--25">
          <img
            src={require("assets/icon/credit-simulation.svg").default}
            alt="Credit Simulation Icon"
          />
          <p className="text-size--10 mt--0-25 mb--0">Simulasi Kredit</p>
        </div>
      </FloatingItem>
    );
  }

  return (
    <Container>
      <section>
        <Carousell images={images} />
      </section>
      <section className="bg-primary pl--1 pr--1">
        <h1 className="text-size--18 white text-center mb--0 pb--2 pt--2">
          Temukan Mobil Suzuki yang tepat untuk Anda
        </h1>
      </section>
      <Tab className="mb--1">
        <div className="bg-white" label="Passenger Car" tabid={1}>
          <div className="p--1">{renderListPassenger()}</div>
        </div>
        <div className="bg-white" label="Commercial Car" tabid={2}>
          <div className="p--1">{renderListCommercial()}</div>
        </div>
      </Tab>
      <div className="bg-white d--flex j-content--center pb--2">
        <Button secondary className="width--60">
          <span>Lihat Semua Mobil</span>
        </Button>
      </div>
      <section>
        <img
          src={require("assets/banner/service.png").default}
          alt="Book Service"
        />
        <img
          src={require("assets/banner/sparepart.png").default}
          alt="Sparepart"
        />
      </section>
      {renderFloatingItem()}
      <Footer paddingBottom={88} />
    </Container>
  );
};

export default Outlet;
