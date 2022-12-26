import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ item }) => {
  return (
    <NavLink to={`/description/${item.id}`}>
      <li
        className="card_item"
        style={{ backgroundImage: `url(${item.cover})` }}
      >
        <h2>{item.title}</h2>
      </li>
    </NavLink>
  );
};

export default Cards;
