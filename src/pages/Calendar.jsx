import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card.tsx"

const Calendar = () => {
  const now = new Date()
  const startOfYear = new Date(now.getFullYear(), 0, 1)
  const daysPassed = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000))
  
  // Constants for layout
  const DAYS_PER_ROW = 10
  const ROWS_PER_COLUMN = 16
  const DAYS_PER_COLUMN = DAYS_PER_ROW * ROWS_PER_COLUMN
  
  // Calculate number of columns needed
  const totalColumns = Math.ceil(365 / DAYS_PER_COLUMN)
  
  const renderColumn = (columnIndex) => {
    const startDay = columnIndex * DAYS_PER_COLUMN + 1
    
    return (
      <div key={columnIndex} className="flex flex-col gap-1">
        {Array.from({ length: ROWS_PER_COLUMN }, (_, rowIndex) => {
          const rowStartNum = startDay + (rowIndex * DAYS_PER_ROW)
          
          // Skip rendering if we've exceeded 365
          if (rowStartNum > 365) return null
          
          return (
            <div key={rowIndex} className="flex items-center gap-4">
              <span className="w-6 text-right text-sm text-gray-500">
                {rowStartNum}
              </span>
              <div className="flex gap-1">
                {Array.from({ length: DAYS_PER_ROW }, (_, i) => {
                  const dayNumber = rowStartNum + i
                  // Don't render if we've exceeded 365
                  if (dayNumber > 365) return null
                  return (
                    <span 
                      key={i}
                      title={`Day ${dayNumber}`}
                    >
                      {dayNumber <= daysPassed ? '⬛️' : '⬜️'}
                    </span>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-8">
      <Card className="w-[80vw] h-[80vh]">
        <CardHeader>
          <CardTitle className="text-center italic">memento mori</CardTitle>
        </CardHeader>
        <CardContent className="h-full flex items-center justify-center">
          <div className="flex gap-12">
            {Array.from({ length: totalColumns }, (_, i) => renderColumn(i))}
          </div>
          <div className="absolute bottom-6 text-sm text-gray-600">
            Day {daysPassed} of 365
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Calendar