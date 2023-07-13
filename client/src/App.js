import { useEffect, useReducer, useState } from 'react'
import Todos from './components/Todos'
import { addToDo, deleteToDo, getAllTodo, updateToDo } from './utils/HandleApi'

function App() {
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState('')

  useEffect(() => {
    getAllTodo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Type Anything"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? 'Update' : 'Add'}
          </button>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <Todos
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
