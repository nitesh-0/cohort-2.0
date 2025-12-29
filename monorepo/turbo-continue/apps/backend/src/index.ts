import express from "express"

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    
    res.json({
        msg: "Hi from the express backend"
    })
})

app.listen(3003)