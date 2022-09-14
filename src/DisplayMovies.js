






import DeleteMovie from "./DeleteMovie";















function DisplayMovies({movies, setMovies}){
  
    const mySet = new Set(movies)
    const uniqueValues = [...mySet]
    const noDups = uniqueValues.map((movie, i) => (<h3 key = {i.toString()}>
         <p>{movie.title} <DeleteMovie id = {movie.id}>  movies = {movies} setMovies = {setMovies}</DeleteMovie> </p>
    </h3>))

    console.log(uniqueValues)

      
    return (
    
    <div className = "movies">
           {noDups}  
    </div>
    
)

        
}


export default DisplayMovies;