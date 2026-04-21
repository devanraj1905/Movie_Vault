import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MovieList, MovieDetails, PageNotFound, Search} from '../pages'
export function Allrouter() {
  return (
    <>
   <Routes>

  <Route
    path="/"
    element={
      <MovieList
        title="Trending Movies"
        apiPath="trending/movie/day"
      />
    }
  />

  <Route
    path="/tamil"
    element={
      <MovieList
        title="Tamil Movies"
        apiPath="discover/movie?with_original_language=ta&sort_by=vote_average.desc&vote_count.gte=100"
      />
    }
  />

  <Route
    path="/hollywood"
    element={
      <MovieList
        title="Hollywood Movies"
        apiPath="discover/movie?with_original_language=en&sort_by=vote_average.desc&vote_count.gte=100.desc"
      />
    }
  />

  <Route
    path="/popular"
    element={
      <MovieList
        title="Popular Movies"
      apiPath="discover/movie?primary_release_year=2026&sort_by=popularity.desc"
      />
    }
  />
  
  <Route path="/movie/:id"
    element={
      <MovieDetails
        title="Movie Details"
      
      />
    }/>
 <Route path='/search' element={<Search apiPath="search/movie"/>}/>
 <Route path='*' element={<PageNotFound title="Page Not Found"/>}/>
</Routes>
    </>
  )
}

