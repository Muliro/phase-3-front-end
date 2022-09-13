








import './App.css';
import React, {useState, useEffect} from "react";
import DisplayMovies from './DisplayMovies';
import NewMovie from './NewMovie';
import Search from "./Search";


function App() {
  const defaultLead = {lead: "Tom Cruise"}
  const defaultDirector = {director: "Steven spielberg"}
  const defaultShowing = {in_theaters: true}
  const defaultDate = {release_date:6}
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [id, setId] = useState();
  useEffect(() => {
    fetch("http://localhost:9292/movies")
      .then((r) => r.json())
      .then((movies) => setMovies(movies));
  }, []);

  function handleAddMovie(newMovie){
    setMovies([...movies, newMovie])
  }

  function handleDeleteMovie(id) {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  }

  
  return (<div>
  
    <DisplayMovies movies = {movies} class = "movies" setMovies = {setMovies} onDeleteMovie = {handleDeleteMovie}/>
    <NewMovie movies = {movies} setMovies = {setMovies} onAddMovie = {handleAddMovie} lead = {defaultLead} director = {defaultDirector}
    showing = {defaultShowing} date = {defaultDate}/>
    <Search search={search} onSearch={setSearch} />

  </div>)
    
}

export default App;
