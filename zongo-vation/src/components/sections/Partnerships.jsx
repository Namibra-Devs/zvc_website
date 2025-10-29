import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@components/ui/Button'
import { PARTNERS } from '@utils/constants'

const Partnerships = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-emerald mb-4">
            Strategic Partners & Collaborators
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We work with global and regional partners to ensure each project's success through shared expertise and capital.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
        >
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="font-semibold text-primary-emerald text-sm">
                {partner}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Button as={Link} to="/partnerships" variant="primary" size="large">
            Partner With Us
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Partnerships