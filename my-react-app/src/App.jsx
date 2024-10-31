import React from "react";
import "./index.css";
import Home from "./Home.jsx";

const siteProps = {
  name: "Prince Pandey",
  title: "Frontend Developer",
  email: "princepandey4873@gmail.com",
  gitHub: "https://github.com/Pr1ncePandey/",
  instagram: "microsoft",
  linkedIn: "satyanadella",
  medium: "",
  twitter: "microsoft",
  youTube: "",
};

function App() {

  return (
    <div id="main">
      <Home  name={siteProps.name} title={siteProps.title}></Home>
    </div>
  )
}

export default App;
