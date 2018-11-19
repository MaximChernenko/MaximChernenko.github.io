import React from "react";
import "../css/dish.css";

const Dish = ({ name, description, imageSrc, price, ingredients }) => (
  <div className="dish">
    <p className="dish__name">{name}</p>
    <img className="dish__img" src={imageSrc} alt="img" />
    <p>{description}</p>
    <p>{price}</p>
    <p><b>Ingredients:</b></p>
    <ul>
      {ingredients.map(item => (
        <li key={item.id}>
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Dish;
