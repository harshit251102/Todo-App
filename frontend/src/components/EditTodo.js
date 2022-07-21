import React, { Fragment, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  //edit description function

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
    
  return (
    <div className="App">
    <div class="container"> 
         <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         Edit
         </button>
        
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
               <h5 class="modal-title text-danger" id="exampleModalLabel">Edit</h5>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
               <form onSubmit={updateDescription}>
                  <div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Description</label>
                     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setDescription(e.target.value);}} />
                  </div>
                  <button type="submit" class="btn btn-primary">Edit</button>
               </form>
               </div>
               <div class="modal-footer">
               <button type="button" class="btn btn-warning" data-bs-dismiss="modal" onClick={()=>{setDescription(todo.description)}}>Close</button>
               </div>
            </div>
         </div>
         </div>
         </div>
      
    </div>
  );
};

export default EditTodo;