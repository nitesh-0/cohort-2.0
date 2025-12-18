import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    .then((res) => {
      setLoading(false)
      console.log(res)
      console.log("result: ", res.data)
      const result = res.data
      setName(result.name)
      setEmail(result.email)
    })

  }, [])

  if(loading){
    return <div>
      loading...
    </div>
  }

  return (
    
    <div>
      <div>
        {name}
      </div>
      <div>
        {email}
      </div>
    </div>
  )
}

export default App
