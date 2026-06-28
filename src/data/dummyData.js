// Dummy data used across the dashboard - no backend
export const users = [
  { id: 1, name: 'Ehtisham', pin: '1234', balance: 1240.5, status: 'active' },
  { id: 2, name: 'Ali', pin: '2345', balance: 540.0, status: 'active' },
  { id: 3, name: 'Usman', pin: '3456', balance: 0, status: 'suspended' },
  { id: 4, name: 'Umer', pin: '4567', balance: 2300.99, status: 'active' },
]

export const transactions = [
  { id: 1, type: 'deposit', amount: 500, date: '2026-06-20', status: 'completed', user: 'Ehtisham' },
  { id: 2, type: 'withdrawal', amount: 120, date: '2026-06-21', status: 'pending', user: 'Ali' },
  { id: 3, type: 'deposit', amount: 2000, date: '2026-06-22', status: 'completed', user: 'Umer' },
  { id: 4, type: 'withdrawal', amount: 40, date: '2026-06-23', status: 'failed', user: 'Usman' },
]

export const stats = {
  totalUsers: users.length,
  totalBalance: users.reduce((s, u) => s + u.balance, 0),
  totalDeposits: transactions.filter(t => t.type === 'deposit').reduce((s, t) => s + t.amount, 0),
  totalWithdrawals: transactions.filter(t => t.type === 'withdrawal').reduce((s, t) => s + t.amount, 0),
}
