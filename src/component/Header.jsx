import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export function Header() {
  const navigate=useNavigate()
   const handleSearch=(e)=>{
      e.preventDefault()
      const queryTerm=e.target.search.value;
      e.target.reset()
      return navigate(`/search?q=${queryTerm}`)

    }
  return (
 
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm modern-navbar">
      <div className="container">

        
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          🎬 MovieVault
        </NavLink>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="mainMenu">

          
          <ul className="navbar-nav mx-auto gap-3">

            <li className="nav-item">
              <NavLink className="nav-link nav-item-style"  to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link nav-item-style" to="/tamil">
                Tamil
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link nav-item-style" to="/hollywood">
                Hollywood
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link nav-item-style" to="/popular">
                Popular
              </NavLink>
            </li>

          </ul>

          
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              type="search"
              className="form-control rounded-pill px-3 search-item"
              placeholder="Search movies..."
              name="search"
            />
          </form>

        </div>
      </div>
    </nav>
  );
}


