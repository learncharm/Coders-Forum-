import React from 'react';
import './NavBar.css';
import Logo from '../images/logo/logo.png';
import { Link,useNavigate } from 'react-router-dom';

export default function NavBar() {
  
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg  navCss">
  <div className="container-fluid">
    <Link className="navbar-brand" to="">
      <img src={Logo} width="75px" alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Contact</a>
        <a className="nav-link" href='#'>Feedback</a>
      </div>
    </div>

        <div className="d-flex nav-profile">


        {!localStorage.getItem('token') ? <div><Link to="/signup" className="btn btn-full nav-btn">SIgn Up</Link>
          <Link to="/login" className="btn btn-border nav-btn">Log In</Link></div>
          : <button className='btn btn-border nav-btn' onClick={handleLogout}>LogOut</button>
          }
          <div  className='profile'></div>
        </div>
  </div>
</nav>
    </div>
  )
}
