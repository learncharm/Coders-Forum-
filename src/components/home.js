import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard/CategoryCard';


export default function Home() {

  const [user, setUser] = useState([]);
  const getUser = async () => {
    //API Call
    // const url = `http://localhost:5000/api/auth/getuser`;
    // console.log(url)
    const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
            // mode: "no-cors",
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                // 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjNmY4NGRmZGFhYjEwZDFmMWFmZDVlIn0sImlhdCI6MTY1ODE0NjM3M30.8ntK3bNSi9hvj7bXP6fZyDbTfmB6GKzfxbKufifBnyY'
                'auth-token': localStorage.getItem('token')
            }
        });
    const json = await response.json();
    // console.log(json);
    setUser(json);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div className="container my-3">
        
        <section className="categories">
          <h3>Categories</h3>
          <hr />
          <CategoryCard />
        </section>
      </div>


    </div>
  )
}
