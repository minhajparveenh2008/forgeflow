import React from 'react'

export default function ProjectCard({ title, description, category }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <span style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 600, textTransform: 'uppercase' }}>{category}</span>
      <h3 style={{ margin: '0.5rem 0', fontSize: '1.125rem' }}>{title}</h3>
      <p style={{ color: '#64748b', fontSize: '0.875rem' }}>{description}</p>
    </div>
  )
}
