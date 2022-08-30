import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ThreadDetails from './ThreadDetails';
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

  const [title , setTitle] = useState("");
  const [description , setDescription] = useState("");

  const onsubmit = async () => {
    const response = await fetch(`http://localhost:5000/api/api/thread/addthread/`+category, {
      mode: "no-cors",
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjNmY4NGRmZGFhYjEwZDFmMWFmZDVlIn0sImlhdCI6MTY1ODE0NjM3M30.8ntK3bNSi9hvj7bXP6fZyDbTfmB6GKzfxbKufifBnyY'
          // 'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title,description})
  });
  // const thread = await response.json();
  // setThreads(threads.concat(thread))
  }

  useEffect(() => {
    getAllThread();
    getCategoryDetails();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">

          {/* <h2 className='my-2'>Thread : {category}</h2> */}

          {threadCategory.map((tcs) => {
            if (tcs.title == category)
              return <>
                <h2 className='my-2'>{tcs.title}</h2>
                <br />
                <p className='my-2'>{tcs.description}</p>
              </>
          })}

          {/* <Addthread/> */}
          <form method='post'>
            <h3 className='my-2'>Add Your Question</h3>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
              <input type="text" onChange={(e)=>{setTitle(e)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
              <input type="text" onChange={(e)=>{setDescription(e)}} className="form-control" id="exampleInputPassword1" />
            </div>
            <button onClick={onsubmit()} className="btn btn-primary">Submit</button>
          </form>

          <div className='container'>
            {thread.length === 0 && 'No Threads To Display...'}
          </div>

          {thread.map((threads) => {
            return <ThreadDetails key={threads._id} threads={threads} />
          })}
        </div>
      </div>

    </>
  )
}
