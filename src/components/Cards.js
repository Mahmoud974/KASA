import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ item }) => {
  return (
    <NavLink to={`/description/${item.id}`}>
      <li
        className="card_item"
        style={{
          background: `linear-gradient(
        rgba(181, 112, 112, 0), 
        rgba(0,0,0, 0.6)
      ),url(${item.cover})`,
        }}
      >
        <h2>{item.title}</h2>
      </li>
    </NavLink>
  );
};

export default Cards;
