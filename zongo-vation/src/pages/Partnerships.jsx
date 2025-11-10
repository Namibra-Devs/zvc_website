import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Handshake, Target, Building2, Globe, Users, Shield, Mail, ArrowRight } from 'lucide-react'

const Partnerships = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const partnerTypes = [
    {
      title: "Governments & Public Agencies",
      description: "Policy alignment, project endorsement, and asset participation.",
      icon: Building2,
      count: "15+",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Development Finance Institutions",
      description: "Co-financing, guarantees, and credit enhancement.",
      icon: Globe,
      count: "12+",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Islamic Finance Institutions",
      description: "Shariah-compliant capital mobilization and structuring.",
      icon: Shield,
      count: "25+",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Private Sector & EPC Partners",
      description: "Project development, construction, and operational delivery.",
      icon: Users,
      count: "30+",
      color: "from-purple-500 to-pink-600"
    }
  ]

  const PARTNERS = [
    "Government of Ghana",
    "Islamic Development Bank (IsDB)",
    "Arab Bank for Economic Development in Africa (BADEA)",
    "Islamic Corporation for the Insurance of Investment and Export Credit (ICIEC)",
    "Africa Finance Corporation (AFC)",
    "African Development Bank (AfDB)",
    "Ghana Investment Promotion Centre (GIPC)",
    "Ministry of Works and Housing",
    "Saudi Fund for Development",
    "Kuwait Fund for Development",
    "Qatar National Bank",
    "Emirates NBD"
  ]

  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS]
  
  // Placeholder image URLs for partner logos
  const partnerImages = [
    "/images/gh1.png",
    "/images/isdb1.png",
    "/images//badea1.png",
    "/images/iciec2.webp",
    "/images/afc1.jpg",
    "/images/adb1.png",
    "/images/gipc2.jpeg",
    "/images/ministry2.png",
    "/images/sfd.webp",
    "/images/kf.jpg",
"/images/nbd.jpg",
    "/images/qnb.png"
    
  ]

  return (
    <div className="">
      {/* Hero Section with Overlay */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/house-impact3.jpeg")',
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
              <Handshake className="w-5 h-5 text-primary-gold" />
              <span className="text-primary-gold font-medium">Collaborative Impact</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Strategic <span className="text-primary-gold">Partnerships</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Collaborating to Build Africa's Future through Ethical Finance and Shared Expertise
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Overview - Light Section */}
      <section className="section-padding bg-white py-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-emerald/10 rounded-full border border-primary-emerald/20">
                <span className="text-sm font-medium text-primary-emerald">Our Approach</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-primary-blue">
                Building Africa Through <span className="text-primary-emerald">Collaboration</span>
              </h2>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  At <strong className="text-primary-blue">ZongoVation Capital</strong>, we believe that <strong>sustainable development is a shared journey</strong>. Our projects are made possible through strategic alliances with governments, development finance institutions, Islamic financial organizations, and private investors.
                </p>
                <p>
                  Each partnership we form is rooted in our values of <strong className="text-primary-emerald">trust, transparency, and impact</strong> — bringing together diverse expertise to deliver projects that improve lives, strengthen economies, and advance sustainable development goals.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group text-center cursor-pointer"
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-primary-blue/30 transition-all duration-500 h-full">
                    {/* Icon with Gradient Background */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${type.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <type.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Count */}
                    <div className="text-2xl font-bold text-primary-blue mb-2">
                      {type.count}
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {type.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Partners Section with Slider - Blue Black Section */}
      <section className="section-padding bg-gradient-to-br from-primary-blue to-primary-dark py-8">
        <div className="container-custom relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
            >
              <Handshake className="w-4 h-4 text-primary-gold" />
              <span className="text-sm font-medium text-primary-gold">Strategic Alliances</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Trusted Partners
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Collaborating with global leaders to deliver <span className="text-primary-gold font-semibold">transformative infrastructure projects</span> across Africa through shared expertise and ethical capital.
            </motion.p>
          </motion.div>

          {/* Partner Types Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group text-center cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:shadow-xl hover:border-primary-gold/30 transition-all duration-500">
                  {/* Icon with Gradient Background */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${type.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Count */}
                  <div className="text-2xl font-bold text-white mb-2">
                    {type.count}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-white mb-2">
                    {type.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Infinite Partners Slider */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <div className="relative">
              
              <div className="flex overflow-hidden py-8">
                <motion.div
                  className="flex gap-8"
                  animate={{
                    x: [0, -1920],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 40,
                      ease: "linear",
                    },
                  }}
                >
                  {duplicatedPartners.map((partner, index) => (
                    <div
                      key={`${partner}-${index}`}
                      className="flex-shrink-0 w-64 h-40 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-2 hover:shadow-2xl hover:border-primary-gold/30 transition-all duration-500 flex items-center justify-center group"
                    >
                      
                      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                          src={partnerImages[index % partnerImages.length]}
                          alt={partner}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const fallback = e.target.nextSibling;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                     
                        <div 
                          className="hidden text-white font-semibold text-base text-center"
                          style={{ display: 'none' }}
                        >
                          {partner.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

          
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary-blue to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary-dark to-transparent z-10" />
            </div>
          </motion.div> */}

          {/* Partnership Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-r from-primary-emerald to-primary-blue rounded-3xl p-8 md:p-12 text-white mb-12"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <Target className="w-12 h-12 text-primary-gold mb-4" />
                <h3 className="text-2xl font-bold mb-4">Why Partner With Us?</h3>
                <p className="text-white/80">
                  Join our network of strategic partners to create lasting impact across Africa.
                </p>
              </div>
              
              <div className="lg:col-span-2">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Access to $1B+ Project Pipeline",
                    "Shariah-Compliant Structures",
                    "Government Partnerships",
                    "ESG & Impact Focus",
                    "Pan-African Reach",
                    "Technical Expertise"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-gold rounded-full" />
                      <span className="text-white/90 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Opportunities - Light Section */}
      <section className="section-padding bg-white py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-gold/10 rounded-full border border-primary-gold/20 mb-6">
              <span className="text-sm font-medium text-primary-gold">Opportunities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              Partnership <span className="text-primary-emerald">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore various ways to collaborate with us in building Africa's future
            </p>
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-primary-blue/30 transition-all duration-500 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-primary-blue mb-4 group-hover:text-primary-emerald transition-colors duration-300">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {opportunity.description}
                  </p>
                
                </div>
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
              <Handshake className="w-5 h-5 text-primary-gold" />
              <span className="text-primary-gold font-medium">Let's Build Together</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-primary-gold">Partner</span> With Us?
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join us in building Africa's future through ethical finance and sustainable infrastructure development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                className="btn-primary flex gap-3 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <Mail className="w-5 h-5" />
                Submit Partnership Proposal
              </button>
              
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary-blue">Partnership Enquiry</h3>
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-300"
                    placeholder="Enter organization name"
                  />
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-300"
                      placeholder="Enter contact person"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-300"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Partnership Area of Interest *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Co-financing', 'Technical Assistance', 'Capacity Building', 'Investment', 'Joint Ventures', 'Other'].map((area) => (
                      <label key={area} className="flex items-center p-3 border border-gray-300 rounded-xl hover:border-primary-gold transition-colors duration-200 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-primary-gold focus:ring-primary-gold"
                        />
                        <span className="ml-3 text-sm text-gray-700">{area}</span>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-300"
                    placeholder="Tell us about your organization and partnership interests..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4">
                  Submit Partnership Proposal
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Partnerships