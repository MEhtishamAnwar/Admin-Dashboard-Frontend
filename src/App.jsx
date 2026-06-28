import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import { useAuth } from './context/AuthContext'

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <div className="flex min-h-screen relative z-10">
        <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

        <div className="flex-1 flex flex-col min-h-screen bg-transparent">
          <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
          {mobileOpen && <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setMobileOpen(false)} />}
          <main className="p-4 md:p-6">
            <AppRoutes />
          </main>
        </div>
      </div>
      {!user && <Navigate to="/login" replace />}
    </div>
  )
}
