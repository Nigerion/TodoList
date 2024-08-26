import { useState } from "react"
function TodoForm({addTask}){
    const [input, setInput]=useState('');
    const handleSumbit=(evt)=>{
        setInput(evt.currentTarget.value)
    }
    const handleChange=(evt)=>{
        evt.preventDefault();
        addTask(input);
        setInput('')
    }
    const handleKeyPress=(evt)=>{
        if(evt.key === 'Enter'){
            handleSumbit(evt)
        }
    }
    return (
        <form onSubmit={handleSumbit} >
            <input type="text" value={input} onChange={handleChange} onKeyDown={handleKeyPress} placeholder="Введите значение..."/>
            <button>Сохранить</button>
        </form>
    )
}
export default TodoForm