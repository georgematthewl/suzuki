import React from "react";
import { useHistory } from "react-router-dom";

import Card from "components/UI/Card";
import Label from "components/UI/Label";
import Button from "components/UI/Button";

import Container from "components/Container";
import Footer from "components/Footer";

import listDealers from "data/dealer.json";
import listInfo from "data/info.json";

import "./Landing.scss";

const Landing = () => {
  const history = useHistory();

  function renderDealerCard() {
    return listDealers.map((dealer, index) => (
      <Card
        onClick={() => history.push("/outlet")}
        key={index}
        className={index === 0 ? "first-card mb--2" : "mb--2"}
      >
        <img
          className="card-picture"
          src={require(`assets/dealer/${dealer.imageName}.png`).default}
          alt="Dealer Showroom Preview"
        />
        <div className="pl--1 pr--1 pb--1-5">
          <Label text={dealer.tag} />
          <h4 className="text-size--15 mt--0-5 mb--0-5">{dealer.name}</h4>
          <div className="d--flex a-items--center mb--0-5">
            <img
              src={require("assets/icon/call.svg").default}
              className="mr--0-5"
              alt="Call Icon"
            />
            <span className="text-size--12 primary--lighter">
              {dealer.phone}
            </span>
          </div>
          <div className="d--flex a-items--center">
            <img
              src={require("assets/icon/pin.svg").default}
              className="mr--0-5"
              alt="Pin Icon"
            />
            <span className="text-size--12 primary--lighter">
              {dealer.address}
            </span>
          </div>
          <div className="mt--1">
            <Button secondary>
              <span>Kunjungi Website Outlet</span>
            </Button>
          </div>
        </div>
      </Card>
    ));
  }

  function renderInfoCard() {
    return listInfo.map((info, index) => (
      <Card key={index} className={index === 0 ? "first-card mb--2" : "mb--2"}>
        <img
          className="card-picture"
          src={require(`assets/promo/${info.imageName}.png`).default}
          alt="Soekarno"
        />
        <div className="p--1 pt--0">
          <span className="text-size--12 primary--lighter">{info.date}</span>
          <h4 className="text-size--15 mt--0-25 mb--0-25">{info.title}</h4>
        </div>
      </Card>
    ));
  }

  return (
    <Container>
      <section className="bg-primary pl--1 pr--1 main-section">
        <h1 className="text-size--18 white text-center">
          Temukan Outlet Suzuki terdekat di daerah sekitar Anda
        </h1>
      </section>
      <section className="pl--1 pr--1">{renderDealerCard()}</section>
      <section className="bg-primary pl--1 pr--1 main-section">
        <h1 className="text-size--18 white text-center mb--0">
          Informasi Terbaru
        </h1>
        <p className="text-size--13 white text-center mt--0">
          Seputar Promo, Berita, Event dari Suzuki
        </p>
      </section>
      <section className="pl--1 pr--1">
        {renderInfoCard()}
        <div className="mt--1 d--flex j-content--center mb--2">
          <Button secondary className="width--60">
            <span>Lihat Semua Informasi</span>
          </Button>
        </div>
      </section>
      <Footer />
    </Container>
  );
};

export default Landing;
