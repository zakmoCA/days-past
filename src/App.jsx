import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Layout/Navigation'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import LifetimeCalendar from './pages/LifetimeCalendar'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/lifetimecalendar" element={<LifetimeCalendar />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App