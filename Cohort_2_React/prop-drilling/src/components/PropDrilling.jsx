import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)
  console.log("app rerendered")

  return (
    <>
      <Count count = {count} setCount = {setCount} />
      
    </>
  )
}

function Count({count, setCount}){
console.log("count rerenderd")
  return <div>
    {count}
    <Button setCount={setCount} count = {count}/>
  </div>
}

function Button({setCount, count}){

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
