import React, { useEffect, useState } from 'react';
// import {useLocation} from 'react-router';
// import queryString from 'query-string';
import { useParams } from 'react-router-dom';
import ThreadDetails from './ThreadDetails';
// import CategoryCard from '../CategoryCard/CategoryCard'


export default function Thread(props) {
  const {category} = useParams();
  // const location = useLocation();
  // console.log(queryString.parse())
  const [thread, setThread] = useState([]); 
  // console.log(props.match.params.category)
    const getAllThread = async () => {
        //API Call
        const url = `http://localhost:5000/api/thread/fetchallthreads/`+category;
        console.log(url)
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setThread(json);
    }
    useEffect(() => {
        getAllThread();
       }, []);

  return (
    <>
<div className="container">
    <div className="row">
        
        <h2 className='my-2'>Thread : {category}</h2>
        {thread.map((threads)=> {
            return <ThreadDetails threads = {threads} />
        })}
    </div>
    </div>
           
</>
  )
}
