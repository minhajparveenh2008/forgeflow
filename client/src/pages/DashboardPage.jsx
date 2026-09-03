import React, { useState, useEffect } from 'react'
import { getHealth } from '../services/api'

export default function DashboardPage() {
  const [health, setHealth] = useState('Loading...')

  useEffect(() => {
    getHealth()
      .then(res => setHealth(res.status || 'Connected'))
      .catch(() => setHealth('Offline / Development Mode'))
  }, [])

  return (
    <div>
      <h1 style={{ marginBottom: '1.5rem' }}>ForgeFlow Dashboard</h1>
      <div style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3>System Health</h3>
        <p style={{ color: health.includes('Connected') || health === 'ok' ? '#16a34a' : '#2563eb', fontWeight: 600, marginTop: '0.5rem' }}>{health}</p>
      </div>
    </div>
  )
}
