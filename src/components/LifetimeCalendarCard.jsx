import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card.tsx"
import { Input } from '../components/ui/input.tsx'
import { Label } from '../components/ui/label.tsx'

const LifetimeCalendarCard = ({ columnIndex, daysLived }) => {
  const DAYS_PER_ROW = 10;
  const COLUMNS_DAYS_LIMIT = 140;
  const ROWS_PER_COLUMN = COLUMNS_DAYS_LIMIT / DAYS_PER_ROW;
  const DAYS_IN_80_YEARS = 29200;

  const startDay = columnIndex * COLUMNS_DAYS_LIMIT + 1;

  return (
    <div className="flex flex-col gap-1">
      {Array.from({ length: ROWS_PER_COLUMN }, (_, rowIndex) => {
        const rowStartNum = startDay + rowIndex * DAYS_PER_ROW;
        if (rowStartNum > DAYS_IN_80_YEARS) return null;

        return (
          <div key={rowIndex} className="flex items-center gap-4">
            <span className="w-8 text-right text-sm text-gray-500">
              {rowStartNum}
            </span>
            <div className="flex gap-1">
              {Array.from({ length: DAYS_PER_ROW }, (_, i) => {
                const dayNumber = rowStartNum + i;
                return (
                  <span key={i} title={`Day ${dayNumber}`}>
                    {dayNumber <= daysLived ? '⬛️' : '⬜️'}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LifetimeCalendarCard;