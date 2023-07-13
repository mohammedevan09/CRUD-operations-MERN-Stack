import express from 'express'
import {
  deleteTodo,
  getTodo,
  saveTodo,
  updateTodo,
} from '../controllers/TodoController.js'
const router = express.Router()

router.get('/', getTodo)
router.post('/save', saveTodo)
router.put('/update', updateTodo)
router.delete('/delete/:_id', deleteTodo)

export default router
