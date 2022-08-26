import React, { useEffect, useContext } from 'react';
import categoryContext from '../Admin/Context/Category/categoryContext';
import 'rsuite/dist/rsuite.min.css'
import CardDetails from './CardDetails/CardDetails';

export default function Category(props) {
    const context = useContext(categoryContext);
    const {category, getCategory, deleteCategory} = context;

  
    useEffect(() => {
        getCategory();
    }, [])
   
    return (
<>
<div className="container">
    <div className="row">
        
        {category.map((categories)=> {
            return <CardDetails key={categories._id} categories = {categories} />
        })}
    </div>
    </div>
           
</>
    
    )
}
