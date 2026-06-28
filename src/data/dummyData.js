// Dummy data used across the dashboard - no backend
export const users = [
  { id: 1, name: 'Ehtisham', pin: '1234', balance: 1240.5, status: 'active' },
  { id: 2, name: 'Ali', pin: '2345', balance: 540.0, status: 'active' },
  { id: 3, name: 'fasil', pin: '3456', balance: 0, status: 'suspended' },
  { id: 4, name: 'Umer', pin: '4567', balance: 2300.99, status: 'active' },
  { id: 5, name: 'Hira', pin: '5678', balance: 890.5, status: 'active' },
  { id: 6, name: 'Sara', pin: '6789', balance: 1320.0, status: 'active' },
  { id: 7, name: 'Kamran', pin: '7890', balance: 413.0, status: 'active' },
  { id: 8, name: 'Naila', pin: '8901', balance: 620.75, status: 'active' },
  { id: 9, name: 'Faraz', pin: '9012', balance: 1880.2, status: 'active' },
  { id: 10, name: 'Zoya', pin: '1357', balance: 100.0, status: 'active' },
  { id: 11, name: 'Ali Raza', pin: '2468', balance: 430.5, status: 'active' },
  { id: 12, name: 'Ayesha', pin: '3690', balance: 5400.0, status: 'active' },
  { id: 13, name: 'Saad', pin: '4826', balance: 120.0, status: 'suspended' },
  { id: 14, name: 'Reema', pin: '5937', balance: 670.0, status: 'active' },
  { id: 15, name: 'Bilal', pin: '6048', balance: 2100.0, status: 'active' },
]

export const transactions = [
  { id: 1, type: 'deposit', amount: 500, date: '2026-06-20', status: 'completed', user: 'Ehtisham' },
  { id: 2, type: 'withdrawal', amount: 120, date: '2026-06-21', status: 'pending', user: 'Ali' },
  { id: 3, type: 'deposit', amount: 2000, date: '2026-06-22', status: 'completed', user: 'Umer' },
  { id: 4, type: 'withdrawal', amount: 40, date: '2026-06-23', status: 'failed', user: 'fasil' },
  { id: 5, type: 'deposit', amount: 900, date: '2026-06-24', status: 'completed', user: 'Hira' },
  { id: 6, type: 'withdrawal', amount: 300, date: '2026-06-24', status: 'completed', user: 'Sara' },
  { id: 7, type: 'deposit', amount: 700, date: '2026-06-25', status: 'completed', user: 'Ali Raza' },
  { id: 8, type: 'withdrawal', amount: 50, date: '2026-06-26', status: 'completed', user: 'Naila' },
  { id: 9, type: 'deposit', amount: 400, date: '2026-06-26', status: 'pending', user: 'Faraz' },
  { id: 10, type: 'withdrawal', amount: 220, date: '2026-06-27', status: 'completed', user: 'Zoya' },
  { id: 11, type: 'deposit', amount: 1200, date: '2026-06-27', status: 'completed', user: 'Ayesha' },
  { id: 12, type: 'withdrawal', amount: 410, date: '2026-06-28', status: 'completed', user: 'Kamran' },
  { id: 13, type: 'deposit', amount: 750, date: '2026-06-28', status: 'completed', user: 'Bilal' },
  { id: 14, type: 'withdrawal', amount: 95, date: '2026-06-28', status: 'pending', user: 'Reema' },
  { id: 15, type: 'deposit', amount: 330, date: '2026-06-29', status: 'completed', user: 'Saad' },
  { id: 16, type: 'withdrawal', amount: 175, date: '2026-06-29', status: 'completed', user: 'Ayesha' },
  { id: 17, type: 'deposit', amount: 940, date: '2026-06-29', status: 'completed', user: 'Hira' },
  { id: 18, type: 'withdrawal', amount: 315, date: '2026-06-30', status: 'completed', user: 'Umer' },
  { id: 19, type: 'deposit', amount: 250, date: '2026-06-30', status: 'completed', user: 'Nasir Hussain' },
  { id: 20, type: 'withdrawal', amount: 85, date: '2026-06-30', status: 'completed', user: 'Ali' },
]

export const stats = {
  totalUsers: users.length,
  totalBalance: users.reduce((s, u) => s + u.balance, 0),
  totalDeposits: transactions.filter(t => t.type === 'deposit').reduce((s, t) => s + t.amount, 0),
  totalWithdrawals: transactions.filter(t => t.type === 'withdrawal').reduce((s, t) => s + t.amount, 0),
}
