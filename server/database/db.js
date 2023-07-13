import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/todos')
    console.log('Database is connected')
  } catch (error) {
    console.log('Database disconnected')
    process.exit(1)
  }
}

export default connectDB
