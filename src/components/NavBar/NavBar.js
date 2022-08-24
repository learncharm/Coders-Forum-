import React from 'react';
import './NavBar.css';
import Logo from '../images/logo/logo.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="" className="d-inline-block align-text-top"/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Platforms
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item active" href="#">Forum</a></li>
              <li><a className="dropdown-item" href="#">Quiz</a></li>
              <li><a className="dropdown-item" href="#">Project</a></li>
              <li><a className="dropdown-item" href="#">Group Study</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <div className="d-flex nav-profile">


          <a href="#" className="btn btn-full">SIgn Up</a>
          <a href="#" className="btn btn-border">Log In</a>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
