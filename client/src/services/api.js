import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || '/api'

export const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' }
})

export const getHealth = async () => {
  const response = await api.get('/health')
  return response.data
}

export const getProjects = async () => {
  const response = await api.get('/projects')
  return response.data
}
