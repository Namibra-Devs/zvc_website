import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'
import Modal from '@components/ui/Modal'
import { useForm } from 'react-hook-form'
import { Download, FileText, TrendingUp, Shield, Globe, Users } from 'lucide-react'

const Investors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const investmentHighlights = [
    {
      icon: Shield,
      title: "Asset-Backed Security",
      description: "Investments are tied to tangible infrastructure and housing assets."
    },
    {
      icon: TrendingUp,
      title: "Stable Returns",
      description: "Predictable semi-annual profit distributions (6.5–7.0% p.a.)."
    },
    {
      icon: Globe,
      title: "Shariah & ESG Alignment",
      description: "100% compliant with Islamic finance and sustainability principles."
    },
    {
      icon: Users,
      title: "Government Partnerships",
      description: "Backed by Ghana's Ministry of Works, Housing & Water Resources."
    }
  ]

  const onSubmitEOI = (data) => {
    console.log('EOI Submitted:', data)
    setIsModalOpen(false)
    alert('Thank you for your expression of interest! We will contact you soon.')
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
            Investor Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
          >
            Investing in Africa's Future through Ethical, Shariah-Compliant Finance
          </motion.p>
        </div>
      </section>

      {/* Current Offering */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-emerald mb-4">
              Current Offering: Ghana Affordable Housing Sukuk (GAHSP – Phase 1)
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-primary-emerald mb-6">Investment Details</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Offering Size', value: 'USD 250 Million' },
                    { label: 'Tenor', value: '10 Years' },
                    { label: 'Expected Profit Rate', value: '6.5% – 7.0% per annum' },
                    { label: 'Structure', value: 'Hybrid Ijarah–Istisna Sukuk' },
                    { label: 'Currency', value: 'USD' },
                    { label: 'Distribution Frequency', value: 'Semi-annual profit payments' },
                    { label: 'Minimum Subscription', value: 'USD 1 Million (Institutional)' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">{item.label}:</span>
                      <span className="text-primary-emerald font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-primary-emerald mb-6">Why Invest with Us?</h3>
              <div className="space-y-6">
                {investmentHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary-gold rounded-full p-3">
                      <highlight.icon size={24} className="text-primary-emerald" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{highlight.title}</h4>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <Button variant="primary" size="large" className="w-full flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download Prospectus
                </Button>
                <Button variant="secondary" size="large" className="w-full flex items-center justify-center gap-2">
                  <FileText size={20} />
                  Download Term Sheet
                </Button>
                <Button 
                  variant="secondary" 
                  size="large" 
                  className="w-full"
                  onClick={() => setIsModalOpen(true)}
                >
                  Register Investment Interest
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-emerald mb-4">
              Investment Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Review Documentation", description: "Download and study the investment materials" },
              { step: 2, title: "Submit EOI", description: "Complete the expression of interest form" },
              { step: 3, title: "Due Diligence", description: "KYC verification and data room access" },
              { step: 4, title: "Subscription", description: "Complete subscription documents" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-gold text-primary-emerald rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expression of Interest Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Expression of Interest"
        size="medium"
      >
        <form onSubmit={handleSubmit(onSubmitEOI)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name / Institution *
              </label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
            </div>
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Investor Type *
            </label>
            <div className="grid grid-cols-2 gap-4">
              {['DFI', 'Sovereign Fund', 'Islamic Bank', 'Private Investor'].map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    value={type}
                    {...register('investorType')}
                    className="rounded border-gray-300 text-primary-gold focus:ring-primary-gold"
                  />
                  <span className="ml-2 text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Intended Investment Amount (USD) *
            </label>
            <select
              {...register('amount', { required: 'Amount is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold"
            >
              <option value="">Select amount range</option>
              <option value="1M-5M">$1M - $5M</option>
              <option value="5M-10M">$5M - $10M</option>
              <option value="10M-25M">$10M - $25M</option>
              <option value="25M+">$25M+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Comments / Questions
            </label>
            <textarea
              rows={4}
              {...register('comments')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold"
            />
          </div>

          <Button type="submit" variant="primary" size="large" className="w-full">
            Submit Expression of Interest
          </Button>
        </form>
      </Modal>
    </div>
  )
}

export default Investors