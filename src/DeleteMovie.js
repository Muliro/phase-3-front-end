










function DeleteMovie({id, movies, setMovies}){
  console.log(movies);
  function handleDeleteMovie(id) {
    const updatedMovies = (movies || []).filter((movie) => movie.id !== id);
    setMovies([...updatedMovies]);
  }
    function handleDeleteClick(){
        fetch(`http://localhost:9292/movies/${id}`, {
          method: "DELETE",
        });
    
        handleDeleteMovie(id);
      }

      return(<button type = "button" onClick = {handleDeleteClick}>Delete</button>
      )


}

export default DeleteMovie;