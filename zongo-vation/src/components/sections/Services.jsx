import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Shield,
  Globe,
  TrendingUp,
  Users,
  Lightbulb
} from 'lucide-react';
import { SERVICES } from '@utils/constants';

const Services = () => {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: TrendingUp },
    { number: "6+", label: "Countries Served", icon: Globe },
    { number: "100%", label: "Client Satisfaction", icon: Star },
    { number: "5+", label: "Years Experience", icon: Users }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-blue via-primary-dark to-primary-blue relative overflow-hidden py-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-gold/5 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem]" />

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
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          >
            <Shield className="w-4 h-4 text-primary-gold" />
            <span className="text-sm font-medium text-white">Our Expertise</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-primary-gold via-white to-primary-gold bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive <span className="text-primary-gold font-semibold">Islamic finance solutions</span> for Africa's infrastructure development and economic transformation
          </motion.p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center group hover:bg-white/15 hover:border-white/30 transition-all duration-500"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 bg-primary-gold/20 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-primary-gold" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              {/* Glassy Service Card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full overflow-hidden hover:bg-white/15 hover:border-white/30 transition-all duration-500">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/10 via-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-gold to-primary-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-primary-blue to-primary-dark" />
                </div>

                <div className="relative z-10">
                  {/* Icon Section */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5 text-primary-gold" />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-primary-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/80 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-2">
                      {getServiceHighlights(service.title).map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-white/70 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary-gold rounded-full" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <Lightbulb className="w-12 h-12 text-primary-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Project?
            </h3>
            <p className="text-white/80 mb-6">
              Let's discuss how our Islamic finance expertise can structure your next infrastructure project with ethical, sustainable solutions.
            </p>
            <motion.button
            onClick={() => window.location.href = "/services"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-gold to-yellow-500 text-primary-blue font-semibold px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper function to generate service-specific highlights
const getServiceHighlights = (serviceTitle) => {
  const highlights = {
    "Sukuk Structuring & Advisory": [
      "AAOIFI Standards Compliance",
      "End-to-End Structuring",
      "Global Investor Access"
    ],
    "Transaction Advisory (PPP)": [
      "Risk Assessment & Mitigation",
      "Financial Modeling",
      "Stakeholder Coordination"
    ],
    "Investment Mobilization": [
      "GCC & Asia Market Access",
      "Investor Relations",
      "Capital Syndication"
    ],
    "Islamic Finance Consulting": [
      "Shariah Compliance Audit",
      "Policy Development",
      "Capacity Building"
    ],
    "ESG & Impact Advisory": [
      "SDG Alignment",
      "Impact Measurement",
      "Sustainability Reporting"
    ]
  };
  
  return highlights[serviceTitle] || ["Customized Solutions", "Expert Guidance", "Proven Results"];
};

export default Services;