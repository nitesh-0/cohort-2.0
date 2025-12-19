"use client"

import axios from "axios"
import { useState } from "react"


export function SignupComponent(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    async function handleSignupClick(){

        const response = await axios.post("http://localhost:3000/api/user", {
            email,
            password
        })

        console.log(response)
    }

    return <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center">

            <div className="w-[200px] border">
                <input onChange={(e) => {
                    setEmail(e.target.value)
                }} placeholder="Enter username"/>
            </div>
            <div className="w-[200px] border">
                <input onChange={(e) => {
                    setPassword(e.target.value)
                }} type = "password" placeholder="Enter Password"/>
            </div>
            <div className="w-[100px] border text-center  cursor-pointer">
                <button onClick={handleSignupClick}>Sign Up</button>
            </div>

        </div>

        
    </div>
}