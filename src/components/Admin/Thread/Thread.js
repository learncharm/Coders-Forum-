import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom'

export default function Thread() {
  let navigate = useNavigate();

  let count = 0;
  const [thread, setThread] = useState([]);

  const checkAdmin = () => {
    if(localStorage.getItem('admin')!=="true")
      navigate("/admin/login");
  }

  const getAllThread = async () => {
    //API Call
    const response = await fetch(`http://localhost:5000/api/thread/allthreads`);
    const json = await response.json();
    console.log(json);
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

  const deleteThread = async (id) => {
    // API Call
    const response = await fetch(`http://localhost:5000/api/thread/deletethreadbyadmin/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    // console.log(json);

    const newThreads = thread.filter((dt) => { return dt._id !== id })
    setThread(newThreads);
    alert("Question Deleted")
  }

  useEffect(() => {
    checkAdmin();
    getAllThread();
    getUser();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className='my-3 text-center'>All Questions</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope='col'>By</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {thread.map((threads) => {
            return <tr>
              <th scope="row">{++count}</th>
              <td>{threads.title}</td>
              <td>{threads.description}</td>
              {user.map((users) => {
              if (users._id === threads.userid)
                return <td>{users.name}</td>
            })}
            <td>{threads.category}</td>
              <td><button type="button" class="btn btn-sm btn-outline-danger" onClick={() => {deleteThread(threads._id);}}>Delete</button></td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
    </>
  )
}
