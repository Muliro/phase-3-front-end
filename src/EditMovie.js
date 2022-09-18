
import React, { useState } from "react";







function EditMovie({id, movies, setMovies, release_date, director, lead, in_theaters, image}){
    const [movieTitle, setMovieTitle] = useState([]);
    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/movies/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: movieTitle,
        director: director,
        release_date: release_date,
        lead: lead,
        in_theaters: in_theaters,
        image: image

      }),
    })
      .then((r) => r.json())
      .then((updatedMovie) => setMovies(updatedMovie), []);
  }
  console.log(movieTitle)
  return (
    <form className="edit-movie" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="movie"
        autoComplete="off"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}



export default EditMovie;