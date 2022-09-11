import React from 'react';
import NavBar from './NavBar/NavBar';
import AddCategory from './Category/AddCategory';

export default function Admin() {
  return (
    <>
      <NavBar/>
      <div className='container'>
        <h2 className='text-center my-3'>Add Category</h2>
        <AddCategory/>
      </div>
    </>

  )
}
