import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

export default function Login() {

    let navigate = useNavigate();

    const checkAdmin = () => {
        let name = document.getElementById('name');
        let password = document.getElementById('password')

        if(name.value==='admin' && password.value==='admin')
        {
            localStorage.setItem("admin", "true");
            alert("Login Successful..");
            navigate("/admin");
        }
        else
            alert("Login Failed...")
    }

  return ( 
    <>
        <div className='container login add-thread'>
                <form onSubmit={checkAdmin}>
                    <h3 className='my-2'>Login</h3>
                    {/* <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                        <input type="text" onChange={handleInputs} name="name" value={signup.name} className="form-control" id="name" aria-describedby="emailHelp" minLength={3} required/>
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" name="name" className="form-control" id="name" aria-describedby="emailHelp" minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="password" minLength={5} required/>
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" onChange={handleInputs} name="description" value={userThread.description} className="form-control" id="description" />
                    </div> */}
                    <button type="submit" className="btn btn-primary thread-btn">Login</button>
                    {/* <input type="submit" onClick={PostData} className="btn btn-primary" value="Submit" /> */}
                </form>
            </div>
    </>
  )
}
