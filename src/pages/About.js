import { React, useState } from "react";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { dataAbout } from "../data/dataAbout";
//Page d'à propos
const About = () => {
  const data = useState(dataAbout);

  return (
    <>
      <section className="about">
        <Navigation />

        <div className="bannerImgDefault"></div>

        <div className="boxAbout">
          <div className="list-cards">
            {data[0].map((card, index) => (
              <Collapse card={card} key={index} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
