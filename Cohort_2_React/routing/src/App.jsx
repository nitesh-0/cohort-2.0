
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import React, { Suspense } from 'react'
const DashBoard = React.lazy(() => import("./coomponents/Dashboard"))
const Landing = React.lazy(() => import("./coomponents/Landing"))
import Message from './coomponents/Message'

function App() {

  return (
    <>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path = "/message" element = { <Message/> }/>
          <Route path = "/dashboard" element = {<Suspense fallback = {"loading..."}><DashBoard/></Suspense> }/>
          <Route path = "/" element = {<Suspense fallback = {"loading..."}><Landing/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar(){
    const navigate = useNavigate()

  return <div>
    <div style={{backgroundColor: "red"}}>
      <button onClick={() => {
        navigate("/message")
      }}>
        Go to message page
      </button><br/>

      <button onClick={() => {
        navigate("/")
      }}>Go to landing page</button><br/>

      <button onClick={() => {
        navigate("/dashboard")
      }}>Go to dashboard page</button>
    </div>

  </div>
}

export default App
