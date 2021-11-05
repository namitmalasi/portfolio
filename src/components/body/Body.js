import React from "react";
import About from "./about/About";
import "./Body.css";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Skills from "./Skills/Skills";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
