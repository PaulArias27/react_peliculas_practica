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
 
  const peliculas = ["Interestelar", "Batman", "Superman"]
  const [peliculas, setPeliculas] = useState([]);
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Mis Películas Favoritas</h1>

      {peliculas.map((pelicula,index) => (
        <Pelicula key={index} titulo={pelicula}/>
      ))}
    </div>
  )
}

export default App
