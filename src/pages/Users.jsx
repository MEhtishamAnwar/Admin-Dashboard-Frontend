import React, { useState } from 'react'
import UserTable from '../components/UserTable'
import { users as initialUsers } from '../data/dummyData'

export default function Users() {
  const [users, setUsers] = useState(initialUsers)
  const [query, setQuery] = useState('')
  const [editingUser, setEditingUser] = useState(null)
  const [formState, setFormState] = useState({ name: '', pin: '', balance: '', status: 'active' })

  const filtered = users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()))

  const handleEdit = user => {
    setEditingUser(user)
    setFormState({ name: user.name, pin: user.pin, balance: user.balance, status: user.status })
  }

  const handleDelete = id => {
    setUsers(prev => prev.filter(user => user.id !== id))
  }

  const handleAddOrUpdate = () => {
    if (!formState.name || !formState.pin || !formState.balance) return
    if (editingUser) {
      setUsers(prev => prev.map(user => user.id === editingUser.id ? { ...user, ...formState, balance: Number(formState.balance) } : user))
      setEditingUser(null)
    } else {
      const nextId = Math.max(...users.map(user => user.id), 0) + 1
      setUsers(prev => [...prev, { id: nextId, ...formState, balance: Number(formState.balance) }])
    }
    setFormState({ name: '', pin: '', balance: '', status: 'active' })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Users</h2>
          <p className="text-sm text-white/70">Manage the user information and account statuses.</p>
        </div>
      </div>
      <UserTable
        users={filtered}
        onSearch={setQuery}
        onEdit={handleEdit}
        onDelete={handleDelete}
        formState={formState}
        setFormState={setFormState}
        onSave={handleAddOrUpdate}
        editingUser={editingUser}
      />
    </div>
  )
}
