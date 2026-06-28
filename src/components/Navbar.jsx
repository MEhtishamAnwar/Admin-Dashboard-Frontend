import React from 'react'
import { Search, User, Menu } from 'lucide-react'

export default function Navbar({ mobileOpen, setMobileOpen }) {
  return (
    <header className="flex items-center justify-between px-4 py-4 border-b border-white/10 bg-black/10 backdrop-blur-xl md:px-6">
      <div className="flex items-center gap-3">
        <button className="md:hidden p-2 bg-white/10 rounded-lg" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu className="w-5 h-5 text-white" />
        </button>
        <div className="relative w-full md:w-auto">
          <input placeholder="Search..." className="w-full md:w-72 pl-10 pr-3 py-2 rounded-2xl bg-white/10 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 w-4 h-4" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden md:inline text-white/70 hover:text-white transition">Notifications</button>
        <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-2xl">
          <User className="w-5 h-5 text-white" />
          <div className="text-sm text-white/90">Admin</div>
        </div>
      </div>
    </header>
  )
}
