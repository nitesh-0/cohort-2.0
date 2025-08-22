import { useState } from 'react'


function App() {
  let [todos, setTodos] = useState([{
    title: "Go to GYM",
    description: "Go to gym from 6-7pm",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA from 7-10 pm",
    completed: false
  }])


  return (
    <div>
      {todos.map(function(todo){
       return <TodoRender title = {todo.title} description = {todo.description} completed = {todo.completed} setTodos = {setTodos} />
      })}
    </div>
  )
}

function TodoRender(props){

  function onclickHandler(){
    props.setTodos(props.completed = !props.completed)
  }

  return <div>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <button onClick={onclickHandler}>Completed: {props.completed}</button>
  </div>
}

export default App