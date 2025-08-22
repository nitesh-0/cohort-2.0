import { useState, useEffect } from "react"
import CreateTodo from "./components/CreateTodo"
import Todos from "./components/Todos"

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function(res) {
        const js = await res.json()
        console.log(js)
        setTodos(js.todos)
      })
  }, []) // ✅ empty dependency array = run only once on mount

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
