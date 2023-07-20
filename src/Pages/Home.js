import React from "react";
import Header from "../Components/Header";
import MyProjects from "../Components/MyProjects";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

const Home = () => {
  return (
    <div>
      <Header />
      <MyProjects />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
