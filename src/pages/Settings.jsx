import React from 'react'

export default function Settings() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card">
          <h4 className="font-semibold mb-2">Theme</h4>
          <div className="flex gap-2">
            <button className="px-3 py-2 bg-white/5 rounded">Light</button>
            <button className="px-3 py-2 bg-white/5 rounded">Dark</button>
          </div>
        </div>

        <div className="card">
          <h4 className="font-semibold mb-2">Password</h4>
          <div className="flex gap-2">
            <input placeholder="New password" className="px-3 py-2 rounded bg-white/5" />
            <button className="px-3 py-2 bg-indigo-600 rounded">Change</button>
          </div>
        </div>

        <div className="card col-span-1 md:col-span-2">
          <h4 className="font-semibold mb-2">Notifications</h4>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Email notifications
          </label>
        </div>
      </div>
    </div>
  )
}
