import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';

export default function Login() {

    let navigate = useNavigate();

    const [login, setLogin] = useState({
        email: "",password: ""
    });

    let name, value;
    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        setLogin({ ...login, [name]: value });
    }
    const PostData = async (e) => {
        e.preventDefault();

        const { email, password } = login;

        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            // mode: "no-cors",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjNmY4NGRmZGFhYjEwZDFmMWFmZDVlIn0sImlhdCI6MTY1ODE0NjM3M30.8ntK3bNSi9hvj7bXP6fZyDbTfmB6GKzfxbKufifBnyY'
                // 'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ email, password })
        });
        const res = await response.json();
        console.log(res)

        // getAllThread();
        setLogin({ email: "", password: "" });

        if (res.success) {
            // localStorage.setItem("token", json.authToken);
            // navigate("/");
            // props.showAlert("Account Created Successfully","success");
            localStorage.setItem("token", res.authToken);
            alert("Successfully Login");
            navigate("/");
          }else {
            // props.showAlert("Invalid Details","danger");
            // if(res.errors[0].msg!='')
            //     alert(res.errors[0].msg);
            alert("Error Occured");
          }
    }

    return (
        <>
        <NavBar/>
            <div className='container'>
                <form method='POST' onSubmit={PostData}>
                    <h3 className='my-2'>Login</h3>
                    {/* <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                        <input type="text" onChange={handleInputs} name="name" value={signup.name} className="form-control" id="name" aria-describedby="emailHelp" minLength={3} required/>
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" onChange={handleInputs} name="email" value={login.email} className="form-control" id="email" aria-describedby="emailHelp" minLength={5} required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onChange={handleInputs} name="password" value={login.password} className="form-control" id="password" minLength={6} required/>
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" onChange={handleInputs} name="description" value={userThread.description} className="form-control" id="description" />
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {/* <input type="submit" onClick={PostData} className="btn btn-primary" value="Submit" /> */}
                </form>
            </div>
        </>
    )
}
