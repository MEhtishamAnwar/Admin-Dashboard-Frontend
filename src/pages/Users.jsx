import React, { useState } from 'react'
import UserTable from '../components/UserTable'
import { users as initialUsers } from '../data/dummyData'

export default function Users() {
  const [users, setUsers] = useState(initialUsers)
  const [query, setQuery] = useState('')

  const filtered = users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <UserTable users={filtered} onSearch={setQuery} />
    </div>
  )
}
