import React from 'react'
import { Linkedin, Twitter, Youtube } from 'lucide-react'
import { SOCIAL_LINKS } from '@utils/constants'

const SocialLinks = ({ className = '' }) => {
  const socialPlatforms = [
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
    { icon: Youtube, href: SOCIAL_LINKS.youtube, label: 'YouTube' }
  ]

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialPlatforms.map((platform, index) => (
        <a
          key={index}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-colors"
          aria-label={platform.label}
        >
          <platform.icon size={20} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks