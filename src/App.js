import './App.css';
import  Header  from './Components/Header.js';
//import { Todos } from './Components/Todos.js';
import { Footer }  from './Components/Footer.js';
import { AddTodo } from './Components/AddTodo.js';
import { AboutUs } from './Components/AboutUs';
import React,{ useState , useEffect} from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
 
function App() {
  
  let initTodo = !localStorage?.getItem("Todos")? [] : JSON.parse(localStorage?.getItem("Todos"));

  const onDelete=(todos)=>{
    console.log("I'm onDelete of todo",todos)
    // let index = todo.indexOf(todo);
    // todo.spice(index,1);
    setTodos(todo.filter((e)=>{
      return e!==todos;
    }));
    console.log("deleted",todos)
    localStorage.setItem("Todos",JSON.stringify(todos));
  }  

  const addTodo = (title, desc) =>{
    console.log("I am adding this todo",title,desc)
    let sno;
    if(todo.length === 0){
      sno = 0;
    }
    else{
      sno  = todo[todo.length-1].sno + 1;
    }
    const myTodo = {
      sno : sno,
      title: title,
      desc: desc, 
    }
    setTodos([...todo, myTodo]);
    console.log(myTodo);
  }

  const[todo, setTodos ] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("Todos",JSON.stringify(todo));
  }, [todo])

  return (
    <>
    <Router>
      <Header title = "My Todos List" searchBar = {false}/>

      <Routes>
        <Route exact path = "/" element = { <AddTodo addTodo={addTodo} todo = {todo} onDelete = {onDelete} />}></Route>
        <Route exact path="/AboutUs" element={<AboutUs />} />
      </Routes>

      <Footer />
    </Router>
    </>
  );
}

export default App;
