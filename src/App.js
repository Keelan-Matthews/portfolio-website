import './App.css';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <main>
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
