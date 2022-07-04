import React, { useEffect, useState } from 'react';
import { Table, Drawer, Button, Form } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'

export default function Category() {
    const [category, setCategory] = useState([]);
    async function getAllCategories() {
        const data = await fetch('http://localhost:5000/api/category/fetchallcategory');
        const passData = await data.json();
        console.log(passData);
        setCategory(passData);

    }
    useEffect(() => {
        getAllCategories();
    }, [])


    var num = 0;



    const styles = {
        radioGroupLabel: {
            padding: '8px 12px',
            display: 'inline-block',
            verticalAlign: 'middle'
        }
    };
    const [backdrop, setBackdrop] = React.useState('static');
    const [open, setOpen] = React.useState(false);

    // add category to database
    const [addCategory, setAddCategory] = useState("");

    // const onChange = (e) => { setAddCategory({ ...addCategory, [e.target.name]: e.target.value }) }
    return (
        <>
            <div>
                <Button onClick={() => setOpen(true)}>Add Category</Button>


                <Drawer backdrop={backdrop} open={open} onClose={() => setOpen(false)}>
                    <Drawer.Header>
                        <Drawer.Title>Add New Category</Drawer.Title>
                        <Drawer.Actions>
                            <Button onClick={() => setOpen(false)}>Cancel</Button>

                        </Drawer.Actions>
                    </Drawer.Header>
                    <Drawer.Body>
                        <Form>
                            <Form.Group controlId="name">
                                <Form.ControlLabel>Category Name</Form.ControlLabel>
                                <Form.Control value={addCategory} onChange={(e)=>{setAddCategory(e.target.value)}} name="category" id="category" />
                                <Form.HelpText>Category Name is required</Form.HelpText>
                            </Form.Group>

                            <Form.Group>
                                <Button appearance="primary">Add Category</Button>
                            </Form.Group>
                        </Form>
                    </Drawer.Body>
                </Drawer>

                <Table data={category}
                    onRowClick={data => {
                    }}>

                    <Table.Column width={70} align="center" fixed>
                        <Table.HeaderCell>No.</Table.HeaderCell>
                        <Table.Cell>🌟</Table.Cell>
                    </Table.Column>
                    <Table.Column width={70} align="center" fixed>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.Cell dataKey="title" />
                    </Table.Column>

                    <Table.Column width={300} align="center" fixed>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.Cell dataKey="description" />
                    </Table.Column>
                </Table>


            </div>
        </>
    )
}
