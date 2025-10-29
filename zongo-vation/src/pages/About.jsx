import React from 'react'
import { motion } from 'framer-motion'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'

const About = () => {
  const values = [
    {
      title: "Integrity",
      description: "We uphold honesty, transparency, and accountability in every transaction."
    },
    {
      title: "Innovation",
      description: "We blend modern financial engineering with traditional Islamic principles."
    },
    {
      title: "Impact",
      description: "We pursue measurable social and economic outcomes that uplift communities."
    },
    {
      title: "Partnership",
      description: "We believe sustainable progress is built through collaboration and trust."
    },
    {
      title: "Excellence",
      description: "We maintain world-class professionalism and operational discipline."
    }
  ]

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
            About ZongoVation Capital
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto"
          >
            Pioneering Islamic finance innovation in Africa
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-emerald mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  <strong>ZongoVation Capital</strong> is a pioneering <strong>Islamic finance and investment advisory firm</strong> based in Accra, Ghana, dedicated to bridging <strong>ethical capital from the Middle East and Asia with Africa's development priorities</strong>.
                </p>
                <p>
                  We design and structure <strong>Shariah-compliant, asset-backed financing solutions</strong> that promote inclusive growth, transparency, and sustainable development across Africa.
                </p>
                <p>
                  Our work focuses on mobilizing long-term Islamic capital to finance <strong>infrastructure, housing, energy, transport, and water projects</strong> — creating jobs and improving lives through responsible finance.
                </p>
                <p className="text-xl font-semibold text-primary-emerald">
                  "We believe that faith-based finance and innovation can transform Africa's development story by aligning profit with purpose and ethics with impact."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <Card className="p-6 bg-primary-gold text-primary-emerald text-center" hover>
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                <p className="text-sm">
                  To deliver Shariah-compliant financial solutions that drive sustainable infrastructure growth, empower communities, and strengthen Africa–Middle East economic cooperation.
                </p>
              </Card>
              <Card className="p-6 bg-primary-emerald text-white text-center" hover>
                <div className="text-3xl mb-4">👁️</div>
                <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                <p className="text-sm">
                  To become Africa's leading Sukuk structuring and Islamic infrastructure finance advisory firm by 2030.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-emerald mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center" hover animation>
                <h3 className="text-xl font-bold text-primary-emerald mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-emerald mb-6">
                A Message from Our Founder
              </h2>
              <blockquote className="text-lg text-gray-600 italic border-l-4 border-primary-gold pl-6 py-2 mb-6">
                "Africa's development story is being rewritten through innovation and ethical finance. At ZongoVation Capital, we believe that capital should not only build wealth but also build people, communities, and hope. Through the Ghana Affordable Housing Sukuk Programme, we're proving that finance rooted in faith can create prosperity rooted in justice."
              </blockquote>
              <div>
                <p className="font-semibold text-primary-emerald text-lg">
                  Mahmoud Jajah
                </p>
                <p className="text-gray-600">
                  Founder & Chief Executive Officer, ZongoVation Capital
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center"
            >
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">👤</div>
                <p>Professional Portrait</p>
                <p className="text-sm">Mahmoud Jajah</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-emerald text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Africa's Future Together?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join us in creating sustainable impact through ethical finance and innovative infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="large">
                Download Company Profile
              </Button>
              <Button as="a" href="/contact" variant="primary" size="large">
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About