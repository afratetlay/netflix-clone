import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

// The base URL we need for the images
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  //Store some info - a way to write variables in react
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // Pull in the information when this code loads

    // This is how you write async into useEffect, this will fetch the data and wait.
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results); // We are going to request the data .results
      return request;
    }
    fetchData();
    // if we leave the [] blank, run once when the row loads, and don't run it again
  }, [fetchUrl]);
  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/**  Several Row poster */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`} // Get the larger styles if it's a larger row
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path // if you are using a LargeRow then use poster_path otherwise use the movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* Container -> With posters inside */}
    </div>
  );
}

export default Row;
