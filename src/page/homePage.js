import React from "react";
import Navbar from "../components/navbar/index";
import Introduction from "../components/introduction/index";
import About from "../components/about/index";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Introduction />
      <About />
    </>
  );
}
