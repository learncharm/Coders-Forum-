import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Thread.css'
import ThreadDetails from './ThreadDetails';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import 'boxicons';


// import Addthread from './Addthread';

export default function Thread(props) {

  const { category } = useParams();

  const [threadCategory, setThreadCategory] = useState([]);
  const getCategoryDetails = async () => {
    //API Call
    const url = `http://localhost:5000/api/category/fetchallcategory`;
    // console.log(url)
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);
    setThreadCategory(json);
  }

  const [thread, setThread] = useState([]);
  const getAllThread = async () => {
    //API Call
    const url = `http://localhost:5000/api/thread/fetchallthreads/` + category;
    // console.log(url)
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);
    setThread(json);
  }

  const [userThread, setUserThread] = useState({
    title: "", description: ""
  });

  let name, value;
  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUserThread({ ...userThread, [name]: value });
  }
  const PostData = async (e) => {
    e.preventDefault();

    const { title , description } = userThread;

    const response = await fetch(`http://localhost:5000/api/thread/addthread/` + category, {
      // mode: "no-cors",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjNmY4NGRmZGFhYjEwZDFmMWFmZDVlIn0sImlhdCI6MTY1ODE0NjM3M30.8ntK3bNSi9hvj7bXP6fZyDbTfmB6GKzfxbKufifBnyY'
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description })
    });
    const res = await response.json(); 
    // console.log(res)

    getAllThread();
    setUserThread({title: "", description: ""});
    alert("Question Added Successfully")
  }

  useEffect(() => {
    getAllThread();
    getCategoryDetails();
  }, []);

  return (
    <>
      <NavBar/>
      <div className="container">
        <div className="row">

          {/* <h2 className='my-2'>Thread : {category}</h2> */}

          {threadCategory.map((tcs) => {
            if (tcs.title === category)
              return <>
                <h2 className='my-2 thread-title'>{tcs.title}</h2>
                <br />
                <p className='my-2'>{tcs.description}</p>
                
               
                <div class="share mt-3">
                  {/* <h4>Share Category</h4> */}
                  <a href={`https://wa.me/?text=get ${tcs.title} Solution On Learncharm Coders Forum ${window.location.href}`} className="" target="_blank" ><box-icon name='whatsapp' type='logo' color='#1ad23f' ></box-icon></a>
                  <a href={`https://twitter.com/compose/tweet?text=get ${tcs.title} Solution On Learncharm Coders Forum ${window.location.href}`} target="_blank" className="mx-4"><box-icon name='twitter' type='logo'  color='#1ca1f3' ></box-icon></a>
                  <a href={`https://telegram.me/share/url?url=get ${tcs.title} Solution On Learncharm Coders Forum ${window.location.href}`} className="" target="_blank" ><box-icon name='telegram' type='logo'  color='#1D93E2' ></box-icon></a>
                </div>
            
              </>
          })}

          {/* <Addthread/> */}
          {localStorage.getItem('token') ? <div className='add-thread'><form method='POST'  className='add-thread-form' onSubmit={PostData}>
            <h3 className='my-2'>Add Your Question</h3>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
              <input type="text" onChange={handleInputs} name="title" value={userThread.title} className="form-control " id="title" aria-describedby="emailHelp" minLength={5} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
              <input type="text" onChange={handleInputs} name="description" value={userThread.description} className="form-control" id="description" minLength={6} required rows="7" />
            </div>
            <button type="submit" className="btn btn-primary thread-btn">Submit</button>
            {/* <input type="submit" onClick={PostData} className="btn btn-primary" value="Submit" /> */}
          </form></div> : <div>Login To Add Question...</div>}
          <hr />
          
          <h3 className='mt-4' >Questions</h3>
          <div className='container'>
            {thread.length === 0 && 'No Threads To Display...'}
          </div>
          {thread.map((threads) => {
            return <ThreadDetails key={threads._id} threads={threads} />
          })}
        </div>
      </div>
        <Footer/>

    </>
  )
}
