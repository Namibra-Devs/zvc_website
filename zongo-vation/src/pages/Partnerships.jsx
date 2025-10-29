import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'
import Modal from '@components/ui/Modal'
import { useForm } from 'react-hook-form'
import { PARTNERS } from '@utils/constants'

const Partnerships = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const partnerTypes = [
    {
      title: "Governments & Public Agencies",
      description: "Policy alignment, project endorsement, and asset participation.",
      icon: "🏛️"
    },
    {
      title: "Development Finance Institutions",
      description: "Co-financing, guarantees, and credit enhancement.",
      icon: "🏦"
    },
    {
      title: "Islamic Finance Institutions",
      description: "Shariah-compliant capital mobilization and structuring.",
      icon: "🕌"
    },
    {
      title: "Private Sector & EPC Partners",
      description: "Project development, construction, and operational delivery.",
      icon: "🏗️"
    }
  ]

  const onSubmitPartnership = (data) => {
    console.log('Partnership Submitted:', data)
    setIsModalOpen(false)
    alert('Thank you for your partnership proposal! We will review it and get back to you soon.')
  }

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
            Partnerships
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
          >
            Collaborating to Build Africa's Future through Ethical Finance
          </motion.p>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-emerald mb-6">
                Our Partnership Approach
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At <strong>ZongoVation Capital</strong>, we believe that <strong>sustainable development is a shared journey</strong>.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our projects are made possible through strong partnerships with <strong>governments, development finance institutions, Islamic financial organizations, and private investors</strong> who share our vision of building an inclusive and ethical financial ecosystem for Africa.
              </p>
              <p className="text-lg text-gray-600">
                Each partnership we form is rooted in our values of <strong>trust, transparency, and impact</strong> — bringing together diverse expertise to deliver projects that improve lives, strengthen economies, and advance sustainable development goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {partnerTypes.map((type, index) => (
                <Card key={index} className="p-6 text-center" hover animation>
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="font-semibold text-primary-emerald mb-2">{type.title}</h3>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-emerald mb-4">
              Our Strategic Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading institutions to deliver impactful projects across Africa
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {PARTNERS.map((partner, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="font-semibold text-primary-emerald text-sm">
                  {partner}
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-emerald mb-4">
              Partnership Opportunities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Governments",
                description: "Collaborate to design national Sukuk programmes for housing, transport, and energy infrastructure.",
                cta: "Explore Government Partnerships"
              },
              {
                title: "Development Partners & DFIs",
                description: "Partner for co-financing, risk-sharing, and technical support to unlock scalable Islamic finance models.",
                cta: "Partner with DFIs"
              },
              {
                title: "Islamic Financial Institutions",
                description: "Participate as underwriters, arrangers, or investors in project-tied Sukuk issuances.",
                cta: "Join as Financial Partner"
              },
              {
                title: "Private Sector Partners",
                description: "Join as construction contractors, real estate developers, or service providers for Sukuk-financed projects.",
                cta: "Become a Private Partner"
              }
            ].map((opportunity, index) => (
              <Card key={index} className="p-6" hover animation>
                <h3 className="text-xl font-bold text-primary-emerald mb-4">{opportunity.title}</h3>
                <p className="text-gray-600 mb-6">{opportunity.description}</p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => setIsModalOpen(true)}
                >
                  {opportunity.cta}
                </Button>
              </Card>
            ))}
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
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join us in building Africa's future through ethical finance and sustainable infrastructure development.
            </p>
            <Button 
              variant="secondary" 
              size="large"
              onClick={() => setIsModalOpen(true)}
            >
              Submit Partnership Proposal
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Partnership Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Partnership Enquiry"
        size="medium"
      >
        <form onSubmit={handleSubmit(onSubmitPartnership)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Organization Name *
            </label>
            <input
              type="text"
              {...register('organization', { required: 'Organization name is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold"
            />
            {errors.organization && <p className="text-red-600 text-sm mt-1">{errors.organization.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country *
            </label>
            <input
              type="text"
              {...register('country', { required: 'Country is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Person *
              </label>
              <input
                type="text"
                {...register('contactPerson', { required: 'Contact person is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Partnership Area of Interest *
            </label>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Co-financing',
                'Technical Assistance', 
                'Capacity Building',
                'Investment',
                'Other'
              ].map((area) => (
                <label key={area} className="flex items-center">
                  <input
                    type="checkbox"
                    value={area}
                    {...register('partnershipAreas')}
                    className="rounded border-gray-300 text-primary-gold focus:ring-primary-gold"
                  />
                  <span className="ml-2 text-sm text-gray-700">{area}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              rows={4}
              {...register('message', { required: 'Message is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold"
              placeholder="Tell us about your organization and partnership interests..."
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <Button type="submit" variant="primary" size="large" className="w-full">
            Submit Partnership Proposal
          </Button>
        </form>
      </Modal>
    </div>
  )
}

export default Partnerships