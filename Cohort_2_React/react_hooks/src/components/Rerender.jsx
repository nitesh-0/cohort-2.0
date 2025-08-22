import React, { useState } from 'react'
import './App.css'

function Rerender() {
  const [number, setNumber] = useState(0)

  function handleClick(){
    setNumber(Math.random())
  }


  return (
    <div><br/>
      <button onClick={handleClick}>Click me to change the title</button><br/><br/>
      <Header title = {number} />
      <Header title = "Harkirat 2"/>
      <Header title = "Harkirat 3"/>
      <Header title = "Harkirat 4"/>
      <Header title = "Harkirat 5"/>
    </div>
  )
}


const Header = React.memo(function Header({title}){
  
  return <div>
    My name is {title}
  </div>
})

export default Rerender