import React from "react";

//Composant de Tag
const Tag = ({ card }) => {
  return (
    <div className="list-tag">
      {card.tags.map((tag, index) => {
        return <li key={index}>{tag}</li>;
      })}
    </div>
  );
};

export default Tag;
