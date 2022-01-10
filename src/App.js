import './App.css';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {
  return (
    <main>
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
