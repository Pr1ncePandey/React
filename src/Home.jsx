import React from "react";
import downArrow from "./assets/down-arrow.png";
import PropTypes from "prop-types";
import image from "./assets/img-3.jpg"

const imageAltText = "Home Background";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <a href="#about"><img src={downArrow} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} /></a>
      </div>
    </section>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;