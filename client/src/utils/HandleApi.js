import axios from 'axios'

const baseUrl = 'http://localhost:8000'

const getAllTodo = (setTodo) => {
  axios.get(baseUrl).then((data) => {
    console.log('get...', data.data)
    setTodo(data.data)
  })
}

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text: text })
    .then((data) => {
      console.log('creat...', data)
      setText('')
      getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateToDo = (toDoId, text, setToDo, setIsUpdating, setText) => {
  axios
    .put(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      console.log('update...', data)
      setText('')
      setIsUpdating(false)
      getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo) => {
  axios
    .delete(`${baseUrl}/delete/${_id}`)
    .then(({ data }) => {
      console.log('delete...', data)
      getAllTodo(setToDo)
    })
    .catch((err) => console.log(err))
}

export { getAllTodo, addToDo, updateToDo, deleteToDo }
