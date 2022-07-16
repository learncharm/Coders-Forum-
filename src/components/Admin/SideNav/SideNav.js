import React from 'react';
import './SideNav.css';
import 'boxicons';
import { Link } from 'react-router-dom';


export default function SideNav() {
  return (
    <div>
      <div className="sidebar">
        <div className="logo_content">
          <div className="logo">
            <div className="logo_name">Coders Forum</div>
          </div>
          <i class='bx bx-menu' id="btn" ></i>
          <ul className="nav_list">
            <li>
              
              <i class='bx bx-search-alt'></i>
              <input type="text" placeholder='Search...' />
              
              <span className="tooltip">Search</span>
            </li>
            <li>
              <Link to="/admin">
              <i class='bx bx-grid-alt' ></i>
              <span className="links_name">Dashboard</span>
              </Link>
              <span className="tooltip">Dashboard</span>
            </li>
            <li>
              <Link to="/admin/category">
              <i class='bx bxs-package' ></i>
              <span className="links_name">Category</span>
              </Link>
              <span className="tooltip">Category</span>
            </li>
            <li>
              <Link to="/admin">
              <i class='bx bx-git-branch' ></i>
              <span className="links_name">Threads</span>
              </Link>
              <span className="tooltip">Threads</span>
            </li>
            <li>
              <Link to="/admin">
              <i class='bx bx-user' ></i>
              <span className="links_name">Users</span>
              </Link>
              <span className="tooltip">Users</span>
            </li>
            <li>
              <Link to="/admin">
              <i class='bx bx-message-square-dots' ></i>
              <span className="links_name">Comments</span>
              </Link>
              <span className="tooltip">Comments</span>
            </li>
          </ul>

          <div className="profile_content">
            <div className="profile">
              <i class='bx bx-log-out' id='log_out'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
