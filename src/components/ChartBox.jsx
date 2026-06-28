import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid, Legend } from 'recharts'

// Simple wrapper for a chart area. Expects `data` and `type` props.
export default function ChartBox({ title, data, type = 'line', dataKey = 'value' }) {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold">{title}</h4>
      </div>
      <div style={{ width: '100%', height: 220 }}>
        <ResponsiveContainer>
          {type === 'line' ? (
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Line type="monotone" dataKey={dataKey} stroke="#7C3AED" strokeWidth={2} />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Bar dataKey={dataKey} fill="#7C3AED" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  )
}
