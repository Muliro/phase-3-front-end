




import React, { useState } from "react";

function NewMovie({ movie, onAddMovie, lead, director, showing, date }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        lead: lead,
        director: director,
        in_theaters: showing,
        release_date: date
      }),
    })
      .then((r) => r.json())
      .then((newMovie) => {
        onAddMovie(newMovie);
        setTitle("");
      });
  }

  return (
    <form className="new-movie" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        autoComplete="off"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default NewMovie;