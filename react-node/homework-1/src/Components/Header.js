import React from "react";
import "../css/header.css";

const Header = () => (
  <header className="header">
    <a className="header__logo" href="google.com">
      Logo
    </a>
    <nav>
      <ul className="header__list">
        <li className="header__item">
          <a className="header__link" href="google.com">
            Item1
          </a>
        </li>
        <li className="header__item">
          <a className="header__link" href="google.com">
            Item2
          </a>
        </li>
        <li className="header__item">
          <a className="header__link" href="google.com">
            Item3
          </a>
        </li>
        <li className="header__item">
          <a className="header__link" href="google.com">
            Item4
          </a>
        </li>
      </ul>
    </nav>
    <div className="user">
      <p className="user__text">Bob Kelly</p>
    </div>
  </header>
);

export default Header;