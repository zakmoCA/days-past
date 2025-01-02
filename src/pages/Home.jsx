import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Memento Mori Calendar</h1>
      <p className="mb-8">Track your lifes journey, one day at a time.</p>
      <Link 
        to="/calendar" 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        View Calendar
      </Link>
    </div>
  )
}

export default Home