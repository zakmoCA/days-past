import { Link, useLocation } from 'react-router-dom'
import React from 'react'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/calendar', label: 'Calendar' },
    { path: '/lifetimecalendar', label: 'Lifetime Calendar' },
  ]

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-gray-300 ${
                  location.pathname === item.path ? 'text-blue-400' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation