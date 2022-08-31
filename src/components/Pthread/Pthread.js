import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Pthread(props) {

  const { threadid } = useParams();

  const [comment, setComment] = useState([]);
  const getComments = async () => {
    //API Call
    const url = `http://localhost:5000/api/comment/fetchallcomments/` + threadid;
    // console.log(url)
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);
    setComment(json);
  }

  const [thread, setThread] = useState([]);
  const getAllThread = async () => {
    //API Call
    const url = `http://localhost:5000/api/thread/allthreads`;
    // console.log(url)
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);
    setThread(json);
  }

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

  const [userComment, setUserComment] = useState({
    description: ""
  });

  let name, value;
  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUserComment({ ...userComment, [name]: value });
  }
  const PostData = async (e) => {
    e.preventDefault();

    const { description } = userComment;

    const response = await fetch(`http://localhost:5000/api/comment/addcomment/` + threadid, {
      // mode: "no-cors",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjNmY4NGRmZGFhYjEwZDFmMWFmZDVlIn0sImlhdCI6MTY1ODE0NjM3M30.8ntK3bNSi9hvj7bXP6fZyDbTfmB6GKzfxbKufifBnyY'
        // 'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ description })
    });
    const res = await response.json(); 
    // console.log(res)

    getComments();
    setUserComment({description: ""});
  }

  useEffect(() => {
    getAllThread();
    getComments();
    getUser();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">

          {thread.map((tcs) => {
            if (tcs._id == threadid)
              return <>
                <h2 className='my-2'>{tcs.title}</h2>
                <br />
                <p className='my-2'>{tcs.description}</p>
                <p className='my-2'>{tcs.date}</p>
                {user.map((users) => {
                  if (users._id == tcs.userid)
                    return <p>By {users.name}</p>
                })}
              </>
          })}

          <form method='POST'>
            <h3 className='my-2'>Add Comment</h3>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Comment</label>
              <input type="text" name='description' value={userComment.description} onChange={handleInputs} className="form-control" id="description" aria-describedby="emailHelp" />
            </div>
            <input type="submit" onClick={PostData} className="btn btn-primary" value="Submit" />
          </form>

          <div className='container py-2'>
            {comment.length === 0 && 'No Comments To Display...'}
          </div>

          {comment.map((comments) => {
            return <>
              <div className="col-md-4 mt-3">

                <div className="card cat-card" style={{ "width": "18rem" }}>
                  <div className="card-body m-3">
                    <h6 className='mb-1'>{comments.description}</h6>
                    <p className=''>{comments.date}</p>
                    {user.map((users) => {
                      if (users._id == comments.userid)
                        return <p>By {users.name}</p>
                    })}
                  </div>
                </div>
              </div>
            </>
          })}
        </div>
      </div>

    </>
  )
}
