import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, Users, Home, TrendingUp, Sparkles, Target, Shield, Globe } from 'lucide-react'

const Projects = () => {
  const projectData = {
    title: "Ghana Affordable Housing Sukuk Programme (GAHSP)",
    description: "A landmark initiative developed by ZongoVation Capital in partnership with the Government of Ghana to address the country's 1.8 million-unit housing deficit using Shariah-compliant, project-tied financing.",
    metrics: [
      { icon: TrendingUp, value: "USD 1 Billion", label: "Programme Size", gradient: "from-cyan-500 to-blue-600" },
      { icon: Home, value: "5,000", label: "Affordable Homes", gradient: "from-emerald-500 to-green-600" },
      { icon: Users, value: "10,000+", label: "Jobs Created", gradient: "from-amber-500 to-orange-600" },
      { icon: TrendingUp, value: "6.5-7.0%", label: "Expected Returns", gradient: "from-purple-500 to-pink-600" }
    ]
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden py-8">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 rounded-full border border-primary-blue/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary-blue" />
            <span className="text-sm font-medium text-primary-blue">Featured Projects</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
            Transforming Ghana's Housing Sector
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {projectData.description}
          </p>
        </motion.div>

        {/* Metrics Grid - Blue-Black Glassy Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projectData.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group relative cursor-pointer"
            >
              {/* Blue-Black Glassy Card with Glow Effect */}
              <div className="relative bg-gradient-to-br from-primary-blue to-primary-dark backdrop-blur-sm border border-primary-blue/20 rounded-2xl p-6 text-center transition-all duration-500 overflow-hidden hover:shadow-2xl hover:border-primary-blue/40">
                
                {/* Gradient Glow Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Animated Border Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-primary-blue to-primary-dark" />
                </div>

                <div className="relative z-10">
                  {/* Icon with Hover Animation */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <metric.icon className="w-8 h-8 text-primary-gold" />
                    </div>
                  </div>

                  {/* Value with Gradient Text */}
                  <div className="text-2xl md:text-3xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-white to-primary-gold bg-clip-text text-transparent">
                      {metric.value}
                    </span>
                  </div>
                  
                  {/* Label */}
                  <div className="text-white/80 text-sm">
                    {metric.label}
                  </div>
                </div>

                {/* Subtle Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary-gold/50 rounded-full"
                      initial={{ 
                        x: Math.random() * 100 + '%',
                        y: '100%',
                        opacity: 0
                      }}
                      animate={{ 
                        y: '-100%',
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{
                        duration: 3 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investment Highlights - Enhanced Glassy Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-12"
        >
          {/* Main Glassy Card */}
          <div className="relative bg-gradient-to-br from-primary-blue to-primary-dark backdrop-blur-sm border border-primary-blue/20 rounded-3xl p-8 overflow-hidden group hover:shadow-2xl hover:border-primary-blue/40 transition-all duration-500">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/10 via-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-gold to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-primary-blue to-primary-dark" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <Target className="w-8 h-8 text-primary-gold mx-auto mb-3" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Investment Highlights
                </h3>
                <p className="text-white/60 mt-2">Key features that make this opportunity unique</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    text: "Shariah-Compliant and Asset-Backed", 
                    icon: Shield,
                    gradient: "from-cyan-500 to-blue-600"
                  },
                  { 
                    text: "Attractive, Stable Returns", 
                    icon: TrendingUp,
                    gradient: "from-emerald-500 to-green-600"
                  },
                  { 
                    text: "Government Endorsed", 
                    icon: Target,
                    gradient: "from-amber-500 to-orange-600"
                  },
                  { 
                    text: "High Social Impact", 
                    icon: Users,
                    gradient: "from-purple-500 to-pink-600"
                  },
                  { 
                    text: "ESG & SDG Aligned", 
                    icon: Globe,
                    gradient: "from-teal-500 to-cyan-600"
                  }
                ].map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group/highlight"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${highlight.gradient}`}>
                      <highlight.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium group-hover/highlight:text-primary-gold transition-colors duration-300">
                      {highlight.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons - Enhanced with Light Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center space-y-6 sm:space-y-0 sm:flex sm:gap-6 sm:justify-center"
        >
          <Link 
            to="/projects/ghana-housing-sukuk" 
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary-blue to-primary-dark text-white font-semibold px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span>View Full Project Details</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <TrendingUp className="w-5 h-5" />
            </motion.div>
          </Link>

          

          <Link 
            to="/investors" 
            className="group relative inline-flex items-center gap-3 bg-primary-gold text-primary-blue font-semibold px-8 py-4 rounded-2xl hover:bg-primary-gold/90 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Register as an Investor</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects