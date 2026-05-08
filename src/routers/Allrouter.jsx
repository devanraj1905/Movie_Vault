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
        apiPath="discover/movie?with_original_language=ta&primary_release_year=2025"
      />
    }
  />

  <Route
    path="/tamil"
    element={
      <MovieList
        title="Tamil Movies"
         apiPath="discover/movie?with_original_language=ta&primary_release_year=2018"
       
      />
    }
  />

  <Route
    path="/hollywood"
    element={
      <MovieList
        title="Hollywood Movies"
        apiPath="discover/movie?with_companies=420"
      />
    }
  />

  <Route
    path="/popular"
    element={
      <MovieList
        title="Popular Movies"
      apiPath="discover/movie?primary_release_year=2026&with_original_language=ta"
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

