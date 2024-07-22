import { useState } from "react"

export default function ToDoInput(props){
    const [todoValue, setTodoValue, ToDoInput] = useState('')

    const {updateTodos} = props
    return(
        <header>
            <input onChange={(e) => {setTodoValue(e.target.value)}} value={todoValue} type="text" placeholder="Enter Task To Do"/>
            <button onClick={() => {
                updateTodos(todoValue) 
                setTodoValue('')   
            }
            }>Add</button>
        </header>
    )
}