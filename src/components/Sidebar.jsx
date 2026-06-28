import React from 'react'
import { Sparkle, X, Crown, Rocket, Home, Users as UsersIcon, CreditCard, Settings as SettingsIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const links = [
    { to: '/dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { to: '/users', label: 'Users', icon: <UsersIcon className="w-5 h-5" /> },
    { to: '/transactions', label: 'Transactions', icon: <CreditCard className="w-5 h-5" /> },
    { to: '/settings', label: 'Settings', icon: <SettingsIcon className="w-5 h-5" /> },
  ]

  return (
    <aside className="w-72 bg-white/5 border-r border-white/6 min-h-screen p-4 hidden md:block">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
          <Sparkle className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold">NexsusFlow</h3>
          <p className="text-xs text-white/60">Premium Suite</p>
        </div>
      </div>

      <nav className="space-y-2">
        {links.map(l => (
          <NavLink key={l.to} to={l.to} className={({isActive}) => `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/3 transition ${isActive ? 'bg-white/5' : ''}`}>
            <div className="text-white/80">{l.icon}</div>
            <div className="font-medium">{l.label}</div>
          </NavLink>
        ))}
      </nav>

      <div className="mt-8">
        <div className="card relative overflow-hidden">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white/90">Ultra Pro</h4>
              <p className="text-xs text-white/60">Advanced Analytics</p>
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 rounded-lg font-semibold hover:scale-105 transition">Upgrade Now</button>
        </div>
      </div>
    </aside>
  )
}