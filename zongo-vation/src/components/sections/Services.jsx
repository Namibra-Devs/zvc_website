import React from 'react'
import { motion } from 'framer-motion'
import Card from '@components/ui/Card'
import { SERVICES } from '@utils/constants'

const Services = () => {
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive Islamic finance solutions for Africa's infrastructure development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Card key={index} className="p-6" hover animation>
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary-emerald mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services