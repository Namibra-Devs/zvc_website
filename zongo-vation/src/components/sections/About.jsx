import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target,
  Eye,
  ArrowRight,
  TrendingUp,
  Users,
  Building
} from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: "🕌",
      title: "Shariah Compliant",
      description: "100% compliant with Islamic finance principles",
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-primary-blue/10 to-cyan-500/10"
    },
    {
      icon: "🌍",
      title: "Pan-African Focus",
      description: "Building bridges across Africa and Middle East",
      gradient: "from-primary-gold to-yellow-400",
      bgGradient: "from-primary-gold/10 to-yellow-500/10"
    },
    {
      icon: "💼",
      title: "Expert Advisory",
      description: "Deep expertise in Sukuk structuring",
      gradient: "from-primary-blue to-indigo-500",
      bgGradient: "from-primary-blue/10 to-indigo-500/10"
    },
    {
      icon: "♻️",
      title: "ESG Integrated",
      description: "Aligning finance with sustainable development",
      gradient: "from-emerald-500 to-green-400",
      bgGradient: "from-emerald-500/10 to-green-500/10"
    }
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: TrendingUp },
    { number: "$1M+", label: "Capital Target", icon: Target },
    { number: "13+", label: "Projects Pipeline", icon: Building },
    { number: "6+", label: "Countries Served", icon: Users }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden py-8">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary-blue/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary-gold/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header with Enhanced Styling */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 rounded-full border border-primary-blue/20"
              >
                <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary-blue">About ZongoVation</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary-blue to-primary-dark bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
            </div>

            {/* Enhanced Content with Better Typography */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-700 leading-relaxed"
              >
                <strong className="bg-gradient-to-r from-primary-blue to-primary-dark bg-clip-text text-transparent">
                  ZongoVation Capital Ltd.
                </strong>{' '}
                is a Ghana-based <strong>Islamic finance and investment advisory firm</strong> committed to unlocking Africa's infrastructure potential through{' '}
                <strong className="bg-gradient-to-r from-primary-blue to-primary-dark bg-clip-text text-transparent">
                  Shariah-compliant, asset-backed financing
                </strong>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-700 leading-relaxed"
              >
                We design and structure{' '}
                <strong className="bg-gradient-to-r from-primary-gold to-yellow-600 bg-clip-text text-transparent">
                  Sukuk (Islamic bonds)
                </strong>{' '}
                and impact investment vehicles that connect ethical capital from the{' '}
                <strong>GCC, Asia, and Africa</strong> to projects that create real economic and social value.
              </motion.p>
            </div>

            {/* Mission & Vision in Modern Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid gap-6"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-blue mb-2">Our Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To deliver Shariah-compliant financial solutions that build sustainable infrastructure, create jobs, and strengthen Africa–Middle East cooperation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-gold/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-6 h-6 text-primary-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-gold mb-2">Our Vision</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To be Africa's leading Sukuk structuring and Islamic infrastructure finance advisory firm by 2030.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-primary-blue/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary-blue/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-4 h-4 text-primary-blue" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-blue">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Enhanced CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-blue to-primary-dark text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-primary-dark hover:to-primary-blue"
              >
                <span>Learn More About ZongoVation Capital</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Feature Cards with Original Icons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden h-full ${feature.bgGradient}`}>
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <div className="absolute inset-[2px] rounded-2xl bg-white" />
                  </div>

                  <div className="relative z-10 text-center">
                    <div className={`text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className={`font-bold text-lg mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;