import React from 'react'

export default function Footer({ title }) {
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '1.5rem', textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
      <p>© {new Date().getFullYear()} {title}. Built with ForgeFlow.</p>
    </footer>
  )
}
