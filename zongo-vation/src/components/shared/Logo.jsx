import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ light = false, className = '' }) => {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <div className={`w-10 h-10 rounded-full ${light ? 'bg-primary-gold' : 'bg-primary-emerald'} flex items-center justify-center`}>
        <span className={`font-bold ${light ? 'text-primary-emerald' : 'text-primary-gold'}`}>Z</span>
      </div>
      <div>
        <div className={`font-bold text-lg ${light ? 'text-white' : 'text-primary-emerald'}`}>
          ZongoVation
        </div>
        <div className={`text-xs ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          Capital
        </div>
      </div>
    </Link>
  )
}

export default Logo