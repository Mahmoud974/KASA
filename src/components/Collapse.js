import { React, useState } from "react";

const Collapse = ({ card, title, blocs, cardAbout, aboutAccess }) => {
  const [collapse, setCollapse] = useState(false);
  const [display, setDisplay] = useState("none");
  const [isActive, setIsActive] = useState("");
  const [rotate, setRotate] = useState("180deg");

  /**
   * Actionner le collapse du produit descriptif
   */
  const inputCollapse = () => {
    setIsActive(isActive === "" ? "active" : "");
    setRotate(rotate === "180deg" ? "0deg" : "180deg");
    setDisplay(display === "block" ? "none" : "block");
    setCollapse(!collapse);
  };
  return (
    <div className="card">
      <div className="collapse">
        {aboutAccess ? <h1> {cardAbout.title}</h1> : <h3> {title}</h3>}

        <i
          className={
            collapse
              ? "fa-sharp fa-solid fa-angle-up"
              : "fa-sharp fa-solid fa-angle-down"
          }
          onClick={() => inputCollapse()}
        ></i>
      </div>
      <div
        className={`list-description ${isActive}`}
        style={{ display: `${display}` }}
      >
        {aboutAccess ? (
          <p className={`texte ${isActive}`} style={{ display: `${display}` }}>
            {cardAbout.content}
          </p>
        ) : blocs ? (
          card.map((equipement, index) => {
            return <li key={index}>{equipement}</li>;
          })
        ) : (
          <p>{card}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
