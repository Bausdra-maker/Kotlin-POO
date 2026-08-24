import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Persona from './components/Persona'
import TarjetaPelicula from './components/TarjetaPelicula'

function App() {
  const [count, setCount] = useState(0);

  const peliculas = [
    { id: 1, titulo: "Parasite",     año: 2019, vista: false },
    { id: 2, titulo: "Pulp Fiction",  año: 1994, vista: true  },
    { id: 3, titulo: "Whiplash",      año: 2014, vista: false },
    { id: 4, titulo: "The Matrix",    año: 1999, vista: true  },
  ];

  return (
    <>
      <Persona nombre="Bautista" apellido="La Roca" />

      <section className="lista-peliculas">
        <h2>Lista de Películas</h2>
        {peliculas.map((peli) => (
          <TarjetaPelicula
            key={peli.id}
            titulo={peli.titulo}
            año={peli.año}
            vista={peli.vista}
          />
        ))}
      </section>

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  );
}

export default App;