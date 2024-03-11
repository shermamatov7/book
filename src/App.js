import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/index';
import Categorie from './components/Categori';
import Jurok from './components/Jurok/index.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Categorie />
      <Jurok/>
    </div>
  );
}

export default App;
