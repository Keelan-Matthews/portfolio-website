import "./App.css";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { useState, useEffect } from "react";
import $ from "jquery";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      $(window).on("load", loadedFunction());
    }, 2500);
  }, 2000);

  function loadedFunction() {
    setLoading(false);
  }

  return (
    <main>
      <div className={loading ? "" : "content-hide"}>
        <Loader />
      </div>
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
