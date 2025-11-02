import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Download, FileText, TrendingUp, Shield, Globe, Users, ArrowRight, Building2, Target, Calendar, Mail, CheckCircle } from 'lucide-react'

const Investors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const investmentHighlights = [
    {
      icon: Shield,
      title: "Asset-Backed Security",
      description: "Investments are tied to tangible infrastructure and housing assets with real collateral value."
    },
    {
      icon: TrendingUp,
      title: "Stable Returns",
      description: "Predictable semi-annual profit distributions with 6.5–7.0% p.a. target returns."
    },
    {
      icon: Globe,
      title: "Shariah & ESG Alignment",
      description: "100% compliant with Islamic finance principles and UN Sustainable Development Goals."
    },
    {
      icon: Users,
      title: "Government Partnerships",
      description: "Backed by Ghana's Ministry of Works, Housing & Water Resources with sovereign support."
    }
  ]

  const investmentDetails = [
    { label: 'Offering Size', value: 'USD 250 Million', icon: Target },
    { label: 'Tenor', value: '10 Years', icon: Calendar },
    { label: 'Expected Profit Rate', value: '6.5% – 7.0% per annum', icon: TrendingUp },
    { label: 'Structure', value: 'Hybrid Ijarah–Istisna Sukuk', icon: Building2 },
    { label: 'Currency', value: 'USD', icon: Globe },
    { label: 'Distribution Frequency', value: 'Semi-annual profit payments', icon: Calendar },
    { label: 'Minimum Subscription', value: 'USD 1 Million (Institutional)', icon: Users }
  ]

  const processSteps = [
    { step: 1, title: "Review Documentation", description: "Download and study the investment materials and prospectus" },
    { step: 2, title: "Submit EOI", description: "Complete the expression of interest form for initial screening" },
    { step: 3, title: "Due Diligence", description: "KYC verification and exclusive data room access" },
    { step: 4, title: "Subscription", description: "Complete subscription documents and fund allocation" }
  ]

  return (
    <div className="">
      {/* Hero Section with Overlay */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/sustain2.jpg")',
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
              <TrendingUp className="w-5 h-5 text-primary-gold" />
              <span className="text-primary-gold font-medium">Investment Opportunity</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Investor <span className="text-primary-gold">Resources</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Investing in Africa's Future through Ethical, Shariah-Compliant Finance
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Current Offering - Light Section */}
      <section className="section-padding bg-white py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-emerald/10 rounded-full border border-primary-emerald/20 mb-6">
              <span className="text-sm font-medium text-primary-emerald">Current Offering</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              Ghana Affordable Housing Sukuk
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GAHSP Phase 1 - A landmark $250M Shariah-compliant investment opportunity
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Investment Details Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-primary-blue to-primary-dark rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold text-primary-gold mb-6">Investment Details</h3>
                <div className="space-y-4">
                  {investmentDetails.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 py-3 border-b border-white/10 last:border-b-0"
                    >
                      <div className="p-2 bg-primary-gold/20 rounded-lg">
                        <item.icon className="w-5 h-5 text-primary-gold" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white/90">{item.label}</div>
                        <div className="text-primary-gold font-semibold">{item.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Why Invest & CTA Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-primary-blue mb-6">Why Invest With Us?</h3>
                <div className="space-y-6">
                  {investmentHighlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="p-3 bg-primary-gold rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <highlight.icon className="w-6 h-6 text-primary-blue" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-blue mb-2 text-lg">{highlight.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                
                <button className="btn-primary w-full flex items-center justify-center gap-3 py-4">
                  <FileText className="w-5 h-5" />
                  Download Executive Summary
                </button>
                <button 
                  className="btn-secondary w-full flex items-center justify-center gap-3 py-4"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Mail className="w-5 h-5" />
                  Register Investment Interest
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Process - Blue Black Section */}
      <section className="section-padding bg-gradient-to-br from-primary-blue to-primary-dark py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="text-sm font-medium text-primary-gold">Simple Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Investment <span className="text-primary-gold">Process</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              A streamlined 4-step process from initial interest to final subscription
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group text-center cursor-pointer"
              >
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:border-primary-gold/40 hover:shadow-2xl hover:shadow-primary-gold/10">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-primary-gold text-primary-blue rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  
                  <h3 className="font-bold text-white text-lg mb-3">{process.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{process.description}</p>

                  {/* Bottom Border Animation */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary-gold group-hover:w-3/4 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Timeline Connector */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden lg:block relative mt-12"
          >
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 transform -translate-y-1/2" />
            <div className="absolute top-1/2 left-0 h-0.5 bg-primary-gold transform -translate-y-1/2 w-full" style={{ width: '75%' }} />
          </motion.div>
        </div>
      </section>

      {/* Quick Stats - Light Section */}
      <section className="section-padding bg-white py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "$1.2B", label: "Total Programme Size" },
              { value: "5,000", label: "Homes to be Built" },
              { value: "10,000+", label: "Jobs to be Created" },
              { value: "100%", label: "Shariah Compliant" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-3xl font-bold text-primary-blue mb-2 group-hover:text-primary-emerald transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Blue Black */}
      <section className="section-padding bg-gradient-to-br from-primary-blue to-primary-dark py-8">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
            >
              <CheckCircle className="w-5 h-5 text-primary-gold" />
              <span className="text-primary-gold font-medium">Limited Availability</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-primary-gold">Invest</span>?
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join leading institutional investors in this groundbreaking Shariah-compliant infrastructure opportunity with stable returns and social impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              
              
              <button 
                className="btn-secondary flex gap-3"
                onClick={() => setIsModalOpen(true)}
              >
                <Mail className="w-5 h-5" />
                Schedule Meeting
              </button>

              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expression of Interest Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary-blue">Expression of Interest</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name / Institution *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-300"
                      placeholder="Enter name or institution"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-300"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-300"
                    placeholder="Enter country"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Investor Type *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['DFI', 'Sovereign Fund', 'Islamic Bank', 'Private Investor', 'Family Office', 'Pension Fund'].map((type) => (
                      <label key={type} className="flex items-center p-3 border border-gray-300 rounded-xl hover:border-primary-gold transition-colors duration-200 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-primary-gold focus:ring-primary-gold"
                        />
                        <span className="ml-3 text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Intended Investment Amount (USD) *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-300">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-300"
                    placeholder="Any specific questions or comments..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4">
                  Submit Expression of Interest
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Investors