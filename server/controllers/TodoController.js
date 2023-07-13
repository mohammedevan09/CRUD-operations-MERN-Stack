import Todos from '../models/TodoModel.js'

const getTodo = async (req, res) => {
  try {
    const todo = await Todos.find()
    res.status(200).send(todo)
  } catch (error) {
    res.status(404).json({
      message: 'Sorry cannot get data',
    })
  }
}

const saveTodo = async (req, res) => {
  const { text } = req.body
  const todo = new Todos({
    text,
  })
  try {
    await todo.save()
    res.status(200).send(todo)
  } catch (error) {
    res.status(400).json({
      message: 'Sorry cannot send data',
    })
  }
}

const updateTodo = async (req, res) => {
  const { _id, text } = req.body
  try {
    await Todos.findByIdAndUpdate(_id, { $set: { text } })
    res.status(201).send({ message: 'Updated Successfully' })
  } catch (error) {
    res.status(400).json({
      message: 'Sorry cannot find data',
    })
  }
}

const deleteTodo = async (req, res) => {
  const _id = req.params._id
  try {
    const todo = await Todos.findByIdAndDelete({ _id: _id })
    res.status(200).send({ message: 'Deleted Successfully' })
  } catch (error) {
    res.status(400).json({
      message: 'Sorry cannot delete data',
    })
  }
}

export { getTodo, saveTodo, updateTodo, deleteTodo }
