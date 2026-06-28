import React from 'react'

export default function StatCard({ title, value, icon }) {
  return (
    <div className="card flex items-center justify-between p-4 hover:shadow-xl transition">
      <div>
        <div className="text-sm text-white/70">{title}</div>
        <div className="text-2xl font-bold mt-1">{value}</div>
      </div>
      <div className="text-white/60">{icon}</div>
    </div>
  )
}
