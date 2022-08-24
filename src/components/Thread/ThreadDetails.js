import React from 'react';
// import './CardDetails.css';
// import { Link } from 'react-router-dom';

export default function ThreadDetails(props) {
    const {threads} = props;
  return (
    <div className="col-md-4 mt-3">
         
        <div className="card cat-card" style={{ "width": "18rem" }}>
                        <div className="card-body m-3">
                            <h5 className="card-title">{threads.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">&nbsp;</h6>
                            <p className="card-text">{threads.description}</p>
                            {/* <Link to={`/thread/${categories.title}`} class="card-link btn btn-primary">Visit Category</Link> */}
                        </div>
                    </div>
    </div>
  )
}
