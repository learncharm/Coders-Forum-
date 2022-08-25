import React, { useEffect, useState } from 'react';
import 'rsuite/dist/rsuite.min.css'
import ThreadDetails from './ThreadDetails'
import SideNav from '../SideNav/SideNav';

export default function Thread(props) {
   const [thread, setThread] = useState([]); 

    const getAllThread = async () => {
        //API Call
        const response = await fetch(`http://localhost:5000/api/thread/allthreads`);
        const json = await response.json();
        console.log(json);
        setThread(json);
    }
    useEffect(() => {
        getAllThread();
       }, []);
      //  const options = {method: 'GET'};

// fetch('http://localhost:5000/api/thread/allthreads', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

  
  



   
    return (
        <>
        <SideNav/>
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Category</th>
    </tr>
  </thead>
  <tbody>
                {thread.map((threads)=> {
            return <ThreadDetails threads = {threads} />
        })}
        </tbody>
        </table>
        
        </>
    )
}
