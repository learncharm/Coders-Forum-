import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import ThreadDetails from './ThreadDetails';

export default function Pthread(props) {

  const {threadid} = useParams();
  
  const [comment, setComment] = useState([]); 
    const getComments = async () => {
        //API Call
        const url = `http://localhost:5000/api/comment/fetchallcomments/`+threadid;
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
    useEffect(() => {
        getAllThread();
        getComments();
       }, []);

  return (
    <>
<div className="container">
    <div className="row">
        
        {/* <h2 className='my-2'>Thread : {threadid}</h2> */}

        {thread.map((tcs) => {
          if(tcs._id==threadid)
          return <>
          <h2 className='my-2'>{tcs.title}</h2>
          <br/>
          <p className='my-2'>{tcs.description}</p>
          </>
        })}

        <div className='container'>
          {comment.length === 0 && 'No Comments To Display'}
        </div>

        {comment.map((comments)=> {
            // return <ThreadDetails key={threads._id} threads = {threads} />
            return <>
          <p className='my-2'>{comments.description}</p>
          </>
        })} 
    </div>
    </div>
           
</>
  )
}
