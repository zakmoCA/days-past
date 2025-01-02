import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="text-center flex-col">
      <h1 className="text-4xl font-bold mb-6">Memento Mori Calendar</h1>
      <p className="mb-8">Track your lifes journey, one day at a time.</p>
      <div className="flex flex-row">
        <div className="justify-between">
          <Link 
            to="/calendar" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            View Year Calendar
          </Link>
        </div>
        <div className="justify-between">
          <Link 
            to="/lifetimecalendar" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            View Lifetime Calendar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home