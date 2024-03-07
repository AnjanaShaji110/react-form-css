import React from "react";
import "../css/Header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate("/")
    };
    const addContact = () => {
        navigate("/addContact")
    };
  return (
    <div className="navbar">
      <a className="active" onClick={home}>
        <i className="fa fa-fw fa-home"></i> Home
      </a>
      <a onClick={addContact}>
        <i className="fa fa-fw fa-envelope"></i> Add Contact
      </a>
    </div>
  );
};

export default Header;
