import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom'

export default function Category() {

    let navigate = useNavigate();

    let count = 0;

    const checkAdmin = () => {
        if(localStorage.getItem('admin')!=="true")
          navigate("/admin/login");
      }

    const [category, setCategory] = useState([]);
    const getCategory = async () => {
        //API Call
        const url = `http://localhost:5000/api/category/fetchallcategory`;
        // console.log(url)
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);
        setCategory(json);
    }

    const deleteCategory = async (id) => {
        // API Call
        const response = await fetch(`http://localhost:5000/api/category/deletecategory/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        // const json = await response.json();
        // console.log(json);
    
        const newCat = category.filter((dt) => { return dt._id !== id })
        setCategory(newCat);
        alert("Category Deleted")
      }

    useEffect(() => {
        checkAdmin();
        getCategory();
    }, [])

    return (
        <>
            <NavBar />
            <div className="container">

                <h2 className='my-3 text-center'>All Categories</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope='col'>Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.map((cat) => {
                            return <tr>
                                <th scope="row">{++count}</th>
                                <td>{cat.title}</td>
                                <td>{cat.description}</td>
                                <td><button type="button" class="btn btn-sm btn-outline-danger" onClick={() => { deleteCategory(cat._id); }}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
