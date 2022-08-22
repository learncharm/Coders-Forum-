import React, { useEffect, useContext } from 'react';
import { Table, Drawer, Button, Form } from 'rsuite';
import ThreadContext from '../Context/Thread/threadContext';
import 'rsuite/dist/rsuite.min.css'
import SideNav from '../SideNav/SideNav';
import TrashIcon from '@rsuite/icons/Trash';

export default function Thread(props) {
    const TContext = useContext(ThreadContext);
    const {thread, getAllThread} = TContext;
    const {threads} = props;

  
    useEffect(() => {
        getAllThread();
    }, [])

  
  



   
    return (
        <>
        <SideNav/>
            <div className="content">
                <h2 className="category_head">Categories</h2>
                <hr className="category_hr" />



                <Table
       
          height={500}
      
          
          data={thread}
                    onRowClick={data => {
                        console.log(data);
                    }}>

                

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

        {/* <Table.Cell>
          
            
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
        
        
        </Table.Cell> */}
      </Table.Column>
                </Table>


            </div>
        </>
    )
}
