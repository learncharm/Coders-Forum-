import React, {useEffect, useState} from 'react';
import {Table } from 'rsuite';
import  'rsuite/dist/rsuite.min.css'


export default function Admin() {
 
  const [open, setOpen] = React.useState(false);

  const [category, setCategory] = useState([]);
  async function getAllCategories(){
    const data  = await fetch('http://localhost:5000/api/category/fetchallcategory');
    const passData = await data.json();
    console.log(passData);
    setCategory(passData);

  }
 useEffect(() => {
      getAllCategories();
  }, [])
  return (

    <div>

      
               <Table  data={category}
      onRowClick={data => {
        console.log(data);}}>
            
               <Table.Column width={70} align="center" fixed>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.Cell dataKey="title"/>
      </Table.Column>

               <Table.Column width={300} align="center" fixed>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.Cell dataKey="description"/>
      </Table.Column>
               </Table>
         
      
    </div>
  )
}
