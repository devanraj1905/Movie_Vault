import { useEffect, useState } from "react";

export function UseFetch(apiPath = "trending/movie/week") {

  const [movie, setMovie] = useState([]);
  const key = import.meta.env.VITE_API_KEY;

  useEffect(() => {

    async function fetchMovies() {

      const separator = apiPath.includes("?") ? "&" : "?";

      const url =
        `https://api.themoviedb.org/3/${apiPath}${separator}api_key=${key}`;

      const res = await fetch(url);
      const data = await res.json();

      if (data.results) {
        setMovie(data.results);
      }

    }

    fetchMovies();

  }, [apiPath, key]);

  return { movie };
}