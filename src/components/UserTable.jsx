import React from 'react'

export default function UserTable({ users = [], onSearch }) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <input onChange={e => onSearch && onSearch(e.target.value)} placeholder="Search users" className="px-3 py-2 rounded-md bg-white/5" />
        <button className="ml-2 bg-indigo-600 px-3 py-2 rounded-md">Add User</button>
      </div>
      <div className="card overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="text-sm text-white/70">
            <tr>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">PIN</th>
              <th className="px-3 py-2">Balance</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="border-t border-white/5 even:bg-white/2">
                <td className="px-3 py-3">{u.name}</td>
                <td className="px-3 py-3">{u.pin}</td>
                <td className="px-3 py-3">${u.balance}</td>
                <td className="px-3 py-3 capitalize">{u.status}</td>
                <td className="px-3 py-3">
                  <button className="text-sm text-indigo-400 mr-2">Edit</button>
                  <button className="text-sm text-red-400">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
