import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Target, Eye, Users, Shield, Lightbulb, Heart, Star, Download, Mail, Award, Globe } from 'lucide-react'

const About = () => {
  const values = [
    {
      title: "Integrity",
      description: "We uphold honesty, transparency, and accountability in every transaction.",
      icon: Shield
    },
    {
      title: "Innovation",
      description: "We blend modern financial engineering with traditional Islamic principles.",
      icon: Lightbulb
    },
    {
      title: "Impact",
      description: "We pursue measurable social and economic outcomes that uplift communities.",
      icon: Heart
    },
    {
      title: "Partnership",
      description: "We believe sustainable progress is built through collaboration and trust.",
      icon: Users
    },
    {
      title: "Excellence",
      description: "We maintain world-class professionalism and operational discipline.",
      icon: Star
    },
    {
      title: "Sustainability",
      description: "We ensure long-term value creation for communities and investors alike.",
      icon: Target
    }
  ]

  return (
    <div className="">
      {/* Hero Section with Overlay */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/about2.webp")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 to-primary-dark/90" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-gold/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-emerald/20 rounded-full blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full border border-primary-gold/30 mb-8"
            >
              <Award className="w-5 h-5 text-primary-gold" />
              <span className="text-primary-gold font-medium">Since 2020</span>
            </motion.div>

            <h1 className="text-3xl md:text-7xl font-bold text-white mb-3 leading-tight">
              Pioneering Islamic 
              <span className="text-primary-gold"> Finance</span> <br />
              in Africa
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Bridging ethical capital from the Middle East and Asia with Africa's development priorities through Shariah-compliant solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            >
             
              
              <button className="btn-secondary flex gap-3 cursor-pointer">
                <Mail className="w-5 h-5" />
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>

        
      </section>

      {/* Who We Are - Light Section */}
      <section className="section-padding bg-white py-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-emerald/10 rounded-full border border-primary-emerald/20 mb-6"
                >
                  <span className="text-sm font-medium text-primary-emerald">Who We Are</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
                  Building Africa's Future Through <span className="text-primary-emerald">Ethical Finance</span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-primary-blue">ZongoVation Capital</strong> is a pioneering Islamic finance and investment advisory firm based in Accra, Ghana. We specialize in bridging ethical capital from the Middle East and Asia with Africa's development priorities through Shariah-compliant, asset-backed financing solutions.
                </p>
                <p>
                  Our innovative approach combines modern financial engineering with traditional Islamic principles to create sustainable infrastructure, housing, and development projects that drive inclusive growth across the continent.
                </p>
              </div>

              {/* Mission & Vision Cards at Bottom */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-primary-dark to-primary-blue rounded-2xl p-6 text-white shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-primary-gold" />
                    <h3 className="font-bold text-lg">Our Mission</h3>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    To deliver Shariah-compliant financial solutions that drive sustainable infrastructure growth, empower communities, and strengthen Africa–Middle East economic cooperation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-br from-primary-blue to-primary-dark rounded-2xl p-6 text-white shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-primary-gold" />
                    <h3 className="font-bold text-lg">Our Vision</h3>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    To become Africa's leading Sukuk structuring and Islamic infrastructure finance advisory firm by 2030.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about3.webp"
                  alt="ZongoVation Capital Team"
                  className="w-full h-[600px] object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.nextSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-emerald to-primary-blue items-center justify-center">
                  <div className="text-white text-center p-8">
                    <Building2 className="w-16 h-16 mx-auto mb-4 text-primary-gold" />
                    <p className="text-xl font-semibold">ZongoVation Capital</p>
                    <p className="text-white/80">Team & Office</p>
                  </div>
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/40 to-transparent" />
              </div>
              
              {/* Floating Element */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-primary-gold/20"
              >
                <div className="text-3xl font-bold text-primary-emerald mb-2">5+</div>
                <div className="text-sm text-primary-blue font-medium">Years of Excellence</div>
              </motion.div>

              {/* Second Floating Element */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-primary-gold rounded-2xl p-4 shadow-2xl"
              >
                <Globe className="w-8 h-8 text-primary-blue" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Blue Black Section */}
      <section className="section-padding bg-gradient-to-br from-primary-blue to-primary-dark py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary-gold/20 mb-6"
            >
              <Star className="w-4 h-4 text-primary-gold" />
              <span className="text-sm font-medium text-primary-gold">Our Values</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core <span className="text-primary-gold">Values</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </motion.div>

          {/* Glassy Values Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative cursor-pointer"
              >
                {/* Glassy Card */}
                <div className="relative glass border border-primary-gold/20 rounded-2xl p-8 transition-all duration-500 overflow-hidden hover:border-primary-gold/40 hover:shadow-2xl hover:shadow-primary-gold/10">
                  
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-primary-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-gold rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-8 h-8 text-primary-blue" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white text-center mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-200 text-center leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom Border Animation */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary-gold group-hover:w-3/4 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message - Light Section */}
      <section className="section-padding bg-white py-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/founder.jpg"
                  alt="Mahmoud Jajah - Founder & CEO"
                  className="w-full h-[500px] object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.nextSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-gold to-primary-emerald items-center justify-center">
                  <div className="text-primary-blue text-center p-8">
                    <Users className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-xl font-semibold">Mahmoud Jajah</p>
                    <p className="text-primary-blue/80">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 rounded-full border border-primary-blue/20 mb-6">
                <span className="text-sm font-medium text-primary-blue">Leadership</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
                A Message from Our <span className="text-primary-gold">Founder</span>
              </h2>

              <blockquote className="text-xl text-gray-600 italic border-l-4 border-primary-gold pl-6 py-2 mb-8 leading-relaxed">
                "Africa's development story is being rewritten through innovation and ethical finance. At ZongoVation Capital, we believe that capital should not only build wealth but also build people, communities, and hope."
              </blockquote>

              <div className="space-y-2">
                <p className="font-semibold text-primary-blue text-lg animate-pulse">
                  Mahmoud Jajah
                </p>
                <p className="text-gray-600">
                  Founder & Chief Executive Officer
                </p>
                <p className="text-primary-emerald text-sm font-medium">
                  ZongoVation Capital
                </p>
              </div>

              
            </motion.div>
          </div>
        </div>
      </section>

     
    </div>
  )
}

export default About