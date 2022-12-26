import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

//Page d'acceuil
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3004/articles")
      .then((data) => data.json())

      .then((data) => setData(data));
  }, []);

  return (
    <>
      <main className="home">
        <Navigation />
        <Banner />

        <div className="home-cards">
          <ul>
            {data.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
