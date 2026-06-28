import React from 'react'

export default function Profile() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      <div className="card max-w-md">
        <h3 className="font-bold">Admin Name</h3>
        <p className="text-sm text-white/70">admin@example.com</p>
        <p className="text-sm mt-2">Role: Super Admin</p>
        <div className="mt-4">
          <button className="px-3 py-2 bg-indigo-600 rounded-md">Edit Profile</button>
        </div>
      </div>
    </div>
  )
}
