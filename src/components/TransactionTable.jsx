import React from 'react'

export default function TransactionTable({ items }) {
  return (
    <div className="card overflow-x-auto">
      <table className="min-w-full text-left">
        <thead className="text-sm text-white/70">
          <tr>
            <th className="px-3 py-2">ID</th>
            <th className="px-3 py-2">User</th>
            <th className="px-3 py-2">Type</th>
            <th className="px-3 py-2">Amount</th>
            <th className="px-3 py-2">Date</th>
            <th className="px-3 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map(t => (
            <tr key={t.id} className="border-t border-white/5 even:bg-white/2">
              <td className="px-3 py-3">{t.id}</td>
              <td className="px-3 py-3">{t.user}</td>
              <td className="px-3 py-3 capitalize">{t.type}</td>
              <td className="px-3 py-3">${t.amount}</td>
              <td className="px-3 py-3">{t.date}</td>
              <td className="px-3 py-3">{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
