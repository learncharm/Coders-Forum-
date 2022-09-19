import React, { useEffect, useState } from 'react';
import './NavBar.css';
import UserImg from './Images/user.png';
import Logo from '../images/logo/logo.png';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    //API Call

    const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
      // mode: "no-cors",
      method: 'POST',
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    // console.log(json);
    setUser(json);
  }

  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/");
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navCss">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} width="75px" alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to='/#feedback'>Feedback</Link>
            </div>
          </div>

          <div className="d-flex nav-profile">


            {!localStorage.getItem('token') ? <div><Link to="/signup" className="btn nav-btn">Sign Up</Link>
              <Link to="/login" className="btn nav-btn">Log In</Link></div>
              : <div className='d-flex'><button className='btn nav-btn'><a href="https://av-text-utils.netlify.app/">TextAnalyzer</a></button> <button className='btn nav-btn' onClick={handleLogout}>LogOut</button> <Link to="/profile"><div className='profile'><img src={UserImg} alt="" /></div></Link></div>
            }
          
          </div>
        </div>
      </nav>
    </div>
  )
}