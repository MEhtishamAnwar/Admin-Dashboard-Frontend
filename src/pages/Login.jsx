import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function submit(e) {
    e.preventDefault()
    if (!email || !password) return setError('Please fill all fields')
    // simple frontend validation and redirect
    setError('')
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md card">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        {error && <div className="text-red-400 mb-2">{error}</div>}
        <form onSubmit={submit} className="space-y-3">
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 rounded bg-white/5" />
          <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full px-3 py-2 rounded bg-white/5" />
          <button className="w-full bg-indigo-600 py-2 rounded">Sign in</button>
        </form>
      </div>
    </div>
  )
}
