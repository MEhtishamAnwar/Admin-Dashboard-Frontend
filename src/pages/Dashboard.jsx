import React from 'react'
import StatCard from '../components/StatCard'
import ChartBox from '../components/ChartBox'
import TransactionTable from '../components/TransactionTable'
import { stats, transactions } from '../data/dummyData'
import { Circle } from 'lucide-react'

const sampleChart = [
  { name: 'Mon', value: 200 },
  { name: 'Tue', value: 400 },
  { name: 'Wed', value: 300 },
  { name: 'Thu', value: 500 },
  { name: 'Fri', value: 700 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Users" value={stats.totalUsers} icon={<Circle />} />
        <StatCard title="Total Balance" value={`$${stats.totalBalance.toFixed(2)}`} icon={<Circle />} />
        <StatCard title="Total Deposits" value={`$${stats.totalDeposits}`} icon={<Circle />} />
        <StatCard title="Total Withdrawals" value={`$${stats.totalWithdrawals}`} icon={<Circle />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ChartBox title="Deposits" data={sampleChart} />
        <ChartBox title="Withdrawals" data={sampleChart} />
        <ChartBox title="User Activity" data={sampleChart} />
      </div>

      <div>
        <h3 className="font-semibold mb-2">Recent Transactions</h3>
        <TransactionTable items={transactions} />
      </div>
    </div>
  )
}
