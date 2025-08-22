import { useState } from 'react'
import './App.css'


let counter = 4

function Key() {

  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to GYM",
    description: "Go to gym from 4-6pm"
  }, {
    id: 2,
    title: "learn DSA",
    description: "learn DSA from 6-9pm"
  }, {
    id: 3,
    title: "learn Dev",
    description: "learn Dev from 10pm-1am"
  }])

  function handleClick(){
    setTodos([...todos, {
      id: counter++,
      title: "Keep Going",
      description: "keep going, keep coding"
    }])
  }

  return <div>
    <button onClick={handleClick}>Add new todo</button>
    {todos.map((todo) => {
      return <RenderTodos key = {todo.id} title = {todo.title} description = {todo.description}/>
    })}
    
  </div>
  
}

function RenderTodos(props){
  return <div>
    <h2>{props.title}</h2>
    <h3>{props.description}</h3>
  </div>
}


export default Key
