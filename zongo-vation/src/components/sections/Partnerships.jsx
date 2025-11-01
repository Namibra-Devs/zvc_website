import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Handshake, 
  Globe, 
  Building, 
  Users, 
  Sparkles,
  ArrowRight,
  Target,
  Shield
} from 'lucide-react'
import { PARTNERS } from '../../utils/constants'

const Partnerships = () => {
  const partnerTypes = [
    {
      icon: Building,
      title: "Government Agencies",
      description: "Policy alignment and project endorsement",
      count: "15+",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: "Development Institutions",
      description: "Co-financing and technical support",
      count: "12+",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Islamic Finance",
      description: "Shariah-compliant capital mobilization",
      count: "20+",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Private Sector",
      description: "Project development and execution",
      count: "25+",
      color: "from-purple-500 to-pink-600"
    }
  ]

  // Partner images mapping - replace with your actual image filenames
  const partnerImages = [
    "/images/gh1.png",
    "/images/partners/isdb.png",
    "/images/partners/badea.png",
    "/images/partners/iciec.png",
    "/images/partners/afc.png",
    "/images/partners/afdb.png",
    "/images/partners/gipc.png",
    "/images/partners/islamic-finance.png"
  ]

  // Create duplicated array for seamless infinite scroll
  const duplicatedPartners = [...PARTNERS, ...PARTNERS]

  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 rounded-full border border-primary-blue/20 mb-6"
          >
            <Handshake className="w-4 h-4 text-primary-blue" />
            <span className="text-sm font-medium text-primary-blue">Strategic Alliances</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
            Our Trusted Partners
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Collaborating with global leaders to deliver <span className="text-primary-blue font-semibold">transformative infrastructure projects</span> across Africa through shared expertise and ethical capital.
          </motion.p>
        </motion.div>

        {/* Partner Types Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {partnerTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group text-center cursor-pointer"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-primary-blue/30 transition-all duration-500">
                {/* Icon with Gradient Background */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${type.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="w-6 h-6 text-white" />
                </div>

                {/* Count */}
                <div className="text-2xl font-bold text-primary-blue mb-2">
                  {type.count}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-800 mb-2">
                  {type.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite Partners Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="relative">
            {/* Slider Container */}
            <div className="flex overflow-hidden py-8">
              <motion.div
                className="flex gap-8"
                animate={{
                  x: [0, -1920], // Adjust based on total width
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedPartners.map((partner, index) => (
                  <div
                    key={`${partner}-${index}`}
                    className="flex-shrink-0 w-58 h-34 bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-xl hover:border-primary-blue/30 transition-all duration-500 flex items-center justify-center group"
                  >
                    {/* Partner Logo Image */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={partnerImages[index % partnerImages.length]}
                        alt={partner}
                        className="max-w-full max-h-12 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          e.target.style.display = 'none';
                          const fallback = e.target.nextSibling;
                          if (fallback) fallback.style.display = 'block';
                        }}
                      />
                      {/* Fallback Text */}
                      <div 
                        className="hidden text-primary-blue font-semibold text-sm text-center"
                        style={{ display: 'none' }}
                      >
                        {partner.split(' ')[0]}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradient Overlays for Smooth Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </motion.div>

      

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-r from-primary-blue to-primary-dark rounded-3xl p-8 md:p-12 text-white mb-12"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <Target className="w-12 h-12 text-primary-gold mb-4" />
              <h3 className="text-2xl font-bold mb-4">Why Partner With Us?</h3>
              <p className="text-white/80">
                Join our network of strategic partners to create lasting impact across Africa.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Access to $1B+ Project Pipeline",
                  "Shariah-Compliant Structures",
                  "Government Partnerships",
                  "ESG & Impact Focus",
                  "Pan-African Reach",
                  "Technical Expertise"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-gold rounded-full" />
                    <span className="text-white/90 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <div className="bg-white border border-gray-200 rounded-3xl p-8 max-w-2xl mx-auto mb-8">
            <Sparkles className="w-12 h-12 text-primary-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary-blue mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our network of strategic partners and help us build Africa's future through ethical finance and sustainable infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/partnerships" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-blue to-primary-dark text-white font-semibold px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                to="/contact" 
                className="group inline-flex items-center gap-3 bg-white border border-primary-blue text-primary-blue font-semibold px-8 py-4 rounded-2xl hover:bg-primary-blue hover:text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Partnerships