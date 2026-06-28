import React from 'react'
import { Search, User } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/6 bg-transparent">
      <div className="flex items-center gap-3">
        <div className="md:hidden">
          <button className="p-2 bg-white/5 rounded-md">☰</button>
        </div>
        <div className="relative">
          <input placeholder="Search..." className="pl-10 pr-3 py-2 rounded-md bg-white/5 text-sm" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 w-4 h-4" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-white/70">Notifications</button>
        <div className="flex items-center gap-2">
          <User className="w-6 h-6" />
          <div className="text-sm">Admin</div>
        </div>
      </div>
    </header>
  )
}
