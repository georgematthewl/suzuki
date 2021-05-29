import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-scroll";

import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import Accordion from "components/UI/Accordion";
import Button from "components/UI/Button";
import Tab from "components/UI/Tab";
import Carousell from "components/UI/Carousell";
import Divider from "components/UI/Divider";
import Modal from "components/UI/Modal";

import Container from "components/Container";
import Footer from "components/Footer";
import FloatingItem from "components/FloatingItem";

import pricelist from "data/products/pricelist.json";
import types from "data/products/xl7/types.json";

import "./ProductDetail.scss";

const images = [
  { url: "banner/banner-2.png" },
  { url: "banner/banner-2.png" },
  { url: "banner/banner-2.png" },
  { url: "banner/banner-2.png" },
];

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showModal, toggleModal] = useState(false);
  const [alphaSelectedColor, setAlphaSelectedColor] = useState(
    "Rising Orange + Black"
  );
  const [betaSelectedColor, setBetaSelectedColor] =
    useState("Pearl Burgundy Red");
  const [zetaSelectedColor, setZetaSelectedColor] =
    useState("Pearl Snow White");

  const { alpha, beta, zeta } = types;

  function renderAlphaTypeColor() {
    return alpha.map((car, index) => (
      <div
        key={index}
        onClick={() => setAlphaSelectedColor(car.color)}
        className={`item ${car.class} ${
          alphaSelectedColor === car.color ? "selected" : ""
        }`}
      />
    ));
  }

  function renderBetaTypeColor() {
    return beta.map((car, index) => (
      <div
        key={index}
        onClick={() => setBetaSelectedColor(car.color)}
        className={`item ${car.class} ${
          betaSelectedColor === car.color ? "selected" : ""
        }`}
      />
    ));
  }

  function renderZetaTypeColor() {
    return zeta.map((car, index) => (
      <div
        key={index}
        onClick={() => setZetaSelectedColor(car.color)}
        className={`item ${car.class} ${
          zetaSelectedColor === car.color ? "selected" : ""
        }`}
      />
    ));
  }

  function renderAlphaPictureAndName() {
    const { imageName } = alpha.find(
      ({ color }) => color === alphaSelectedColor
    );

    return (
      <>
        <img
          src={require(`assets/products/xl7/${imageName}.png`).default}
          alt="XL7 Alpha"
        />
        <h5 className="text-size--13 text-center text-uppercase mt--0-5">
          {alphaSelectedColor}
        </h5>
      </>
    );
  }

  function renderBetaPictureAndName() {
    const { imageName } = beta.find(({ color }) => color === betaSelectedColor);

    return (
      <>
        <img
          src={require(`assets/products/xl7/${imageName}.png`).default}
          alt="XL7 Beta"
        />
        <h5 className="text-size--13 text-center text-uppercase mt--0-5">
          {betaSelectedColor}
        </h5>
      </>
    );
  }

  function renderZetaPictureAndName() {
    const { imageName } = zeta.find(({ color }) => color === zetaSelectedColor);

    return (
      <>
        <img
          src={require(`assets/products/xl7/${imageName}.png`).default}
          alt="XL7 Zeta"
        />
        <h5 className="text-size--13 text-center text-uppercase mt--0-5">
          {zetaSelectedColor}
        </h5>
      </>
    );
  }

  function renderNavTab() {
    return (
      <nav className="nav-tab">
        <div className="d--flex pl--0">
          <div className={activeTab === "overview" ? "active" : ""}>
            <Link
              to="overview"
              smooth
              offset={-126}
              onClick={() => setActiveTab("overview")}
              className="text-size--12 pt--0-5 pb--0-5 pl--1 pr--1 text-bold"
            >
              Overview
            </Link>
          </div>
          <div className={activeTab === "type" ? "active" : ""}>
            <Link
              to="type"
              smooth
              offset={-126}
              onClick={() => setActiveTab("type")}
              className="text-size--12 pt--0-5 pb--0-5 pl--1 pr--1 text-bold"
            >
              Tipe & Warna
            </Link>
          </div>
          <div className={activeTab === "exterior" ? "active" : ""}>
            <Link
              to="exterior"
              smooth
              offset={-126}
              onClick={() => setActiveTab("exterior")}
              className="text-size--12 pt--0-5 pb--0-5 pl--1 pr--1 text-bold"
            >
              Eksterior
            </Link>
          </div>
          <div className={activeTab === "interior" ? "active" : ""}>
            <Link
              to="interior"
              smooth
              offset={-126}
              onClick={() => setActiveTab("interior")}
              className="text-size--12 pt--0-5 pb--0-5 pl--1 pr--1 text-bold"
            >
              Interior
            </Link>
          </div>
          <div className={activeTab === "specification" ? "active" : ""}>
            <Link
              to="specification"
              smooth
              offset={-126}
              onClick={() => setActiveTab("specification")}
              className="text-size--12 pt--0-5 pb--0-5 pl--1 pr--1 text-bold"
            >
              Spesifikasi
            </Link>
          </div>
          <div className={activeTab === "price" ? "active" : ""}>
            <Link
              to="price"
              smooth
              offset={-126}
              onClick={() => setActiveTab("price")}
              className="text-size--12 pt--0-5 pb--0-5 pl--1 pr--1 text-bold"
            >
              Harga
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  function renderFloatingItem() {
    return (
      <FloatingItem>
        <div className="d--flex f-direction--column a-items--center j-content--center width--50 pl--0-5">
          <Button onClick={() => toggleModal(true)}>
            <span>Booking Mobil</span>
          </Button>
        </div>
        <div className="d--flex f-direction--column a-items--center j-content--center width--25">
          <img src={require("assets/icon/wa.svg").default} alt="WA Icon" />
          <p className="text-size--10 mt--0-25 mb--0">WhatsApp</p>
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

  function renderPricelist() {
    return pricelist.map((car, index) => (
      <div
        key={index}
        className="p--1 bg-primary--lightest text-size--14 d--flex j-content--space-between border-radius--4 box-shadow mb--1"
      >
        <span className="text-bold">{car.type}</span>
        <span className="text-bold">{car.price}</span>
      </div>
    ));
  }

  function renderModal() {
    return (
      <Modal show={showModal} onClick={() => toggleModal(false)}>
        <img
          className="close-icon"
          onClick={() => toggleModal(false)}
          src={require("assets/icon/close.svg").default}
          alt="Close Icon"
        />
        <h3 className="mb--0 text-center">Booking Mobil</h3>
        <div className="mt--1-5">
          <div className="mb--1">
            <TextField
              style={{ color: "#163c80" }}
              fullWidth
              label="Nama Lengkap"
            />
          </div>
          <div className="mb--1">
            <TextField fullWidth label="Email" />
          </div>
          <div className="mb--1">
            <TextField fullWidth type="tel" label="No. Handphone" />
          </div>
          <div className="d--flex pt--0-5">
            <div className="width--50 mr--1">
              <InputLabel style={{ transform: "scale(0.75)" }} id="car">
                Mobil
              </InputLabel>
              <Select
                fullWidth
                labelId="car"
                id="car"
                value="XL7"
                onChange={() => {}}
              >
                <MenuItem value="XL7">XL7</MenuItem>
                <MenuItem value="Ertiga">Ertiga</MenuItem>
                <MenuItem value="Ertiga Sport">All New Ertiga Sport</MenuItem>
                <MenuItem value="Ignis">Ignis</MenuItem>
              </Select>
            </div>
            <div className="width--50">
              <InputLabel style={{ transform: "scale(0.75)" }} id="type">
                Tipe
              </InputLabel>
              <Select
                fullWidth
                labelId="type"
                id="type"
                value="ALPHA A/T"
                onChange={() => {}}
              >
                <MenuItem value="ZETA M/T">ZETA M/T</MenuItem>
                <MenuItem value="ZETA A/T">ZETA A/T</MenuItem>
                <MenuItem value="BETA M/T">BETA M/T</MenuItem>
                <MenuItem value="BETA A/T">BETA A/T</MenuItem>
                <MenuItem value="ALPHA M/T">ALPHA M/T</MenuItem>
                <MenuItem value="ALPHA A/T">ALPHA A/T</MenuItem>
              </Select>
            </div>
          </div>
          <div className="d--flex mt--1-5">
            <Button
              secondary
              className="mr--1 no-border"
              onClick={() => toggleModal(false)}
            >
              <span>Batal</span>
            </Button>
            <Button>
              <span>KIRIM</span>
            </Button>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Container>
      <Helmet>
        <title>Detail Produk XL7</title>
      </Helmet>
      <div className="sticky-nav bg-primary--lightest">
        <section className="pt--0-5 pl--1 pr--1">
          <h5>XL7</h5>
        </section>
        {renderNavTab()}
      </div>
      <section id="overview">
        <Carousell images={images} />
      </section>
      <section className="bg-primary pt--1-5 pb--1-5 pl--2 pr--2">
        <img src={require("assets/gear.png").default} alt="Text" />
        <p className="text-center white text-size--14">
          Suzuki XL7 hadir dengan tampilan maskulin, tangguh dan berkarakter.
          Desain modern SUV 7-Seater memberikan kebanggaan dan kepercayaan bagi
          penggunanya. Dilengkapi dengan fitur canggih semakin membuat XL7
          menjadi SUV yang luar biasa di kelasnya
        </p>
        <Divider className="lighter" />
        <div className="d--flex j-content--center pb--0-5">
          <Button reverse className="mr--1">
            <span className="text-uppercase">Unduh Brosur</span>
          </Button>
          <Button tertiary className="width--70">
            <span className="text-uppercase">Harga</span>
          </Button>
        </div>
      </section>
      <section id="type" className="pt--1-5 pb--1-5 bg-white">
        <h2 className="text-center text-size--18">Tipe & Warna</h2>
        <div className="custom-tab d--flex j-content--center">
          <Tab>
            <div label="XL7 Alpha" tabid={1}>
              <div className="p--1">
                {renderAlphaPictureAndName()}
                <div className="color-tab">{renderAlphaTypeColor()}</div>
              </div>
            </div>
            <div label="XL7 Beta" tabid={2}>
              <div className="p--1">
                {renderBetaPictureAndName()}
                <div className="color-tab">{renderBetaTypeColor()}</div>
              </div>
            </div>
            <div label="XL7 Zeta" tabid={3}>
              <div className="p--1">
                {renderZetaPictureAndName()}
                <div className="color-tab">{renderZetaTypeColor()}</div>
              </div>
            </div>
          </Tab>
        </div>
      </section>
      <section id="exterior" className="bg-primary pt--1-5 pb--1-5">
        <h2 className="text-center text-size--18 white">Eksterior</h2>
        <img
          src={require("assets/products/xl7/xl7-eksterior.png").default}
          alt="XL7 Exterior"
        />
        <div className="text-center pt--1">
          <Button reverse className="width--70">
            <span>Lihat Semua Eksterior</span>
          </Button>
        </div>
      </section>
      <Divider className="transparent" />
      <section id="interior" className="bg-primary pt--1-5 pb--1-5">
        <h2 className="text-center text-size--18 white">Interior</h2>
        <img
          src={require("assets/products/xl7/xl7-interior.png").default}
          alt="XL7 Interior"
        />
        <div className="text-center pt--1">
          <Button reverse className="width--70">
            <span>Lihat Semua Interior</span>
          </Button>
        </div>
      </section>
      <div className="bg-primary-lighter">
        <Divider className="transparent" />
      </div>
      <section id="specification" className="bg-white pt--1-5 pb--1-5">
        <h2 className="text-center text-size--18">Spesifikasi</h2>
        <div>
          <Accordion
            attributes={{
              title: "DIMENSI",
            }}
            modifier={{
              className: "m--1 mb--1",
            }}
          >
            <div className="pt--1 pb--1">
              <div className="d--flex">
                <div className="text-bold text-size--14 width--75">
                  <p className="mb--0-5">Panjang Keseluruhan</p>
                  <p className="mb--0-5">Lebar Keseluruhan</p>
                  <p className="mb--0-5">Tinggi Keseluruhan</p>
                  <p className="mb--0-5">Jarak Poros Roda</p>
                  <p className="mb--0-5">Jarak Pijak Depan</p>
                  <p className="mb--0-5">Jarak Pijak Belakang</p>
                  <p className="mb--0-5">Jarak Terendah</p>
                  <p className="mb--0-5">Radius Putar Minimum</p>
                </div>
                <div className="text-size--14 width--25">
                  <p className="mb--0-5">4,450 mm</p>
                  <p className="mb--0-5">1,775 mm</p>
                  <p className="mb--0-5">1,710 mm</p>
                  <p className="mb--0-5">2,740 mm</p>
                  <p className="mb--0-5">1,515 mm</p>
                  <p className="mb--0-5">1,530 mm</p>
                  <p className="mb--0-5">5,1</p>
                  <p className="mb--0-5">200 mm</p>
                </div>
              </div>
            </div>
          </Accordion>

          <Accordion
            attributes={{
              title: "MESIN",
            }}
            modifier={{
              className: "m--1 mb--1",
            }}
          >
            <div className="pt--1 pb--1">
              <div className="d--flex">
                <div className="text-bold text-size--14 width--50">
                  <p className="mb--0-5">Jenis</p>
                  <p className="mb--0-5">Isi Silinder</p>
                  <p className="mb--0-5">Jumlah Katup</p>
                  <p className="mb--0-5">Jumlah Silinder</p>
                  <p className="mb--0-5">Diameter x Langkah</p>
                  <p className="mb--0-5">Ratio Kompresi</p>
                  <p className="mb--0-5">Daya Maksimum</p>
                  <p className="mb--0-5">Momen Puntir Maks.</p>
                  <p className="mb--0-5">Sistem Bahan Bakar</p>
                </div>
                <div className="text-size--14 width--50">
                  <p className="mb--0-5">K15B</p>
                  <p className="mb--0-5">4</p>
                  <p className="mb--0-5">16</p>
                  <p className="mb--0-5">1.462 cm3</p>
                  <p className="mb--0-5">74,0 x 85,0 mm</p>
                  <p className="mb--0-5">10,5</p>
                  <p className="mb--0-5">77kW</p>
                  <p className="mb--0-5">138 / 4.400Nm / rpm</p>
                  <p className="mb--0-5">Multipoint Injection</p>
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion
            attributes={{
              title: "TRANSMISI",
            }}
            modifier={{
              className: "m--1 mb--1",
            }}
          >
            <div className="pt--1 pb--1">
              <div className="d--flex">
                <div className="text-bold text-size--14 width--50">
                  <p className="mb--0-5">Perbandingan Gigi Akhir</p>
                  <p className="mb--0-5">Ratio Gear</p>
                </div>
                <div className="text-size--14 width--50">
                  <p className="mb--0-5">3.545 / 2.875</p>
                  <p className="mb--0-5">2.875 (AT)</p>
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion
            attributes={{
              title: "BERAT",
            }}
            modifier={{
              className: "m--1 mb--1",
            }}
          >
            <div className="pt--1 pb--1">
              <div className="d--flex">
                <div className="text-bold text-size--14 width--30">
                  <p className="mb--0-5">Berat Kosong</p>
                  <p className="mb--0-5">Berat Kotor</p>
                </div>
                <div className="text-size--14 width--70">
                  <p className="mb--0-5">1.145 kg (5 MT), 1.165 kg (6 AT)</p>
                  <p className="mb--0-5">1.670 kg</p>
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion
            attributes={{
              title: "RANGKA",
            }}
            modifier={{
              className: "m--1 mb--1",
            }}
          >
            <div className="pt--1 pb--1">
              <div className="d--flex">
                <div className="text-bold text-size--14 width--50">
                  <p className="mb--0-5">Sistem Kemudi</p>
                  <p className="mb--0-5">Suspensi Depan</p>
                  <p className="mb--0-5">Suspensi Belakang</p>
                  <p className="mb--0-5">Rem Depan</p>
                  <p className="mb--0-5">Rem Belakang</p>
                  <p className="mb--0-5">Ukuran Ban</p>
                </div>
                <div className="text-size--14 width--50">
                  <p className="mb--0-5">Rack & Pinion</p>
                  <p className="mb--0-5">McPherson Strut</p>
                  <p className="mb--0-5">Drum, leading & trailing</p>
                  <p className="mb--0-5">Ventilated Disc</p>
                  <p className="mb--0-5">Torsion Beam</p>
                  <p className="mb--0-5">195/60 R16</p>
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion
            attributes={{
              title: "KAPASITAS",
            }}
            modifier={{
              className: "m--1 mb--1",
            }}
          >
            <div className="pt--1 pb--1">
              <div className="d--flex">
                <div className="text-bold text-size--14 width--50">
                  <p className="mb--0-5">Tempat Duduk</p>
                  <p className="mb--0-5">Tangki Bahan Bakar</p>
                </div>
                <div className="text-size--14 width--50">
                  <p className="mb--0-5">7 Persons</p>
                  <p className="mb--0-5">45 liters</p>
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      </section>
      <div className="bg-primary-lighter">
        <Divider className="transparent" />
      </div>
      <section id="price" className="bg-white pt--1-5 pb--1-5">
        <h2 className="text-center text-size--18">
          Daftar Harga <br />
          XL7
        </h2>
        <div className="p--1">{renderPricelist()}</div>
        <div className="bg-white d--flex j-content--center pb--0-5">
          <Button secondary className="width--60">
            <span>Lihat Semua Harga Mobil</span>
          </Button>
        </div>
      </section>
      <div className="bg-primary-lighter">
        <Divider className="transparent" />
      </div>
      <Footer paddingBottom={88} />
      {renderFloatingItem()}
      {renderModal()}
    </Container>
  );
};

export default ProductDetail;
