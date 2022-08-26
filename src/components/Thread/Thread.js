import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ThreadDetails from './ThreadDetails';

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

          <form>
            <h3 className='my-2'>Add Your Question</h3>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
              <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
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
