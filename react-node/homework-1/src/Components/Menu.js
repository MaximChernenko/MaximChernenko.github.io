import React from "react";
import Dish from "./Dish";
import CommentArea from "./CommentArea";
import "../css/menu.css";

const Menu = ({ data }) => (
  <ul className="dish-menu">
    {data.map(item => (
      <li key={item.id}>
        <Dish
          name={item.name}
          description={item.description}
          imageSrc={item.image}
          price={item.price}
          ingredients={item.ingredients}
        />
        <CommentArea/>
      </li>
    ))}
  </ul>
);

export default Menu;
