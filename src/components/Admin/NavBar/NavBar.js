import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/admin">Dashboard</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/admin/category">Category</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admin/thread">Threads</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admin/comment">Comments</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admin/user">Users</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
