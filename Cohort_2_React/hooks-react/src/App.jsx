import { memo, useCallback, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const RenderSomething = useCallback(() => {
    
    console.log("Hi There")
  }, [])


  return (
    <>   
    <button onClick={() => {
      setCount(count + 1)
    }}>Counter {count}</button><br/>

    <Child inputFunction = {RenderSomething}/>
    </>
  )
}


const Child = memo(({inputFunction}) => {
  console.log("Child rerendered")

  return <div>
    <button onClick={inputFunction}>Click Button</button>
  </div>
})

export default App