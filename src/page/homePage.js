import React from "react";
import Navbar from "../components/navbar/index";
import Introduction from "../components/introduction/index";
import About from "../components/about/index";
import Skills from "../components/skills/index";
import Projects from "../components/projects/index";

export default function HomePage() {
  return (
    <>
      <Introduction />
      <Skills />
      <About />
      <Projects />
    </>
  );
}
