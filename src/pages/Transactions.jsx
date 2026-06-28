import React from 'react'
import TransactionTable from '../components/TransactionTable'
import { transactions } from '../data/dummyData'

export default function Transactions() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>
      <TransactionTable items={transactions} />
    </div>
  )
}
