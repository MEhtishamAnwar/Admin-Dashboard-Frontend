import React from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Users from '../pages/Users'
import Transactions from '../pages/Transactions'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import Login from '../pages/Login'
import { RequireAuth } from '../context/AuthContext'

function ProtectedRoutes() {
  return (
    <RequireAuth>
      <Outlet />
    </RequireAuth>
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
