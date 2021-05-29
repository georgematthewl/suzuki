/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import classNames from "classnames";

import "./Accordion.scss";

const Accordion = ({ attributes, modifier, children }) => {
  const { title } = attributes;
  const { disabled, className, defaultOpen } = modifier;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (defaultOpen) {
      setIsOpen(defaultOpen);
    }
  }, []);

  return (
    <div
      className={classNames(className, "v_accordion-wrapper", {
        "v_accordion--open": isOpen,
        "v_accordion-disabled": disabled,
      })}
    >
      <div
        className="v_accordion-head d--flex a-item--center p--1"
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="w--90">
          <h4 className="text-size--14 mb--0">{title}</h4>
        </div>
        <img
          className={`v_accordion-arrow ${isOpen ? "open" : ""}`}
          src={require("assets/icon/chevron-down.svg").default}
          alt="Arrow"
        />
      </div>
      <div className="v_accordion-body">
        <div className="v_accordion-content pr--1 pl--1">{children}</div>
      </div>
    </div>
  );
};

Accordion.defaultProps = {
  attributes: {
    title: "title",
  },
  modifier: {
    disabled: false,
    className: "",
    defaultOpen: false,
  },
};

export default Accordion;
