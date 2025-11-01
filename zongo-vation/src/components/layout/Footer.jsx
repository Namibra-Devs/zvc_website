import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight,
  Building,
  Users,
  FolderOpen,
  Briefcase,
  TrendingUp,
  Handshake
} from 'lucide-react'
import Logo from '@components/shared/Logo'
import SocialLinks from '@components/shared/SocialLinks'

const Footer = () => {
  const quickLinks = [
    { path: '/about', label: 'About', icon: Users },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
    { path: '/services', label: 'Services', icon: Briefcase },
    { path: '/investors', label: 'Investors', icon: TrendingUp },
    { path: '/partnerships', label: 'Partnerships', icon: Handshake },
    { path: '/contact', label: 'Contact', icon: Building }
  ]

  return (
    <footer className="bg-gradient-to-br from-primary-dark via-primary-blue to-primary-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <Logo light />
            <p className="mt-4 text-xl text-white/90 leading-relaxed">
              Building Africa's Future through <span className="text-primary-gold">Ethical Finance</span>
            </p>
            <p className="mt-2 text-primary-gold font-semibold">
              Prosperity with Purpose
            </p>
            
            {/* Social Links with Enhanced Styling */}
            <div className="mt-8">
              <p className="text-white/70 text-sm mb-4">Follow our journey</p>
              <SocialLinks />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary-gold" />
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <Link 
                    to={link.path}
                    className="flex items-center gap-3 text-white/80 hover:text-primary-gold hover:translate-x-2 transition-all duration-300 group"
                  >
                    <link.icon className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                    <span>{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3 group"
              >
                <MapPin className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Accra, Ghana</p>
                  <p className="text-white/70 text-sm">Headquarters</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3 group"
              >
                <Mail className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">partnership@zongovationcapital.com</p>
                  <p className="text-white/70 text-sm">General inquiries</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-3 group"
              >
                <Phone className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">+233 (0) 244 980692</p>
                  <p className="text-white/70 text-sm">Mon-Fri, 8AM-5PM GMT</p>
                </div>
              </motion.div>
            </div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <p className="text-white/70 text-sm mb-3">Stay updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm focus:outline-none focus:border-primary-gold transition-colors"
                />
                <button className="px-4 py-2 bg-primary-gold text-primary-blue rounded-lg font-semibold text-sm hover:bg-primary-gold/90 transition-colors">
                  Join
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              <p>© 2025 ZongoVation Capital Ltd. All rights reserved.</p>
            </div>
            
            <div className="flex gap-6 text-white/60 text-sm">
              <Link to="/privacy" className="hover:text-primary-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="hover:text-primary-gold transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer