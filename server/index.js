import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './database/db.js'
import router from './routes/TodoRoute.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.listen(PORT, () => {
  console.log('Your server is running on localhost:' + PORT)
  connectDB()
})
