import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'

export default function Signup() {

    const [signup, setSignup] = useState({
        name: "", email: "",password: ""
    });

    let name, value;
    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        setSignup({ ...signup, [name]: value });
    }
    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, password } = signup;

        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            // mode: "no-cors",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjNmY4NGRmZGFhYjEwZDFmMWFmZDVlIn0sImlhdCI6MTY1ODE0NjM3M30.8ntK3bNSi9hvj7bXP6fZyDbTfmB6GKzfxbKufifBnyY'
                // 'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ name, email, password })
        });
        const res = await response.json();
        console.log(res)

        // getAllThread();
        setSignup({ name: "", email: "", password: "" });

        if (res.success) {
            // localStorage.setItem("token", json.authToken);
            // navigate("/");
            // props.showAlert("Account Created Successfully","success");
            alert("Successfully Sign Up");
          }else {
            // props.showAlert("Invalid Details","danger");
            alert("Error Occurred");
          }
    }

    return (
        <>
        <NavBar/>
            <div className='container add-thread mb-5'>
                <form method='POST' onSubmit={PostData}>
                    <h3 className='my-2'>Sign Up</h3>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                        <input type="text" onChange={handleInputs} name="name" value={signup.name} className="form-control" id="name" aria-describedby="emailHelp" minLength={3} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" onChange={handleInputs} name="email" value={signup.email} className="form-control" id="email" aria-describedby="emailHelp" minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onChange={handleInputs} name="password" value={signup.password} className="form-control" id="password" minLength={6} required/>
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" onChange={handleInputs} name="description" value={userThread.description} className="form-control" id="description" />
                    </div> */}
                    <button type="submit" className="btn btn-primary threa-btn">Sign Up</button>
                    {/* <input type="submit" onClick={PostData} className="btn btn-primary" value="Submit" /> */}
                </form>
            </div>
            <Footer/>
        </>
    )
}
