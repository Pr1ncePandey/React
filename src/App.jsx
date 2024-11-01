import React from "react";
import "./index.css";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";
import Footer from "./Footer.jsx";


const siteProps = {
  name: "Prince Pandey",
  title: "Frontend Developer",
  email: "princepandey4873@gmail.com",
  gitHub: "https://github.com/Pr1ncePandey/",
  instagram: "",
  linkedIn: "https://www.linkedin.com/in/pr1nce-pandey/",
  medium: "",
  twitter: "https://x.com/Pr1ncePandey",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

function App() {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </div>
  );
};

export default App;
