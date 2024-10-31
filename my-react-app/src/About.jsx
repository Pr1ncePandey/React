import React from "react";
import image from "./assets/motion-background.jpg";

const imageAltText = "About Background";

const description = "I specialize in crafting responsive and user-friendly web interfaces. My focus is on delivering clean, efficient code and intuitive user experiences. Always eager to learn and embrace new challenges to continuously improve my skill set.";

const skillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React",
    "Git & GitHub"
];

const detailOrQuote = "A quote that resonates with me is by Steve Jobs: “Design is not just what it looks like and feels like. Design is how it works.”";

const About = () => {
    return (
        <section className="padding" id="about">
          <img className="background" src={image} alt={imageAltText} />
          <div
            style={{
              backgroundColor: "white",
              width: "50%",
              padding: "4rem",
              margin: "3rem auto",
              textAlign: "center",
            }}>
            <h2>About Myself</h2>
            <p className="large">{description}</p>
            <hr />
            <ul
              style={{
                textAlign: "left",
                columns: 2,
                fontSize: "1.25rem",
                margin: "2rem 3rem",
                gap: "3rem",
              }}
            >
              {skillsList.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <hr />
            <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
          </div>
        </section>
      );
};

export default About;