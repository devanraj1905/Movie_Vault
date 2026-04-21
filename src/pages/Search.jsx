import React, { useEffect } from "react";
import { Card } from "../component/Card";
import { useSearchParams } from "react-router-dom";
import { UseFetch } from "../useFetch/UseFetch.jsx";

export function Search() {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
const { movie } =UseFetch(
  `search/movie?query=${encodeURIComponent(queryTerm)}&region=IN&language=en-US`
)

const tamilMovies = [
  ...movie.filter(m => m.original_language === "ta"),
  ...movie.filter(m => m.original_language !== "ta")
];
  useEffect(() => {
    document.title = `Search result for ${queryTerm}`;
  }, [queryTerm]);

  return (
    <div className="container">

      <h5 className="text-danger border-bottom">
        {tamilMovies.length === 0
          ? `No results found for ${queryTerm}`
          : `Result for ${queryTerm}`}
      </h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">

        {tamilMovies.map((movies) => (
          <Card key={movies.id} movie={movies} />
        ))}

      </div>

    </div>
  );
}