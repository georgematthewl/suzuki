import React from "react";
import classNames from "classnames";

import "./Button.scss";

const Button = ({
  id,
  className,
  onClick,
  disabled,
  secondary,
  tertiary,
  small,
  children,
}) => {
  return (
    <button
      className={`btn ${classNames(className, {
        secondary,
        tertiary,
        small,
        disabled,
      })}`}
      disabled={disabled}
      id={id}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
