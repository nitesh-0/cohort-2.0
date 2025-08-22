import { useState } from "react"


function CreateTodo(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    function handleClick(){
        fetch("http://localhost:3000/createTodo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
            }),
            headers: {
                "content-Type": "application/json"
            }
        })
        .then(async function(res) {
            const json = await res.json()
            console.log(json)
        })
    }

    return <div>
        <input onChange={ (e) => {
            setTitle(e.target.value)
        }} type="text" placeholder="Title"></input><br/><br/>
        <input onChange={ (e) => {
            setDescription(e.target.value)
        } } type="text" placeholder="Description"></input><br/><br/>
        <button onClick={handleClick}>Add New Todo</button>
    </div>
}

export default CreateTodo