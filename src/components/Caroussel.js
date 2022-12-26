import React from "react";
import { useState } from "react";
//Style
import arrowLeft from "../img/arrowLeft.svg";
import arrowRight from "../img/arrowRight.svg";

//Composant carrousel des biens
const Caroussel = ({ card }) => {
  const [current, setCurrent] = useState(0);
  const length = card.pictures.length;
  /**
   * Actionner le bouton suivant
   */
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  /**
   * Actionner le bouton precedent
   */
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {card.pictures.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "slide slider__active-picture"
                : "slide slider__inactive-picture"
            }
          >
            {index === current && (
              <img src={picture} alt={card.title} className="slider__picture" />
            )}
            {index === current && (
              <strong className="image-number">
                {current + 1}/{card.pictures.length}
              </strong>
            )}
          </div>
        );
      })}

      {length > 1 ? (
        <div className="arrows">
          <div className="slider__previous" onClick={prevSlide}>
            <img
              src={arrowLeft}
              alt="flèche de gauche"
              className="slider__previous-icon"
            />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img
              src={arrowRight}
              alt="flèche de droite"
              className="slider__next-icon"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Caroussel;
