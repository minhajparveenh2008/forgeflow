import { Project } from '../models/ProjectModel.js'

export const getProjects = async (_req, res) => {
  try {
    const projects = await Project.find().limit(20)
    res.json({ success: true, count: projects.length, data: projects })
  } catch (error) {
    res.json({ success: true, data: [{ name: 'ForgeFlow', description: 'An AI-powered platform that helps developers plan, build, verify, improve, and deploy software projects.' }] })
  }
}

export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body)
    res.status(201).json({ success: true, data: project })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}
