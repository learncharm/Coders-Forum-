import { useState } from "react";
import ThreadContext from "./threadContext";

const ThreadState = (props)=> {

    const [thread, setThread] = useState([]);
    // Fetch Category
        const getAllThread = async () => {
            //API Call
            const response = await fetch(`http://localhost:5000/api/thread/allthreads`);
            const json = await response.json();
            console.log(json);
            setThread(json);
        }
      

        // //Add Category

        // const addCategory = async (title,description)=>{

        //     const response  = await fetch("http://localhost:5000/api/thread/addcategory", {
        //         method: 'POST',
        //         headers: {
        //             'Accept': "*/*",
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({title, description})
        //     });
        //     console.log("Adding a new category");
        //    const categories = [
        //     {
        //       "_id": "62c047894cc02c8454202ffa",
        //       "title": title,
        //       "description":description,
        //       "date": "2022-07-02T13:26:33.880Z",
        //       "__v": 0
        //     }
        // ]
        //     setCategory(category.concat(categories))
        // }
        
        // //Delete Category
        
        // const deleteCategory = async (id)=> {
        //     const response  = await fetch(`http://localhost:5000/api/category/deletecategory/${id}`, {
        //         method: 'DELETE',
        //         headers: {
        //             'Accept': "*/*",
        //             'Content-Type': 'application/json'
        //         },
        //     });
        //     console.log("Deleting the category with id: " + id)
        //     const newCategories = category.filter((categories)=>{return categories._id !== id})
        //     setCategory(newCategories)
        // }
    return(
        <ThreadContext.Provider value={{thread, getAllThread}}>
                {props.children}
        </ThreadContext.Provider>
    )
}

export default ThreadState;
