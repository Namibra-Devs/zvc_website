import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Mail, Calendar, Users, Building2, TrendingUp, Shield, Lightbulb, Heart, BarChart3, Handshake, Globe2, Landmark, Recycle } from 'lucide-react'

const Services = () => {
  const serviceStats = [
    { value: "50+", label: "Projects Structured", icon: Building2 },
    { value: "$1.2B", label: "Capital Mobilized", icon: TrendingUp },
    { value: "15+", label: "Countries Served", icon: Users },
    { value: "100%", label: "Shariah Compliant", icon: Shield }
  ]

  const SERVICES = [
    {
      title: "Sukuk Structuring & Advisory",
      description: "Design, documentation, and management of Islamic bond issuances (sovereign, corporate, and project-tied).",
      icon: BarChart3,
    },
    {
      title: "Transaction Advisory (PPP)",
      description: "Structuring and financial closure support for public-private infrastructure projects.",
      icon: Handshake,
    },
    {
      title: "Investment Mobilization",
      description: "Syndication and investor relations across the GCC, Malaysia, and Africa.",
      icon: Globe2,
    },
    {
      title: "Islamic Finance Consulting",
      description: "Shariah compliance, policy, and capacity-building support for institutions.",
      icon: Landmark,
    },
    {
      title: "ESG & Impact Advisory",
      description: "Embedding sustainability and Maqasid al-Shariah principles into financing.",
      icon: Recycle,
    },
  ]

  return (
    <div className="">
      {/* Hero Section with Overlay */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/service-hero.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 to-primary-dark/90" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 h-48 bg-primary-gold/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary-emerald/20 rounded-full blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
            >
              <Lightbulb className="w-5 h-5 text-primary-gold" />
              <span className="text-primary-gold font-medium">Our Expertise</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our <span className="text-primary-gold">Services</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Comprehensive Islamic finance solutions for Africa's infrastructure development
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Light */}
      {/* <section className="section-padding bg-white py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {serviceStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary-gold/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-primary-gold" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary-blue mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Services Grid - Blue Black Section - FIXED */}
      <section className="section-padding bg-gradient-to-br from-primary-blue to-primary-dark py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="text-sm font-medium text-primary-gold">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-primary-gold">Expertise</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Specialized Islamic finance services tailored for Africa's unique development needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative cursor-pointer"
              >
                {/* FIXED: Using dark background instead of glass */}
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-500 overflow-hidden hover:border-primary-gold/40 hover:shadow-2xl hover:shadow-primary-gold/10 h-full flex flex-col">
                  
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-primary-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-gold rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-primary-blue" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white text-center mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-200 text-center leading-relaxed flex-grow">
                      {service.description}
                    </p>

                  
                  </div>

                  {/* Bottom Border Animation */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary-gold group-hover:w-3/4 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Light */}
      <section className="section-padding bg-white py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-emerald/10 rounded-full border border-primary-emerald/20 mb-6">
              <span className="text-sm font-medium text-primary-emerald">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              How We <span className="text-primary-emerald">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to delivering Shariah-compliant financial solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understand your project requirements and financial needs",
                icon: Users
              },
              {
                step: "02",
                title: "Structuring",
                description: "Design Shariah-compliant financial instruments tailored to your project",
                icon: Lightbulb
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute the financing solution with transparency and efficiency",
                icon: TrendingUp
              },
              {
                step: "04",
                title: "Monitoring",
                description: "Ensure ongoing compliance and project success",
                icon: Shield
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-dark to-primary-blue rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-gold rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary-blue mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   
    </div>
  )
}

export default Services