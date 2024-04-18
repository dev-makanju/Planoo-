import React from "react";
import "./Design.css";

const ButtonAtom = ({ onClick, children }) => {
  return (
    <button className="btn button" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonAtom;
