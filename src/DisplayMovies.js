














function DisplayMovies({movies, setMovies}){
    const noDups = movies.map((movie) => (<p key = {movie.id.toString()}>
        title = {movie.title} 
        release_date = {movie.release_date}
        director = {movie.director}
        lead = {movie.lead}
    </p>))

    console.log(noDups);

      
    return (
    <div className = "movies">
            {noDups}    
    </div>
)

        
}


export default DisplayMovies;