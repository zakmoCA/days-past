import React, { useState } from 'react'
import LifetimeCalendarCard from '../components/LifetimeCalendarCard'
import { Input } from '../components/ui/input.tsx'
import { Label } from '../components/ui/label.tsx'

const LifetimeCalendar = () => {
  const [birthDate, setBirthDate] = useState('')

  // Calculate days lived
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
  const totalColumns = Math.ceil(DAYS_IN_80_YEARS / COLUMNS_DAYS_LIMIT)

  return (
    <div className="min-h-screen w-screen flex flex-col items-center gap-8 p-8">
      {/* bday input */}
      <div className="flex flex-col items-center gap-2">
        <Label htmlFor="birthdate">Enter your birthday</Label>
        <Input
          id="birthdate"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-48"
        />
      </div>

      {/* calendar grid */}
      <div className="flex flex-wrap gap-8 justify-center">
        {Array.from({ length: totalColumns }, (_, index) => (
          <LifetimeCalendarCard
            key={index}
            columnIndex={index}
            daysLived={daysLived}
          />
        ))}
      </div>
    </div>
  )
}

export default LifetimeCalendar