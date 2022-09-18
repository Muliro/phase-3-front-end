








import './App.css';
import React, {useState, useEffect} from "react";
import DisplayMovies from './DisplayMovies';
import NewMovie from './NewMovie';


function App() {
  const defaultLead = {lead: "Tom Cruise"}
  const defaultDirector = {director: "Steven spielberg"}
  const defaultShowing = {in_theaters: true}
  const defaultDate = {release_date:6}
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/movies")
      .then((r) => r.json())
      .then((movies) => setMovies([...movies, movies]));
  }, []);

  function handleAddMovie(newMovie){
    setMovies([...movies, newMovie])
  }

  function handleDeleteMovie(id) {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  }

  
  return (<div>
  
    <DisplayMovies movies = {movies}  setMovies = {setMovies} onDeleteMovie = {handleDeleteMovie}/>
    <NewMovie movies = {movies} setMovies = {setMovies} onAddMovie = {handleAddMovie} lead = {defaultLead} director = {defaultDirector}
    showing = {defaultShowing} date = {defaultDate}/>
    

  </div>)
    
}

export default App;
