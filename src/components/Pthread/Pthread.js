import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


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
        // 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjNmY4NGRmZGFhYjEwZDFmMWFmZDVlIn0sImlhdCI6MTY1ODE0NjM3M30.8ntK3bNSi9hvj7bXP6fZyDbTfmB6GKzfxbKufifBnyY'
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ description })
    });
    const res = await response.json(); 
    // console.log(res)

    getComments();
    setUserComment({description: ""});
    alert("Comment Added Successfully")
  }

  useEffect(() => {
    getAllThread();
    getComments();
    getUser();
  }, []);


  return (
    <>
    <NavBar/>
      <div className="container">
        <div className="row">
        <div class="addthis_inline_share_toolbox_okvx"></div>
          {thread.map((tcs) => {
            if (tcs._id === threadid)
              return <>
                <h2 className='my-2 thread-title'>{tcs.title}</h2>
                <br />
                <p className='my-2'>{tcs.description}</p>
                <p className='my-2'>{tcs.date}</p>
                {user.map((users) => {
                  if (users._id == tcs.userid)
                    return <p>By {users.name}</p>
                })}
                <div class="share">
                  <h4>Share Thread</h4>
                  <a href={`https://wa.me/?text=get ${tcs.title} Solution On Learncharm Coders Forum ${window.location.href}`} className="mx-2" target="_blank" ><box-icon name='whatsapp' type='logo' color='#1ad23f' ></box-icon></a>
                  <a href={`https://twitter.com/compose/tweet?text=get ${tcs.title} Solution On Learncharm Coders Forum ${window.location.href}`} target="_blank" className="mx-2"><box-icon name='twitter' type='logo'  color='#1ca1f3' ></box-icon></a>
                  <a href={`https://telegram.me/share/url?url=get ${tcs.title} Solution On Learncharm Coders Forum ${window.location.href}`} className="mx-2" target="_blank" ><box-icon name='telegram' type='logo'  color='#1D93E2' ></box-icon></a>
                </div>
               
            

              </>
          })}

    {localStorage.getItem('token') ? <div className='add-thread'> <form method='POST' className='add-thread-form' onSubmit={PostData}>
            <h3 className='my-2'>Add Comment</h3>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Comment</label>
              <textarea type="text" name='description' value={userComment.description} onChange={handleInputs} className="form-control" id="description" aria-describedby="emailHelp" minLength={6} required rows={7}></textarea>
            </div>
            <button type="submit" className="btn btn-primary nav-btn  thread-btn">Add Comment</button>
            {/* <input type="submit" onClick={PostData} className="btn btn-primary" value="Submit" /> */}
          </form> </div> : <div>Login To Post Comment...</div>}

          <div className='container py-2'>
            {comment.length === 0 && 'No Comments To Display...'}
          </div>

          {comment.map((comments) => {
            return <>
              
              <div className="card ps-4 my-4">
        <div className="row">
          <div className="col-md-8 mb-3">
      
            <p className="card-text">{comments.description}</p>
            <p className="card-text">{comments.date}</p>
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
        <Footer/>

    </>
  )
}
