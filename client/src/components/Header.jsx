import React from 'react'

export default function Header({ page, setPage, title }) {
  return (
    <header style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ fontSize: '1.25rem', color: '#2563eb', cursor: 'pointer' }} onClick={() => setPage('home')}>{title}</h1>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => setPage('home')} style={{ background: page === 'home' ? '#2563eb' : 'transparent', color: page === 'home' ? '#fff' : '#0f172a', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>Home</button>
        <button onClick={() => setPage('dashboard')} style={{ background: page === 'dashboard' ? '#2563eb' : 'transparent', color: page === 'dashboard' ? '#fff' : '#0f172a', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>Dashboard</button>
      </nav>
    </header>
  )
}
