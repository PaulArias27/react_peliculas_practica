import { useState } from 'react';
import './App.css'


function Pelicula({titulo}){

  const [esFavorita, setEsFavorita] = useState(false);

  return (
    <div onClick={() => setEsFavorita(!esFavorita) }
        style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "8px 0",
        borderRadius: "8px",
        cursor: "pointer",
        backgroundColor: esFavorita ? "#fff8b3" : "#f5f5f5",
        fontWeight: esFavorita ? "bold" : "normal",
      }}>

      <h3>{titulo} {esFavorita ? "⭐" : "" }</h3>
    </div>
  );
}

function App() {
 
  const [peliculas, setPeliculas] = useState(["Interestelar", "Batman", "Superman"]);
  const [nuevaPelicula, setNuevaPelicula] = useState("");
  const agregarPelicula = () =>{
    if(nuevaPelicula.trim() === ""){
      return;
    }else{
      setPeliculas([...peliculas, nuevaPelicula]);
      setNuevaPelicula("");
    }
  }

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Mis Películas Favoritas</h1>

      <div style={{ marginBottom: "20px" }}>
        <input type='text' 
              value={nuevaPelicula} 
              onChange={(e) => setNuevaPelicula(e.target.value)}
              placeholder='Escribe una pelicula...'
              style={{
            padding: "8px",
            marginRight: "10px",
            width: "250px",
          }}
          onKeyDown={(e) =>{
            if(e.key === "Enter"){
              agregarPelicula();
            }
          }}>
        </input>

        <button onClick={agregarPelicula} style={{
            padding: "8px 15px",
            cursor: "pointer",
          }}>
          Agregar
        </button>
      </div>

      {peliculas.map((pelicula,index) => (
        <Pelicula key={index} titulo={pelicula}/>
      ))}
    </div>
  )
}

export default App
