import React from "react";

const Nav = ({ items }) => (
  <nav>
    <ul className="header__list">
      {items.map(item => (
        <li key={item.id} className="header__item">
          <a className="header__link" href="google.com">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
