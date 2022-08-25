import React, { useEffect, useState } from 'react';
// import './CardDetails.css';
import { Link } from 'react-router-dom';

export default function ThreadDetails(props) {
  const { threads } = props;

  const [user, setUser] = useState([]);
  const getUser = async () => {
    //API Call
    const url = `http://localhost:5000/api/auth/fetchalluser`;
    // console.log(url)
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);
    setUser(json);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="col-md-4 mt-3">

      <div className="card cat-card" style={{ "width": "18rem" }}>
        <div className="card-body m-3">
          <Link to={`/thread/${threads._id}`} className="card-title">{threads.title}</Link>
          <h6 className="card-subtitle mb-2 text-muted">&nbsp;</h6>
          <p className="card-text">{threads.description}</p>
          <p className="card-text">{threads.date}</p>

          {user.map((users) => {
            if (users._id == threads.userid)
              return <p>By {users.name}</p>
          })}

          {/* <Link to={`/thread/${categories.title}`} class="card-link btn btn-primary">Visit Category</Link> */}
        </div>
      </div>
    </div>
  )
}
