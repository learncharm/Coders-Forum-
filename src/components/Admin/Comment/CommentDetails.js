import React from 'react';

export default function CommentDetails(props) {
    const {comments} = props;
  return (
    <div>
         
      <tr>
      <td scope='row'>{comments.threadid}</td>
      <td scope='row'>{comments.description}</td>
    </tr>
   
  </div>
  )
}
