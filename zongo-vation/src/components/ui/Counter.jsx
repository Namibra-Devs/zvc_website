import React from 'react'
import { useCounter } from '@hooks/useCounter'

const Counter = ({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  className = '' 
}) => {
  const count = useCounter(end, duration)

  return (
    <span className={`font-bold ${className}`}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default Counter