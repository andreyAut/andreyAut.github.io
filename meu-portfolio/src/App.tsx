import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./styles/index.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
