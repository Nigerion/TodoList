import { useState } from "react";
import TodoForm from "./TodoFrom";
import Todo from "./Todo";
function App() {
  const [count, setCount] = useState([])
  const addTask=(input)=>{
    if(input){
      const item={
        id:Math.random().toString(36).substr(2,9),
        task :input,
        complete: false
      }
      setCount([...count,item])
    }
  }
  const removeTask=(id)=>{
    setCount([...count.filter((todo)=>todo.id!==id)])
  }
  const handleToggle=(id)=>{
     setCount([...count.map((todo)=>
      todo.id===id? { ...todo, complete: !todo.complete}:{...todo})])
  }
  return (
    <div className="App">
      <header>
        <h1>Список задач : {count.length}</h1>
        <TodoForm addTask={addTask}></TodoForm>
        {...count.map((todo)=>{
          return (
            <Todo 
            key={todo.id} 
            todo={todo} 
            toggleTask={handleToggle} 
            removeTask={removeTask}>
            </Todo>
          )
        })}
      </header>
    </div>
  )
}

export default App
