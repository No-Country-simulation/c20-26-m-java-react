import React from "react";
import "./home.scss";
import dogImage from "../../assets/images/Image.png";
const Home = () => {
  return (
    <div className="home-container">
      <div className="left-section">
        <h1>Plataforma de cuidado de mascotas</h1>
      </div>
      <div className="right-section">
        <img src={dogImage} alt="Dog" />
      </div>
    </div>
  );
};

export default Home;
