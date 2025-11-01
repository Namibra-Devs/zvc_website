import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  ArrowRight,
  TrendingUp,
  Users,
  Building,
  Globe,
  Star,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "Pan-African Focus",
      description:
        "Building bridges across Africa and the Middle East through ethical capital.",
    },
    {
      icon: Star,
      title: "Shariah Compliant",
      description:
        "100% compliant with Islamic finance principles and global standards.",
    },
    {
      icon: Building,
      title: "Expert Advisory",
      description: "Deep expertise in Sukuk structuring and investment strategy.",
    },
    {
      icon: TrendingUp,
      title: "ESG Integrated",
      description:
        "Aligning finance with sustainability and measurable impact goals.",
    },
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: TrendingUp },
    { number: "$1M+", label: "Capital Target", icon: Target },
    { number: "13+", label: "Projects Pipeline", icon: Building },
    { number: "6+", label: "Countries Served", icon: Users },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden py-16">
      {/* Background glow blobs */}
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
            {/* Header */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 rounded-full border border-primary-blue/20"
              >
                <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary-blue">
                  About ZongoVation
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary-blue to-primary-dark bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl text-gray-700 leading-relaxed"
              >
                <strong className="bg-gradient-to-r from-primary-blue to-primary-dark bg-clip-text text-transparent">
                  ZongoVation Capital Ltd.
                </strong>{" "}
                is a Ghana-based{" "}
                <strong>Islamic finance and investment advisory firm</strong>{" "}
                unlocking Africa's infrastructure potential through{" "}
                <strong className="bg-gradient-to-r from-primary-blue to-primary-dark bg-clip-text text-transparent">
                  Shariah-compliant, asset-backed financing
                </strong>
                .
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-700 leading-relaxed"
              >
                We design and structure{" "}
                <strong className="bg-gradient-to-r from-primary-gold to-yellow-600 bg-clip-text text-transparent">
                  Sukuk (Islamic bonds)
                </strong>{" "}
                and impact investment vehicles connecting ethical capital from
                the{" "}
                <strong>GCC, Asia, and Africa</strong> to sustainable projects
                that create social and economic value.
              </motion.p>
            </div>

            {/* Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid gap-6"
            >
              <div className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:bg-gradient-to-br hover:from-primary-blue/10 hover:to-black/10 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-blue mb-2">
                      Our Mission
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      To deliver Shariah-compliant financial solutions that
                      build sustainable infrastructure, create jobs, and
                      strengthen Africa–Middle East cooperation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:bg-gradient-to-br hover:from-primary-dark/10 hover:to-black/10 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-gold/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-6 h-6 text-primary-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-gold mb-2">
                      Our Vision
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      To be Africa's leading Sukuk structuring and Islamic
                      infrastructure finance advisory firm by 2030.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-blue to-primary-dark text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Learn More About ZongoVation Capital</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Right Side — Large Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/images/about-hero.jpg"
              alt="ZongoVation Capital"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>
        </motion.div>

        {/* Stats Section Below Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:bg-gradient-to-br hover:from-primary-blue/20 hover:to-black/20 transition-all duration-500"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-4 bg-primary-blue/10 rounded-full group-hover:bg-gradient-to-br group-hover:from-primary-blue group-hover:to-black transition-all duration-500">
                    <Icon className="w-6 h-6 text-primary-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-blue group-hover:text-black">
                    {item.number}
                  </h3>
                  <p className="text-gray-700 font-medium">{item.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Feature Cards (below stats) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:bg-gradient-to-br hover:from-primary-blue/20 hover:to-black/30 transition-all duration-500"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-4 bg-primary-blue/10 rounded-full group-hover:bg-gradient-to-br group-hover:from-primary-blue group-hover:to-black transition-all duration-500">
                    <Icon className="w-6 h-6 text-primary-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg text-primary-blue group-hover:text-black">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
