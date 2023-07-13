import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    require: [true, 'Todo text is required'],
  },
})

const Todos = mongoose.model('Todo', todoSchema)

export default Todos
