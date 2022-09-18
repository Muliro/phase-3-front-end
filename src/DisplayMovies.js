






import DeleteMovie from "./DeleteMovie";
import EditMovie from "./EditMovie";















function DisplayMovies({movies, setMovies}){
  
    const mySet = new Set(movies)
    const uniqueValues = [...mySet]
    const noDups = uniqueValues.map((movie, i) => (<h3 key = {i.toString()}>
         <img src = {movie.image} alt = ""></img>
        <p>{movie.title} <DeleteMovie id = {movie.id}>  movies = {movies} setMovies = {setMovies}</DeleteMovie>
        <EditMovie id = {movie.id}> movies = {movies} setMovies = {setMovies}</EditMovie> </p>
    </h3>))

    console.log(uniqueValues)

      
    return (
    
    <div className = "movies">
           {noDups}  
    </div>
    
)

        
}


export default DisplayMovies;