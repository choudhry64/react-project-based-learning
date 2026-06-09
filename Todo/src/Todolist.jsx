import Delete from "./Delete"

export default function Todolist({todos, deleteTodo}){
        return (
        <>
        <ul>        
            {todos.map((todo, index)=> (  // this is how we take array's property usning prope
                <li key={index} >{todo} <button lable = "Delete" onClick={() => deleteTodo(todo)}>Delete</button></li> 
            ))}
            
        </ul>
        </>
    )
}