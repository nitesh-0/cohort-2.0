import { useEffect, useState } from 'react'
import './App.css'

function UseEffects() {
  let [counter, setCounter] = useState(1)

  return (
    <>
      {/* <button onClick={() => {
        console.log("button clicked")
        setCounter(++counter)
      }}>click me to increase counter</button> */}

      <button onClick={(e) => {
        setCounter(parseInt(e.target.innerText))
      }}>1</button>
      <button onClick={(e) => {
        console.log(e.target.innerText)
        setCounter(parseInt(e.target.innerText))
      }}>2</button>
      <button onClick={(e) => {
        setCounter(parseInt(e.target.innerText))
      }}>3</button>
      <button onClick={(e) => {
        setCounter(parseInt(e.target.innerText))
      }}>4</button>
      
      <TodobyId id = {counter} />
    </>
  )
}

function TodobyId({id}){
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/todos.json?key=94f9efb0")
    .then( res => res.json())
    .then(data => {
      const matched = data.find(todo =>  todo.id == id)
      setTodos(matched)
    })
  }, [id])

  return <div>
     {todos ? (
        <>
          <h2>{todos.title}</h2>
          <p>{todos.description}</p>
        </>
      ) : (
        <p>Todo not found.</p>
      )}
  </div>

}

export default UseEffects