import React from 'react';
import CategoryCard from './CategoryCard/CategoryCard';
import NavBar from './NavBar/NavBar';


export default function Home() {

  

  

  return (
    <>
    <NavBar/>
    <div>
      <div className="container my-3">
        
        <section className="categories">
          <h3>Categories</h3>
          <hr />
          <CategoryCard />
        </section>
      </div>


    </div>
    </>
  )
}
