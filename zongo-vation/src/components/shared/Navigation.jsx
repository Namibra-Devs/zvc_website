import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = ({ mobile, onNavigate }) => {
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/investors', label: 'Investors' },
    { path: '/partnerships', label: 'Partnerships' },
    { path: '/contact', label: 'Contact' }
  ]

  const baseClasses = mobile 
    ? "block py-2 px-4 text-lg font-medium hover:text-primary-gold transition-colors"
    : "text-gray-700 hover:text-primary-gold font-medium transition-colors"

  const activeClasses = "text-primary-gold"

  const handleClick = () => {
    if (onNavigate) onNavigate()
  }

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`${baseClasses} ${
            location.pathname === item.path ? activeClasses : ''
          }`}
          onClick={handleClick}
        >
          {item.label}
        </Link>
      ))}
    </>
  )
}

export default Navigation