import React, {useContext, useState} from 'react';
import categoryContext from '../Context/Category/categoryContext';
import { Table, Drawer, Button, Form } from 'rsuite';
// import { useNavigate } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css'


export default function AddCategory() {
    // let navigate  = useNavigate();
    
    const [open, setOpen] = useState(true);
    
    const [category, setCategory] = useState({title: "", description: ""})
    const context = useContext(categoryContext);
    const {addCategory} = context;
    const handleClick = (e)=> {
        e.preventDefault()
        addCategory(category.title, category.description);
        //  setOpen(false)
        // navigate("/admin/category")
        setCategory({title: "", description: ""})
    }
    const onChange = (e)=> {
        setCategory ({...category, [e.target.name]: e.target.value})
    }
    
    
  return (
    <div>

<Form method='POST'>
    <Form.Group controlId="title">
      <Form.ControlLabel>Title</Form.ControlLabel>
     
                                <input type="text" name="title" id="title" value={category.title} onChange={onChange}/>
      <Form.HelpText>Title is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="description">
      <Form.ControlLabel>Description</Form.ControlLabel>
    <input type="text" name="description" id="description"  value={category.description} onChange={onChange}/>
      <Form.HelpText>Description is required</Form.HelpText>
    </Form.Group>
                                <Button appearance="primary" onClick={handleClick}>Submit</Button>

    </Form>
      {/* <form action="" method='POST'>
                    
 



    </form> */}
    </div>
  )
}
