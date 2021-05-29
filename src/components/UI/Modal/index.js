import React from "react";

import Backdrop from "components/UI/Backdrop";

import "./Modal.scss";

const Modal = ({ show, children, onClick }) => {
  return (
    <>
      <Backdrop isHide={!show} onClick={onClick} zIndex={1002} />
      <div className={`modal ${show ? "show" : ""}`}>{children}</div>
    </>
  );
};

export default Modal;
