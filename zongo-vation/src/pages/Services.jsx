import React from 'react'
import { motion } from 'framer-motion'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'
import { SERVICES } from '@utils/constants'

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-emerald text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
          >
            Comprehensive Islamic finance solutions for Africa's infrastructure development
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <Card key={index} className="p-8" hover animation>
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary-emerald mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-emerald mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our Islamic finance expertise can help structure your next infrastructure project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="a" href="/contact" variant="primary" size="large">
                Get In Touch
              </Button>
              <Button as="a" href="/projects" variant="secondary" size="large">
                View Our Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services