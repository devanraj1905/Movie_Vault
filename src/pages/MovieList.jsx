import React, { useEffect } from 'react'
import {Card }from '../component'
import { UseFetch } from '../useFetch/UseFetch'
import { Link } from 'react-router-dom'

export function MovieList({title ,apiPath}) {
const {movie}=UseFetch(apiPath)
  useEffect(()=>{
    document.title=title
  },[title])
  return (
    <div className='container'>
      <main>
    {title==="Trending Movies" ?(
      <div className='p-5 bg-body-border my-2 '><h3 className='text-info'>Welcome to Movie Vault</h3>
      <p className='p-2 lead'>Movie Vault is a modern movie discovery platform where users can explore trending films, search for their favorite movies, and view detailed information in a clean and responsive interface</p>
      <Link to={'/tamil'} className='btn btn-sm btn-outline-info'>Explore Now</Link>
      </div>
    ):" "}
    <h5 className='text-danger border-bottom my-2'>{title}</h5>
   <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2'>
       
   {movie.map((item)=>(
    <Card key={item.id} movie={item} />
   ))}
       
    </div>
      </main>
    </div>
  )
}

