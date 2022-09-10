import React, { useEffect, useState } from 'react';
import './ThreadDetails.css';
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
    <div className="">


      <div className="card ps-4 my-4">
        <div className="row">
          <div className="col-md-8 mb-3">
            <Link to={`/thread/${threads._id}`} className="card-title"><h4> {threads.title} </h4></Link>
            <p className="card-text">{threads.description}</p>
            <p className="card-text">{threads.date}</p>
            {user.map((users) => {
              if (users._id == threads.userid)
                return <p>By {users.name}</p>
            })}


          </div>
        </div>
      </div>
    </div>
  )
}
