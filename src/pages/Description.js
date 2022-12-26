import { useEffect, React, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Tag from "../components/Tag";
import Navigation from "../components/Navigation";
//SVG stars
import redstar from "../img/redStar.svg";
import greystar from "../img/greyStar.svg";
import Caroussel from "../components/Caroussel";
import Descriptions from "../components/Descriptions";
import Equipement from "../components/Equipement";

//Page de description du bien
const Description = () => {
  const [data, setData] = useState([]);
  const stars = [1, 2, 3, 4, 5];
  /**
   * Récuperer les données de la data articles sur le fichier JSON
   */
  useEffect(() => {
    fetch("http://localhost:3004/articles")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  /**
   * Récuperer l'id avec useParams
   */
  const { id } = useParams();

  return (
    <>
      <article className="description">
        <Navigation />

        {data
          .filter((card) => card.id === id)
          .map((card) => (
            <div key={card.id} className="description-information">
              <Caroussel card={card} />

              <div className="contents">
                <div className="informations">
                  <div>
                    <h1>{card.title}</h1>
                    <h2>{card.location}</h2>
                    <ul className="list-hashtag">
                      <Tag card={card} />
                    </ul>
                  </div>
                  <div>
                    <div className="customer">
                      <div className="namePhoto">
                        <p>{card.host.name}</p>
                        <img
                          src={card.host.picture}
                          alt={card.host.name}
                          className="circle"
                        />
                      </div>

                      <div className="rating">
                        <div className="stars">
                          <div className="rating">
                            {stars.map((star) =>
                              card.rating >= star ? (
                                <img
                                  key={star.toString()}
                                  className="rating__icon"
                                  src={redstar}
                                  alt="note"
                                />
                              ) : (
                                <img
                                  key={star.toString()}
                                  className="rating__icon"
                                  src={greystar}
                                  alt="note"
                                />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="box-contains">
                  <Descriptions card={card} />
                  <Equipement card={card} />
                </div>
              </div>
            </div>
          ))}
      </article>
      <Footer />
    </>
  );
};

export default Description;
