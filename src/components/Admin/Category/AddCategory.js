import React, {useEffect, useState} from 'react';


export default function AddCategory() {
    
  const [category, setCategory] = useState({
    title: "", description: ""
  });

  let name, value;
  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setCategory({ ...category, [name]: value });
  }
  const PostData = async (e) => {
    e.preventDefault();

    const { title , description } = category;

    const response = await fetch(`http://localhost:5000/api/category/addcategory/` , {
      // mode: "no-cors",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description })
    });
    const res = await response.json(); 
    // console.log(res)

    setCategory({title: "", description: ""});
    alert("Category Added Successfully");
  }

  return (
    <>
    <div className='container'>
    <div className='add-thread'>
    <form method='POST'  className='add-thread-form' onSubmit={PostData}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
              <input type="text" onChange={handleInputs} name="title" value={category.title} className="form-control " id="title" aria-describedby="emailHelp" minLength={3} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
              <input type="text" onChange={handleInputs} name="description" value={category.description} className="form-control" id="description" minLength={5} required/>
            </div>
            <button type="submit" className="btn btn-primary thread-btn">Submit</button>
            {/* <input type="submit" onClick={PostData} className="btn btn-primary" value="Submit" /> */}
          </form>
          </div>
          </div>
    </>
  )
}
