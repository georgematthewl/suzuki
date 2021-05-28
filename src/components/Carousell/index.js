import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "./Carousell.scss";

SwiperCore.use([Pagination, Navigation]);

const Carousell = ({ images }) => {
  function renderSwiperSlide() {
    return images.map((image, index) => (
      <SwiperSlide key={index}>
        <img src={require(`assets/${image.url}`).default} alt="Banner" />
      </SwiperSlide>
    ));
  }

  function renderCustomNextButton() {
    return (
      <div className="swiper-button-next">
        <img
          src={require("assets/icon/ar.svg").default}
          alt="Arrow Right Icon"
        />
      </div>
    );
  }

  function renderCustomPrevButton() {
    return (
      <div className="swiper-button-prev">
        <img
          src={require("assets/icon/al.svg").default}
          alt="Arrow Left Icon"
        />
      </div>
    );
  }

  function renderCustomPagination() {
    return (
      <div className="custom-pagination">
        <div className="swiper-pagination" />
      </div>
    );
  }
  return (
    <>
      <Swiper
        className="swiper"
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {renderSwiperSlide()}
        {renderCustomNextButton()}
        {renderCustomPrevButton()}
        {renderCustomPagination()}
      </Swiper>
    </>
  );
};

export default Carousell;
