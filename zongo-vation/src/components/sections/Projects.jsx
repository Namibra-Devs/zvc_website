import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, Users, Home, TrendingUp } from 'lucide-react'

const Projects = () => {
  const projectData = {
    title: "Ghana Affordable Housing Sukuk Programme (GAHSP)",
    description: "A landmark initiative developed by ZongoVation Capital in partnership with the Government of Ghana to address the country's 1.8 million-unit housing deficit using Shariah-compliant, project-tied financing.",
    metrics: [
      { icon: TrendingUp, value: "USD 1 Billion", label: "Programme Size" },
      { icon: Home, value: "5,000", label: "Affordable Homes" },
      { icon: Users, value: "10,000+", label: "Jobs Created" },
      { icon: TrendingUp, value: "6.5-7.0%", label: "Expected Returns" }
    ]
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-emerald mb-4">
            🇬🇭 Transforming Ghana's Housing Sector through Islamic Finance
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {projectData.description}
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projectData.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <metric.icon className="w-12 h-12 text-primary-gold mx-auto mb-4" />
              <div className="text-2xl font-bold text-primary-emerald mb-2">
                {metric.value}
              </div>
              <div className="text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Investment Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-primary-emerald mb-6 text-center">
            Investment Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Shariah-Compliant and Asset-Backed",
              "Attractive, Stable Returns",
              "Government Endorsed",
              "High Social Impact",
              "ESG & SDG Aligned"
            ].map((highlight, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
        >
          <Link to="/projects/ghana-housing-sukuk" className="btn-primary inline-flex items-center gap-2">
            View Full Project Details
          </Link>
          <button className="btn-secondary inline-flex items-center gap-2">
            <Download size={20} />
            Download Investment Prospectus
          </button>
          <Link to="/investors" className="btn-secondary">
            Register as an Investor
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects