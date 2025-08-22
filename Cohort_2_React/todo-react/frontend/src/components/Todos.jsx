
function Todos({todos}){

    function handleClick(id){

        fetch("http://localhost:3000/completed", {
            method: "PUT",
            body: JSON.stringify({
                id: id
            }),
            headers: {
                "content-Type": "application/json"
            }
        })
        .then(async function(res){
            const result = await res.json()
            console.log(result)
        })
    }

    return <div>
        {todos.map((todo) => {
            console.log(todo._id)
            return <div>
                    <h1>{todo.title} </h1>
                    <h2>{todo.description}</h2>
                    <button onClick={() => handleClick(todo._id)}>{todo.completed == true ? "completed" : "Mark as complete"}</button>
                </div> 
            })    
        }
    </div>
}

export default Todos