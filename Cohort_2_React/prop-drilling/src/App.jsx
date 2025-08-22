import { useContext, useState } from "react"
import {countContext} from "./Context"

function App() {
  const [count, setCount] = useState(0)
  console.log("app rerendered")

  // to use context API, wrap anyone who wants to use it inside a provider
  return (
    <>
    <countContext.Provider value = {{count, setCount}}>
      <Count count = {count} setCount = {setCount} />
    </countContext.Provider>
      
    </>
  )
}

function Count(){
console.log("count rerenderd")
  return <div>
    <CountRenderer/>
    <Button/>
  </div>
}

function CountRenderer(){
  const count = useContext(countContext)

  return <div>
    {count}
  </div>
}

function Button(){
  const {count, setCount} = useContext(countContext)

  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>Increase count</button> <br/>

    <button onClick={() => {
      setCount(count-1)
    }}>Decrease Count</button>
  </div>
}

export default App
