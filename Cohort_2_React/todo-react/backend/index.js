const express = require("express")
const zod = require("./types")
const {todo} = require("./db")
const cors = require("cors")

const app = express() 
app.use(express.json())
app.use(cors())

app.get("/todos", async (req, res) => {

    const todos = await todo.find()

    res.json({
        todos
    })
})

app.post("/createTodo", async (req, res) => {
    const createTodoBody = req.body
    const isValid = zod.createTodoZod.safeParse(createTodoBody)
    console.log(isValid)
    if(!isValid.success){
        res.status(411).json({
            msg: "You sent the wrong input types"
        })
        return
    }

    //else put it in mongodb
    newTodo = await todo.create({
        title: createTodoBody.title,
        description: createTodoBody.description,
        completed: false
    })

    res.json({
        msg: "Todo created successfully",
        id: newTodo._id
    })
})

app.put("/completed", async (req, res) => {
    const updateTodoBody = req.body
    const isValidUpdate = zod.updateTodoZod.safeParse(updateTodoBody)
    if(!isValidUpdate.success){
        res.status(411).json({
            msg: "You sent the wrong input types"
        })
        return
    }

    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo updated Successfully"
    })

})

app.listen(3000, () => {
    console.log(`The app is listening on port: 3000`)
})