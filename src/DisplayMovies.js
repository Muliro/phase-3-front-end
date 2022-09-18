






import DeleteMovie from "./DeleteMovie";
import EditMovie from "./EditMovie";















function DisplayMovies({movies, setMovies}){
  
    const mySet = new Set(movies)
    const uniqueValues = [...mySet]
    const noDups = uniqueValues.map((movie, i) => (<div className="display" key = {i.toString()}>
         <img src = {movie.image} alt = "img"></img>
        {movie.title} <DeleteMovie id = {movie.id}>  movies = {movies} onDeleteMovie = {setMovies}</DeleteMovie>
        <EditMovie id = {movie.id}> movies = {movies} onEditMovie = {setMovies} lead = {movie.lead}, release_date = {movie.release_date}
        in_theaters = {movie.in_theaters}, image = {movie.image} director = {movie.director}</EditMovie> 
    </div>))


      
    return (
    
    <div className = "movies">
           {noDups}  
    </div>
    
)

        
}


export default DisplayMovies;