
import { useState } from 'react'
import Todolist from './Todolist';
import Delete from './Delete';
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo(){
    if(todo != ""){
        setTodos([...todos, todo]);
    }
   
    setTodo("");
  }
  function deleteTodo(num){
    setTodos(todos.filter(n => n != num))
    console.log(num);
  }

  return (
    <>
    <div>
      <input placeholder='Enter Todo' value={todo} onChange={(e) => setTodo(e.target.value)}/>
      <button onClick={addTodo}>Add</button>
      <Todolist  todos={todos} deleteTodo={deleteTodo}/>
      
      
    </div>
    </>
  )
}

export default App
