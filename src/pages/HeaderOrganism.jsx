// Header.js
import React from "react";
import SearchMolecule from "./SearchMolecule";
import ButtonAtom from "./ButtonAtom";
import "./Design.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Organism</h1>
      <SearchMolecule />
      <ButtonAtom>Sign In</ButtonAtom>
    </div>
  );
};

export default Header;
