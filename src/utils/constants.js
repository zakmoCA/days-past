export const YEARS = 90
export const WEEKS_PER_YEAR = 52
export const DAYS_PER_WEEK = 7
export const MONTHS_PER_YEAR = 12

export const BLOCKS_PER_MONTH = (year) => {
  const daysInMonths = [
    31, // January
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28, // February (leap year check)
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31, // December
  ]
  return daysInMonths
}

export const ViewLevel = {
  YEARS: 'years',
  MONTHS: 'months',
  WEEKS: 'weeks',
  DAYS: 'days'
}