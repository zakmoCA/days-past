import React, { useState } from 'react'
import LifetimeCalendarCard from '../components/LifetimeCalendarCard'
import { Input } from '../components/ui/input.tsx'
import { Label } from '../components/ui/label.tsx'

const LifetimeCalendar = () => {
  const [birthDate, setBirthDate] = useState('')
  const [currentView, setCurrentView] = useState(0)

  const calculateDaysLived = () => {
    if (!birthDate) return 0
    const birth = new Date(birthDate)
    const now = new Date()
    const diffTime = Math.abs(now - birth)
    return Math.floor(diffTime / (1000 * 60 * 60 * 24))
  }

  const daysLived = calculateDaysLived()
  const DAYS_IN_80_YEARS = 29200
  const COLUMNS_DAYS_LIMIT = 140
  const COLUMNS_PER_VIEW = 4

  const totalColumns = Math.ceil(DAYS_IN_80_YEARS / COLUMNS_DAYS_LIMIT)
  const totalViewUnits = Math.ceil(totalColumns / COLUMNS_PER_VIEW)

  const renderCurrentViewUnit = () => {
    const startColumn = currentView * COLUMNS_PER_VIEW
    const baseOrMultiView = Math.min(
      COLUMNS_PER_VIEW,
      totalColumns - startColumn
    )

    return (
      <div className={`grid grid-cols-${baseOrMultiView} gap-8`}>
        {Array.from({ length: baseOrMultiView }, (_, i) => {
          const columnIndex = startColumn + i
          return (
            <div key={columnIndex} className="min-w-[200px]">
              <LifetimeCalendarCard
                columnIndex={columnIndex}
                daysAlive={daysLived}
                birthDate={birthDate}
                calculateDaysLived={calculateDaysLived}
              />
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center w-full p-4">
      {/* Input section */}
      <div className="flex flex-col items-center gap-2 mb-8">
        <Label htmlFor="birthdate">Enter your birthday</Label>
        <Input
          id="birthdate"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-48"
        />
      </div>

      {/* ViewUnit display */}
      <div className="w-full overflow-x-auto">{renderCurrentViewUnit()}</div>

      {/* Navigation */}
      <div className="flex gap-4 mt-8">
        <button
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setCurrentView((prev) => prev - 1)}
          disabled={currentView === 0}
        >
          Previous
        </button>
        <span className="py-2">
          View {currentView + 1} of {totalViewUnits}
        </span>
        <button
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setCurrentView((prev) => prev + 1)}
          disabled={currentView === totalViewUnits - 1}
        >
          Next
        </button>
      </div>

      {/* Days lived counter */}
      <div className="text-sm text-gray-600 mt-4">
        Days lived: {daysLived.toLocaleString()} of{' '}
        {DAYS_IN_80_YEARS.toLocaleString()}
      </div>
    </div>
  )
}

export default LifetimeCalendar
