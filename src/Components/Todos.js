import React from 'react'
import { Todoitem } from '../Components/Todoitem';

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className='container' style={myStyle}> 
      <h3 className='text-center my-3'>Todo List</h3>
      {props.todo.length===0 ? "No Todos to display": 
      props?.todo?.map((todo)=>{
        console.log(todo.sno);
        return (
        <Todoitem todo = {todo} key={todo.sno} 
        onDelete = {props.onDelete}/>
      )
    })
      }
    </div>
  )
}
