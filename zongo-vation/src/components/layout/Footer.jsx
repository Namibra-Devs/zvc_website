import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '@components/shared/Logo'
import SocialLinks from '@components/shared/SocialLinks'

const Footer = () => {
  return (
    <footer className="bg-primary-emerald text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Logo light />
            <p className="mt-4 text-lg opacity-90">
              Building Africa's Future through Ethical Finance
            </p>
            <p className="mt-2 opacity-80">
              Prosperity with Purpose
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Services', 'Insights', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="opacity-80 hover:opacity-100 hover:text-primary-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 opacity-80">
              <p>📍 Accra, Ghana</p>
              <p>📧 partnership@zongovationcapital.com</p>
              <p>📞 +233 (0) 244 980692</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-gold border-opacity-20 mt-8 pt-8 text-center opacity-70">
          <p>© 2025 ZongoVation Capital Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer