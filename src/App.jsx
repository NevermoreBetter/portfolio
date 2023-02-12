import { useState } from "react";
import "normalize.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App my-0 mx-auto w-[90%] flex flex-col items-center text-center">
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
