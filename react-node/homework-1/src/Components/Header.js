import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import User from "./User";
import menuItems from "../configs/configMenuItems";
import "../css/header.css";

const Header = () => (
  <header className="header">
    <Logo />
    <Nav items={menuItems} />
    <User name="Bob Kelly"/>
  </header>
);

export default Header;
