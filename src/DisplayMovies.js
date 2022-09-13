import { useState } from "react";















function DisplayMovies({movies, setMovies, onDeleteMovie}){
    function handleDeleteMovie(id) {
        fetch(`http://localhost:9292/movies/${id}`, {
          method: "DELETE",
        });
    
        onDeleteMovie(id);
      }
    const mySet = new Set(movies)
    const uniqueValues = [...mySet]
    const noDups = uniqueValues.map((movie, i) => (<h3 key = {i.toString()}>
         <p>{movie.title} </p><button type = "button" className = "deletebtn" onClick = {handleDeleteMovie}>Delete</button>
    </h3>))

    console.log(uniqueValues)

      
    return (
    <div className = "movies">
           {noDups}  
    </div>
)

        
}


export default DisplayMovies;