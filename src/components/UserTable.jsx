import React from 'react'

export default function UserTable({ users = [], onSearch, onEdit, onDelete, formState, setFormState, onSave, editingUser }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input onChange={e => onSearch && onSearch(e.target.value)} placeholder="Search users" className="flex-1 px-3 py-2 rounded-2xl bg-white/10 text-white placeholder-white/60 focus:outline-none" />
        <div className="flex items-center gap-2">
          <button className="bg-indigo-600 px-4 py-2 rounded-2xl" onClick={() => setFormState({ name: '', pin: '', balance: '', status: 'active' })} type="button">
            Add New
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card">
          <h3 className="font-semibold mb-3">{editingUser ? 'Edit user' : 'Add new user'}</h3>
          <div className="space-y-3">
            <input value={formState.name} onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))} placeholder="Name" className="w-full px-3 py-2 rounded-2xl bg-white/10 text-white" />
            <input value={formState.pin} onChange={e => setFormState(prev => ({ ...prev, pin: e.target.value }))} placeholder="PIN" className="w-full px-3 py-2 rounded-2xl bg-white/10 text-white" />
            <input value={formState.balance} onChange={e => setFormState(prev => ({ ...prev, balance: e.target.value }))} placeholder="Balance" type="number" className="w-full px-3 py-2 rounded-2xl bg-white/10 text-white" />
            <select value={formState.status} onChange={e => setFormState(prev => ({ ...prev, status: e.target.value }))} className="w-full px-3 py-2 rounded-2xl bg-white/10 text-white">
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
            </select>
            <button className="w-full bg-indigo-600 px-4 py-3 rounded-2xl text-white" onClick={onSave} type="button">
              {editingUser ? 'Update User' : 'Save User'}
            </button>
          </div>
        </div>

        <div className="card overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="text-sm text-white/60 uppercase tracking-[0.1em]">
              <tr>
                <th className="px-3 py-3">Name</th>
                <th className="px-3 py-3">PIN</th>
                <th className="px-3 py-3">Balance</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} className="border-t border-white/10 even:bg-white/5">
                  <td className="px-3 py-3">{u.name}</td>
                  <td className="px-3 py-3">{u.pin}</td>
                  <td className="px-3 py-3">${u.balance.toFixed(2)}</td>
                  <td className="px-3 py-3 capitalize">{u.status}</td>
                  <td className="px-3 py-3 flex gap-2">
                    <button className="text-sm text-indigo-300 hover:text-white" onClick={() => onEdit(u)} type="button">Edit</button>
                    <button className="text-sm text-red-400 hover:text-red-200" onClick={() => onDelete(u.id)} type="button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
