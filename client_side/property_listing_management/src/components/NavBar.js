import React from 'react';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';

function NavBar() {
  return (
    <>
      <nav className="navbar p-4 sticky-top navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand text-light p-0 m-0 fs-2">Real Estate</Link>
          <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'/'} className="nav-link text-light">Home</Link>
              </li>

              <li className="nav-item">
                <Link to={'/explores'} className="nav-link text-light">Explore</Link>
              </li>
             
              
              <li className="nav-item">
                <Link to={'/signup'} className="nav-link text-light">Register / Signup</Link>
              </li>
              <li className="nav-item">
                <Link to={'/login'} className="nav-link active text-light" aria-current="page">Login</Link>
              </li>

              <li className="nav-item">
                <Link to={'/listing-property'} className="nav-link text-light">List Your Property</Link>
              </li>
              <li className="nav-item">
                <Link to={'/contact'} className="nav-link text-light">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to={'/profile'} className="nav-link text-light">Manage Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
