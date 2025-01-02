export const calculateAge = (birthDate) => {
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  
  return age
}

export const getBlockColor = (index, total, isPast = false) => {
  const opacity = Math.max(0.1, 1 - (index / total))
  return isPast ? `rgba(30, 41, 59, ${opacity})` : `rgba(148, 163, 184, ${opacity * 0.5})`
}