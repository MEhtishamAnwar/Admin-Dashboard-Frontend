import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { user, login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true })
    }
  }, [user, navigate])

  function submit(e) {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please fill all fields')
      return
    }

    const result = login({ email, password })
    if (!result.success) {
      setError(result.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-slate-950">
      <div className="w-full max-w-md bg-slate-900/90 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
        <h2 className="text-3xl font-bold mb-2 text-white">Admin Login</h2>
        <p className="text-sm text-white/60 mb-6">Enter your admin credentials to continue.</p>
        {error && <div className="text-red-400 mb-4">{error}</div>}
        <form onSubmit={submit} className="space-y-4">
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-3 rounded-2xl font-semibold text-white hover:opacity-95 transition">
            Sign in
          </button>
        </form>
        <p className="text-xs text-white/50 mt-4">Use <span className="text-indigo-300">admin@example.com</span> / <span className="text-indigo-300">admin123</span></p>
      </div>
    </div>
  )
}
