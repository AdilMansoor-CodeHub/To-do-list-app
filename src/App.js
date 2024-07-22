import logo from './logo.svg';
import './App.css';

import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import { useState, useEffect } from 'react';

// function presistData(newList){
//   localStorage.setItem('todos', JSON.stringify({todos : newList}))
// }

function App() {
  
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function updateTodos(newTodo){
      const newTodoList = [...todos, newTodo]
      setTodos(newTodoList)
      
  }

  function deleteTodos(index){
    const newTodoList = todos.filter((todos, todoIndex) => {return todoIndex !== index })
    setTodos(newTodoList)

  }

  function editTodos(index){
      const valueToBeEdited = todos[index]
      setTodoValue(valueToBeEdited)
      deleteTodos(index)
  }
  // useEffect(() => {
  //   if(!localStorage){
  //     return
  //   }
  //   let localTodos = localStorage.getItem('todos')
  //   if(localTodos){
  //     return
  //   }
    
  //   localTodos = JSON.parse(localTodos).todos
  //   setTodos(localTodos)

  // } , [])

  return (
   <>

      <ToDoInput todoValue = {todoValue} setTodoValue = {setTodoValue} updateTodos = {updateTodos}/>
      <ToDoList deleteTodos = {deleteTodos} editTodos = {editTodos} todos = {todos} />
   </>
  );
}

export default App;
