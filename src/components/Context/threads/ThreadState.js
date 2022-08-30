import { useState } from 'react';
import ThreadContext from './threadContext';

const ThreadState = (props) => {
    const host = "http://localhost:5000"
    const threadsInitial = [];

    const [threads, setThreads] = useState(threadsInitial)

    // // get all Note
    // const getNotes = async () => {
    //     // TODO API Call
    //     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'auth-token': localStorage.getItem('token')
    //         }
    //     });

    //     const json = await response.json();
    //     // console.log(json);
    //     setNotes(json)
    // }

    // Add a Thread
    const addThread = async (title, description) => {
        // TODO API Call
        const response = await fetch(`${host}/api/api/thread/addthread/java`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjNmY4NGRmZGFhYjEwZDFmMWFmZDVlIn0sImlhdCI6MTY1ODE0NjM3M30.8ntK3bNSi9hvj7bXP6fZyDbTfmB6GKzfxbKufifBnyY'
                // 'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,description})
        });
        const thread = await response.json();
        setThreads(threads.concat(thread))
        // console.log(json);
        // const note = json;
        
    }
    // // Delete a Note
    // const deleteNote = async (id) => {
    //     // API Call
    //     const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'auth-token': localStorage.getItem('token')
    //         }
    //     });
    //     const json = await response.json();
    //     console.log(json);

    //     const newNotes = notes.filter((note) => { return note._id !== id })
    //     setNotes(newNotes);
    // }
    // Edit a Note
    // const editNote = async (id, title, description, tag) => {
    //     // API Call

    //     const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'auth-token': localStorage.getItem('token')
    //         },
    //         body: JSON.stringify({title,description,tag})
    //     });
    //     const json = await response.json();
    //     console.log(json)

    //     let newNotes = JSON.parse(JSON.stringify(notes));
    //     // Logic to edit in client
    //     for (let index = 0; index < newNotes.length; index++) {
    //         const element = newNotes[index];
    //         if (element._id === id) {
    //             newNotes[index].title = title;
    //             newNotes[index].description = description;
    //             newNotes[index].tag = tag;
    //             break;
    //         }
    //     }
    //     setNotes(newNotes);
    // }
    return (
        <ThreadContext.Provider value={{ threads, setThreads, addThread }}>
            {props.children}
        </ThreadContext.Provider>
    )
}

export default ThreadState;