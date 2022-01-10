import './App.css';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';

function App() {
  return (
    <main>
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
    </main>
  );
}

export default App;
