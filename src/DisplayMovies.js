






import DeleteMovie from "./DeleteMovie";
import EditMovie from "./EditMovie";















function DisplayMovies({movies, setMovies}){
  
    const mySet = new Set(movies)
    const uniqueValues = [...mySet]
    const noDups = uniqueValues.map((movie, i) => (<ul className="display" key = {i.toString()}>
        <li>
        <h3>{movie.title}</h3><img src = {movie.image} alt = "img"></img> 
         <DeleteMovie className = "deleteMovie"  id = {movie.id}>  movies = {movies} onDeleteMovie = {setMovies}</DeleteMovie>
        <EditMovie className = "EditMovie" id = {movie.id}> movies = {movies} onEditMovie = {setMovies} lead = {movie.lead}, release_date = {movie.release_date}
        in_theaters = {movie.in_theaters}, image = {movie.image} director = {movie.director}</EditMovie> 
        </li>
    </ul>))


      
    return (
    
    <div className = "movies">
           {noDups}  
    </div>
    
)

        
}


export default DisplayMovies;