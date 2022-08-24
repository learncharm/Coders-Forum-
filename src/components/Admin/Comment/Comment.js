import React, { useEffect, useState } from 'react';
import 'rsuite/dist/rsuite.min.css'
import CommentDetails from './CommentDetails'

export default function Comment(props) {
   const [comment, setComment] = useState([]); 

    const getAllThread = async () => {
        //API Call
        const response = await fetch(`http://localhost:5000/api/comment/allcomments`);
        const json = await response.json();
        console.log(json);
        setComment(json);
    }
    useEffect(() => {
        getAllThread();
       }, []);


  



   
    return (
        <>
<div className='col-md-4 mt-3'>
<table className="table ">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
                {comment.map((comments)=> {
            return <CommentDetails comments = {comments} />
        })}
        </table>
        </div>
        </>
    )
}
