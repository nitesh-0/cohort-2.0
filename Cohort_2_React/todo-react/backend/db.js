const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://sahmahadev:A1yCLp2HFCRqEpBR@cluster0.2ug3k.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}