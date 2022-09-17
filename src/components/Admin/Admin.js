import React,{useEffect} from 'react';
import NavBar from './NavBar/NavBar';
import AddCategory from './Category/AddCategory';
import { useNavigate } from 'react-router-dom'

export default function Admin() {

  let navigate = useNavigate();

  const checkAdmin = () => {
    if(localStorage.getItem('admin')!=="true")
      navigate("/admin/login");
  }

  useEffect(() => {
    checkAdmin();
  }, []);

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
