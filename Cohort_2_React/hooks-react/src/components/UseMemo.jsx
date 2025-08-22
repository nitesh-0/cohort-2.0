import { useMemo, useState } from 'react'
import './App.css'

function UseMemo() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(0)

 let counter = useMemo(() => {
  let counter = 0
 for(let i = 0; i <= inputValue; i++){
  counter = counter + i
 }
 }, [inputValue])


  return (
    <>
    <input onChange={(e) => {
      setInputValue(e.target.value)
    }} type="text" /><br/>

    Sum from 1 to {inputValue} is: {counter} <br/>

    <button onClick={() => {
      setCount(count + 1)
    }}>Counter {count}</button>
    </>
  )
}

export default UseMemo