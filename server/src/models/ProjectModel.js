import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now }
})

export const Project = mongoose.models.Item || mongoose.model('Item', schema)
