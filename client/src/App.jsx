import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header page={currentPage} setPage={setCurrentPage} title="ForgeFlow" />
      <main style={{ flex: 1, padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {currentPage === 'home' ? <HomePage setPage={setCurrentPage} /> : <DashboardPage />}
      </main>
      <Footer title="ForgeFlow" />
    </div>
  )
}
