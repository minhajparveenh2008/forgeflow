import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.log('[DB] MONGODB_URI not configured, running in local memory mode.')
      return
    }
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('[DB] MongoDB Connected Successfully')
  } catch (error) {
    console.error('[DB] Connection Error:', error.message)
  }
}
