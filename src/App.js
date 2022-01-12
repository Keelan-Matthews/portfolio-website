import './App.css';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
// import { Loader } from './components/Loader';
// import { useState, useEffect } from 'react';

function App() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 4000)
  // }, [])

  return (
    <main>
      {/* {
        loading ?
          <Loader />
        : */}
          <div>
            <NavBar />
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
      {/* } */}
    </main>
  );
}

export default App;
