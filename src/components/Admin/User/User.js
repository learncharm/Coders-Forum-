import React,{useState,useEffect} from 'react'
import NavBar from '../NavBar/NavBar'

export default function User() {
    let count = 0;

    const [user, setUser] = useState([]);
  const getUser = async () => {
    //API Call
    const url = `http://localhost:5000/api/auth/fetchalluser`;
    // console.log(url)
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);
    setUser(json);
  }

  const deleteUser = async (id) => {
    // API Call
    const response = await fetch(`http://localhost:5000/api/auth/deleteuser/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // const json = await response.json();
    // console.log(json);

    const newUsers = user.filter((dt) => { return dt._id !== id })
    setUser(newUsers);
    alert("User Deleted")
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className='my-3 text-center'>All Users</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope='col'>Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((users) => {
              return <tr>
                <th scope="row">{++count}</th>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td><button type="button" class="btn btn-sm btn-outline-danger" onClick={() => { deleteUser(users._id); }}>Delete</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
