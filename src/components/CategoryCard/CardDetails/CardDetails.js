import React from 'react';
import './CardDetails.css';
import { Link } from 'react-router-dom';

export default function CardDetails(props) {
    const {categories} = props;
  return (
    <div className="col-md-4 mt-3">
         
        <div class="card cat-card" style={{ "width": "18rem" }}>
                        <div class="card-body m-3">
                            <h5 class="card-title">{categories.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">&nbsp;</h6>
                            <p class="card-text">{categories.description}</p>
                            <Link to={`/thread/${categories.title}`} class="card-link btn btn-primary">Visit Category</Link>
                        </div>
                    </div>
    </div>
  )
}
