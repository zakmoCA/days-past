import React from 'react'

const LifetimeCalendarCard = ({ columnIndex, daysAlive, birthDate, calculateDaysLived }) => {
  const DAYS_PER_ROW = 10
  const COLUMNS_DAYS_LIMIT = 140
  const ROWS_PER_COLUMN = COLUMNS_DAYS_LIMIT / DAYS_PER_ROW
  const DAYS_IN_80_YEARS = 29200

  const startDay = columnIndex * COLUMNS_DAYS_LIMIT + 1
  const daysLived = calculateDaysLived()

  const rows = Array.from({ length: ROWS_PER_COLUMN }, (_, rowIndex) => {
    const rowStartNum = startDay + rowIndex * DAYS_PER_ROW
    if (rowStartNum > DAYS_IN_80_YEARS) return null

    const squares = Array.from({ length: DAYS_PER_ROW }, (_, i) => {
      const dayNumber = rowStartNum + i
      if (dayNumber > DAYS_IN_80_YEARS) return null

      return (
        <span key={i} title={`Day ${dayNumber}`}>
          {dayNumber <= daysLived ? '⬛️' : '⬜️'}
        </span>
      )
    }).filter(Boolean)

    return squares.length > 0 ? (
      <div key={rowIndex} className="flex items-center gap-4">
        <span className="w-8 text-right text-sm text-gray-500">
          {rowStartNum}
        </span>
        <div className="flex gap-1">{squares}</div>
      </div>
    ) : null
  }).filter(Boolean)

  return <div className="flex flex-col gap-1">{rows}</div>
}

export default LifetimeCalendarCard
