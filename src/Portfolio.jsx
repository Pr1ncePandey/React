import React from "react";
import image from "./assets/coding.png";

const imageAltText = "Project Background";

const projectList = [
    {
      title: "Portfolio Template",
      description:
        "Designed and developed a personal portfolio website using HTML, CSS, and Bootstrap, featuring a responsive and modern interface. This project demonstrated my ability to effectively showcase my skills and projects while ensuring an optimal user experience across devices.",
      url: "https://pr1nce-website.netlify.app/",
    },
    {
      title: "Signup Page",
      description:
        "Created a user-friendly signup page using HTML, CSS and JavaScript. This project involved designing an intuitive interface for user registration, focusing on both functionality and aesthetic appeal.",
      url: "https://pr1nce-signup-page.netlify.app/",
    },
    {
      title: "My Resume Site",
      description:
        "Created a sleek and responsive resume website using HTML and CSS. Hosted on GitHub Pages, this project showcases my web development skills, including layout design, styling, and responsive techniques.",
      url: "https://pr1ncepandey.github.io/Resume-Website/",
    },
    {
      title: "Landing Page",
      description:
        "Developed a responsive landing page using HTML, CSS, and Bootstrap, focusing on creating an engaging user experience and intuitive navigation. This project demonstrated my ability to leverage front-end frameworks to enhance design and functionality.",
      url: "https://pr1nce-move-assured.netlify.app/",
    },
  ];
  
  const Portfolio = () => {
    return (
      <section className="padding" id="portfolio">
        <h2 style={{ textAlign: "center" }}>Projects</h2>
        <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
          <div style={{ maxWidth: "40%", alignSelf: "center" }}>
            <img
              src={image}
              style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }}
              alt={imageAltText}
            />
          </div>
          <div className="container">
            {projectList.map((project) => (
              <div className="box" key={project.title}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                </a>
                <p className="small">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Portfolio;