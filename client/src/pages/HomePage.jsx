import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function HomePage({ setPage }) {
  const features = ["Core project workflow","User-focused project experience"]

  return (
    <div>
      <section style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to ForgeFlow</h1>
        <p style={{ fontSize: '1.125rem', color: '#64748b', maxWidth: '600px', margin: '0 auto 2rem' }}>An AI-powered platform that helps developers plan, build, verify, improve, and deploy software projects.</p>
        <button onClick={() => setPage('dashboard')} style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', fontSize: '1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>Get Started</button>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Core Capabilities</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {features.map((feature, idx) => (
            <ProjectCard key={idx} title={feature} description="Fully integrated project capability engineered for optimal user performance." category="Feature" />
          ))}
        </div>
      </section>
    </div>
  )
}
