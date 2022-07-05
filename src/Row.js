import React, { useState, useEffect } from "react";

function Row({ title }) {
  //Store some info - a way to write variables in react
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // Pull in the information when this code loads
    // if we leave the [] blank, run once when the row loads, and don't run it again
  }, []);

  return (
    <div>
      <h2>{title}</h2>

      {/* Container -> With posters inside */}
    </div>
  );
}

export default Row;
