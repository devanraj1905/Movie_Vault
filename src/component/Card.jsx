import React from 'react'
import backup from '../assets/backup.jpg'
import { Link, useNavigate } from 'react-router-dom'
export function Card( {movie}) {
  
   
  return (
    <div className='col'>
      <div className='card shaddow-sm ' title={movie.title}>
        <img src={movie.backdrop_path? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : backup} alt="" className='backup-image'/>
        <div className='card-body '>
          <h5 className='text-info text-overflow-1'>{movie.title}</h5>
          <p className='card-text text-overflow-2 '>{movie.overview}</p>
          
          <div className='d-flex justify-content-between align-item-center'>
            {/* <Link
  to={`/movie/${movie.id}`}
  className="btn btn-sm btn-outline-primary stretched-link"
>
  Read More
</Link> */}
<Link  to={`/movie/${movie.id}`} className='btn btn-sm btn-outline-primary stretched-link'>Read More</Link>
            <small>
            <i className='bi bi-star-fill text-warning'></i>{movie.vote_average} | <i className='bi bi-people text-success'></i>{movie.vote_count} Reviews
          </small>
          
          </div>
          
        </div>
      </div>

    </div>
  )
}

