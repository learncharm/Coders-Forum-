import React, { useEffect, useContext } from 'react';
import { Table, Drawer, Button, Form } from 'rsuite';
import categoryContext from '../Context/Category/categoryContext';
import 'rsuite/dist/rsuite.min.css'
import AddCategory from './AddCategory';
import SideNav from '../SideNav/SideNav';
import TrashIcon from '@rsuite/icons/Trash';
import './Category.css';

export default function Category(props) {
    const context = useContext(categoryContext);
    const {category, getCategory, deleteCategory} = context;
    const {categories} = props;

  
    useEffect(() => {
        getCategory();
    }, [])

  
    const [backdrop, setBackdrop] = React.useState('static');
    const [open, setOpen] = React.useState(false);



   
    return (
        <>
        <SideNav/>
            <div className="content">
                <h2 className="category_head">Categories</h2>
                <hr className="category_hr" />
                <Button onClick={() => setOpen(true)}>Add Category</Button>


                <Drawer backdrop={backdrop} open={open} onClose={() => setOpen(false)}>
                    <Drawer.Header>
                        <Drawer.Title>Add New Category</Drawer.Title>
                        <Drawer.Actions>
                            <Button onClick={() => setOpen(false)}>Cancel</Button>

                        </Drawer.Actions>
                    </Drawer.Header>
                    <Drawer.Body>
                     
                        <AddCategory/>
                    </Drawer.Body>
                </Drawer>

                <Table
       
          height={500}
      
          
          data={category}
                    onRowClick={data => {
                        // console.log(data);
                    }}
        >

                

                    <Table.Column width={70} align="center" resizable>
                        <Table.HeaderCell>No.</Table.HeaderCell>
                        <Table.Cell>🌟</Table.Cell>
                    </Table.Column>
                    <Table.Column width={70} align="center" resizable>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.Cell dataKey="title" />
                    </Table.Column>

                    <Table.Column width={300} align="center" resizable>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.Cell dataKey="description" />
                    </Table.Column>

                    <Table.Column width={120} fixed="right">
        <Table.HeaderCell>Action</Table.HeaderCell>

        <Table.Cell>
          
            
        {data => {
            function handleAction() {
              deleteCategory(data._id)
            }
            return (
              <span>
                <a onClick={handleAction}> <TrashIcon/> </a>
              </span>
            );
          }}
        
        
        </Table.Cell>
      </Table.Column>
                </Table>


            </div>
        </>
    )
}
