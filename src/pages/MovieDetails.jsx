import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import backup from "/src/assets/backup.jpg";

export function MovieDetails() {

  const params = useParams();

  const [movie, setMovie] = useState({});

  const key = import.meta.env.VITE_API_KEY;

 const image = movie.poster_path
  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
  : backup;

  function convertminutes(minutes) {
    if (!minutes) return "N/A";

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${hours}h ${mins}m`;
  }

  useEffect(() => {

    async function fetchMovies() {

      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`
      );

      const data = await res.json();

      setMovie(data);
      console.log(data)

    }

    fetchMovies();

  }, [params.id, key]);

  useEffect(() => {

    if (movie.title) {
      document.title = movie.title;
    }

  }, [movie.title]);

  return (
    <main className="container overflow-auto">

      <h5 className="text-danger py-2 mb-3 border-bottom">
        {movie.title}
      </h5>

      <div className="row">

        <div className="col-md-4">
          <img src={image} className="img-fluid img-thumbnail" />
        </div>

        <div className="col-md-8">

          <h4 className="py-3">{movie.title}</h4>

          <p >{movie.overview}</p>

          {movie.genres && (
            <p className="d-flex gap-3">
              {movie.genres.map((gen) => (
                <span key={gen.id} className="badge bg-danger">
                  {gen.name}
                </span>
              ))}
            </p>
          )}

          <div>
            ⭐ {movie.vote_average} | 👥 {movie.vote_count} Reviews
          </div>

          <table className="table table-bordered w-75 my-3">

            <tbody>

              <tr>
                <th>Runtime</th>
                <td>{convertminutes(movie.runtime)}</td>
              </tr>

              <tr>
                <th>Budget</th>
                <td>{movie.budget===0?"220000":`${movie.budget}`}</td>
              </tr>

              <tr>
                <th>Release Date</th>
                <td>{movie.release_date}</td>
              </tr>

            </tbody>

          </table>
          <strong>languages</strong>
            {movie.spoken_languages &&
            <div className="my-2 d-flex gap-2">{movie.spoken_languages.map((lang)=>(
              <p key={lang.iso_639_1} > {lang.english_name}</p>
            ))}</div>}
            
          <strong>Production</strong>
          {movie.production_companies &&
          ( <div className="d-flex gap-4 my-2">{movie.production_companies.map((company)=>(
           <p key={company.id} >{company.name} </p>
           
          ))}
          </div>)}
          <strong className="d-block">{movie.status}</strong>
          <Link
            to={`https://www.imdb.com/title/${movie.imdb_id}/`}
            className="btn btn-warning my-3"
          >
            View in IMDB
          </Link>
        </div>

      </div>

    </main>
  );
}