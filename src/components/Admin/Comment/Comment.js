import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom'

export default function Comment() {

  let navigate = useNavigate();
  let count = 0;

  const checkAdmin = () => {
    if(localStorage.getItem('admin')!=="true")
      navigate("/admin/login");
  }

  const [comment, setComment] = useState([]);

  const getAllComment = async () => {
    //API Call
    const response = await fetch(`http://localhost:5000/api/comment/allcomments`);
    const json = await response.json();
    console.log(json);
    setComment(json);
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

  const deleteComment = async (id) => {
    // API Call
    const response = await fetch(`http://localhost:5000/api/comment/deletecommentbyadmin/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // const json = await response.json();
    // console.log(json);

    const newComments = comment.filter((dt) => { return dt._id !== id })
    setComment(newComments);
    alert("Comment Deleted")
  }

  useEffect(() => {
    checkAdmin();
    getAllComment();
    getUser();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className='my-3 text-center'>All Comments</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope='col'>By</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {comment.map((cmnt) => {
              return <tr>
                <th scope="row">{++count}</th>
                <td>{cmnt.description}</td>
                {user.map((users) => {
                  if (users._id === cmnt.userid)
                    return <td>{users.name}</td>
                })}
                <td><button type="button" class="btn btn-sm btn-outline-danger" onClick={() => { deleteComment(cmnt._id); }}>Delete</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
