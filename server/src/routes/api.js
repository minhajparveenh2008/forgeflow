import express from 'express'
import projectRoutes from './projects.js'

const router = express.Router()

router.get('/health', (_req, res) => res.json({ status: 'ok', timestamp: new Date() }))
router.use('/projects', projectRoutes)

export default router
