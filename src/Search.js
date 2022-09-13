





import React from "react";

function Search({ search, onSearch }) {

  function handleSearchMovie(e){
    e.preventDefault()
    useEffect(() => {
      fetch("http://localhost:9292/movies")
        .then((r) => r.json())
        .then((movies) => onSearch(movies));
    }, []);
  }
  return (
    <nav>
      <p>Search for a movie in our database</p>
      <input type = "text"></input>
      <input
        type="submit"
        name="search"
        placeholder="Search..."
        autoComplete="off"
        value={search}
        onChange={e => onSearch(e.target.value)}
      />
    </nav>
  );
}

export default Search;


