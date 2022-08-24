import React from 'react';

export default function ThreadDetails(props) {
    const {threads} = props;
  return (
    <div className="col-md-4 mt-3">
         
      <tr>
      <th scope="row">1</th>
      <td>{threads.title}</td>
      <td>{threads.description}</td>
      <td>{threads.category}</td>
    </tr>
   
  </div>
  )
}
