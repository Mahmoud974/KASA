import { React, useState } from "react";

//Composant collapse about
const Collapse = ({ card }) => {
  const [display, setDisplay] = useState("none");
  const [isActive, setIsActive] = useState("");
  const [rotate, setRotate] = useState("180deg");
  const [arrow, setArrow] = useState(true);

  /**
   * Actionner le collapse d'about dynamiquement
   */
  const inputCollapse = () => {
    setIsActive(isActive === "" ? "active" : "");
    setRotate(rotate === "180deg" ? "0deg" : "180deg");
    setDisplay(display === "block" ? "none" : "block");
    setArrow(!arrow);
  };

  return (
    <div className="card">
      <div className="collapse">
        <h1>{card.title}</h1>
        <i
          className={
            arrow
              ? "fa-sharp fa-solid fa-angle-down"
              : "fa-sharp fa-solid fa-angle-up"
          }
          onClick={() => inputCollapse()}
        ></i>
      </div>
      <p className={`texte ${isActive}`} style={{ display: `${display}` }}>
        {card.content}
      </p>
    </div>
  );
};

export default Collapse;
