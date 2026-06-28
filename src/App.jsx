
import './App.css'

function Pelicula({titulo}){

  return (
    <div>
      <h3>{titulo}</h3>
    </div>
  );
}

function App() {
 

  return (
    <div>
      <h1>Mis Películas Favoritas</h1>
    <Pelicula titulo='Interestelar'/>
    <Pelicula titulo='Batman'/>

    </div>
  )
}

export default App
