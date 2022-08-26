import React from 'react'
import CategoryCard from './CategoryCard/CategoryCard';


export default function home() {

  return (
    <div>
      <div className="container my-3">
        <h3>Welcome,</h3>
        <hr />
        <section className="categories">
          <h3>Categories</h3>
          <hr />
          <CategoryCard />
        </section>
      </div>


    </div>
  )
}
