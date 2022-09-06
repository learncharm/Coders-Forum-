import React, {useContext} from 'react'
import { useState } from 'react';
import threadContext from '../Context/threads/threadContext'


export default function Addthread() {
    const context = useContext(threadContext);
    const { addThread } = context;

    const [thread , setThread] = useState({title : "",description: ""})
    const handleClick = (e) => {
        e.preventDefault();
        addThread(thread.title,thread.description);
        setThread({title:"",description:""})
        // props.showAlert("Note Added Successfully","success");
    }

    const onChange = (e) => {
        setThread({...thread, [e.target.name]: e.target.value})
    }

  return (
    <div className='container'>
      <h1 className="my-3">Add a Question</h1>
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="noteTitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' value={thread.title} onChange={onChange} aria-describedby="emailHelp" minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="noteDescription" className="form-label">Description</label>
          <input type="text" className="form-control" onChange={onChange} id="description" name='description' value={thread.description} minLength={5} required />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="noteTag" className="form-label">Tag</label>
          <input type="text" className="form-control" onChange={onChange} id="tag" name='tag' value={note.tag} required />
        </div> */}
        <button type="submit" className="btn btn-primary nav-btn">Add Question</button>
      </form>
    </div>
  )
}