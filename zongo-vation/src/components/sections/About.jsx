import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'

const About = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-emerald mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              <strong>ZongoVation Capital Ltd.</strong> is a Ghana-based <strong>Islamic finance and investment advisory firm</strong> committed to unlocking Africa's infrastructure potential through <strong>Shariah-compliant, asset-backed financing</strong>.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We design and structure <strong>Sukuk (Islamic bonds)</strong> and impact investment vehicles that connect ethical capital from the <strong>GCC, Asia, and Africa</strong> to projects that create real economic and social value.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-emerald mb-2">Our Mission:</h3>
                <p className="text-gray-600">
                  To deliver Shariah-compliant financial solutions that build sustainable infrastructure, create jobs, and strengthen Africa–Middle East cooperation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-emerald mb-2">Our Vision:</h3>
                <p className="text-gray-600">
                  To be Africa's leading Sukuk structuring and Islamic infrastructure finance advisory firm by 2030.
                </p>
              </div>
            </div>

            <Button as={Link} to="/about" variant="primary" size="large">
              Learn More About ZongoVation Capital
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center" hover animation>
              <div className="text-4xl mb-4">🕌</div>
              <h3 className="font-semibold text-primary-emerald mb-2">Shariah Compliant</h3>
              <p className="text-sm text-gray-600">100% compliant with Islamic finance principles</p>
            </Card>
            <Card className="p-6 text-center" hover animation>
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-semibold text-primary-emerald mb-2">Pan-African Focus</h3>
              <p className="text-sm text-gray-600">Building bridges across Africa and Middle East</p>
            </Card>
            <Card className="p-6 text-center" hover animation>
              <div className="text-4xl mb-4">💼</div>
              <h3 className="font-semibold text-primary-emerald mb-2">Expert Advisory</h3>
              <p className="text-sm text-gray-600">Deep expertise in Sukuk structuring</p>
            </Card>
            <Card className="p-6 text-center" hover animation>
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="font-semibold text-primary-emerald mb-2">ESG Integrated</h3>
              <p className="text-sm text-gray-600">Aligning finance with sustainable development</p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About