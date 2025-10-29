import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '',
  hover = false,
  animation = false,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-lg overflow-hidden'
  const hoverClasses = hover ? 'transition-transform duration-300 hover:shadow-xl hover:-translate-y-1' : ''
  
  const content = (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  )

  if (animation) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}

export default Card