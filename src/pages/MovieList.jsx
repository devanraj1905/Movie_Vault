import React, { useEffect } from 'react'
import {Card }from '../component'
import { UseFetch } from '../useFetch/UseFetch'

export function MovieList({title ,apiPath}) {
const {movie}=UseFetch(apiPath)
  useEffect(()=>{
    document.title=title
  },[title])
  return (
    <div className='container'>
      <main>
    {title==="Your Guide to Great Movies" ?(
      <div className='p-5 bg-body-tertiary border my-2 '><h3 className='text-info'>Welcome to Movie Vault</h3>
      <p className='p-2 lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus magni deleniti asperiores minima, quas voluptate, incidunt rerum aliquid nisi commodi vitae quis atque dolor tenetur cum cupiditate ab, ipsam ipsa!</p>
      <button className='btn btn-sm btn-outline-info'>Explore Now</button>
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

