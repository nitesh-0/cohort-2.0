import express from "express"
import { VALUE } from '@repo/common/config'

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    
    res.json({
        msg: "Hi from the express backend",
        name: VALUE
    })
})

app.listen(3003)