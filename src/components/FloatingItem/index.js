import React from "react";

import "./FloatingItem.scss";

const FloatingItem = ({ children }) => {
  return (
    <section className="d--flex j-content--center floating width--100">
      <div className="d--flex a-items--center j-content--center floating--wrapper p--0-5">
        {children}
      </div>
    </section>
  );
};

export default FloatingItem;
