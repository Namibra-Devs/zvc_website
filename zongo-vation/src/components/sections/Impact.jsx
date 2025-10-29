import React from 'react'
import { motion } from 'framer-motion'
import Counter from '@components/ui/Counter'
import { IMPACT_METRICS } from '@utils/constants'

const Impact = () => {
  return (
    <section className="section-padding bg-primary-emerald text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Driving Real Impact Across Africa
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Measuring success through tangible social and economic outcomes
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {IMPACT_METRICS.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-gold mb-2">
                <Counter 
                  end={metric.value} 
                  prefix={metric.prefix} 
                  suffix={metric.suffix}
                />
              </div>
              <div className="text-sm md:text-base opacity-90">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact