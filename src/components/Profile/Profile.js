import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export default function Profile() {

  let navigate = useNavigate();
  let tQues = 0;
  const [user, setUser] = useState([]);

  const checkUser = () => {
    if(!localStorage.getItem('token'))
    {
      navigate("/");
    }
  }

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

  const [thread, setThread] = useState([]);
  const getAllThread = async () => {
    //API Call
    const url = `http://localhost:5000/api/thread/fetchuserthreads`;
    // console.log(url)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    // console.log(json);
    setThread(json);
  }

  const deleteThread = async (id) => {
    // API Call
    const response = await fetch(`http://localhost:5000/api/thread/deletethread/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    // console.log(json);

    const newThreads = thread.filter((dt) => { return dt._id !== id })
    setThread(newThreads);
    alert("Question Deleted")
  }

  const [comment, setComment] = useState([]);
  const getAllComment = async () => {
    //API Call
    const url = `http://localhost:5000/api/comment/fetchusercomments`;
    // console.log(url)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    // console.log(json);
    setComment(json);
  }

  const deleteComment = async (id) => {
    // API Call
    const response = await fetch(`http://localhost:5000/api/comment/deletecomment/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    // console.log(json);

    const newComments = comment.filter((cmnt) => { return cmnt._id !== id })
    setComment(newComments);
    alert("Comment Deleted");
  }

  useEffect(() => {
    checkUser();
    getUser();
    getAllThread();
    getAllComment();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container mb-5 mt-3">
        <h3 className='my-2'>Name : {user.name}</h3>
        <h4 className=''>Email : {user.email}</h4>
        <h4 className=''>Total Question : {thread.length}</h4>
        <h4 className=''>Total Comments : {comment.length}</h4>

        <div className='questions'>
          <h2 className='my-2'>All Questions</h2>

          {thread.length === 0 && 'No Threads To Display...'}

          {thread.map((threads) => {
            return <><div className="card ps-4 my-4">
              <div className="row">
                <div className="col-md-8 mb-3">

                  <Link to={`/thread/${threads._id}`} className="card-title"><h4>{tQues = tQues + 1}. {threads.title} </h4></Link>
                  <p className="card-text">{threads.description}</p>
                  <p className="card-text">{threads.category}</p>
                  <p className="card-text">{threads.date}</p>
                  <button type="button" class="btn btn-outline-danger mt-3" onClick={() => {deleteThread(threads._id);}}>Delete</button>

                </div>
              </div>
            </div></>
          })}

          <h2 className='my-2'>All Comments</h2>

          {comment.length === 0 && 'No Comments To Display...'}

          {comment.map((cmnt) => {
            return <><div className="card ps-4 my-4">
              <div className="row">
                <div className="col-md-8 mb-3">

                  {/* <Link to={`/thread/${threads._id}`} className="card-title"><h4>{tQues = tQues + 1}. {cmnt.title} </h4></Link> */}
                  <p className="card-text">{cmnt.description}</p>
                  {/* <p className="card-text">{threads.category}</p> */}
                  <p className="card-text">{cmnt.date}</p>
                  <button type="button" class="btn btn-outline-danger mt-3" onClick={() => {deleteComment(cmnt._id);}}>Delete</button>

                </div>
              </div>
            </div></>
          })}
        </div>

      </div>      
        <Footer/>
    </>
  )
}
