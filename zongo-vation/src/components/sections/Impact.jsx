import React, { useState } from "react";
import { motion } from "framer-motion";
import Counter from "@components/ui/Counter";
import { IMPACT_METRICS } from "@utils/constants";
import {
  TrendingUp,
  Home,
  Users,
  Target,
  Leaf,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  BarChart3,
} from "lucide-react";

const Impact = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineData = [
    {
      year: "2024",
      title: "Capital Mobilization",
      description:
        "Launching $1B ethical capital mobilization for African infrastructure",
      icon: TrendingUp,
      color: "from-cyan-500 to-blue-600",
      stats: "$1M+ Capital Target",
    },
    {
      year: "2025",
      title: "Housing Development",
      description: "20,000 affordable homes under construction across Ghana",
      icon: Home,
      color: "from-emerald-500 to-green-600",
      stats: "20K Homes Planned",
    },
    {
      year: "2026",
      title: "Job Creation",
      description:
        "Creating 10,000+ jobs through sustainable infrastructure projects",
      icon: Users,
      color: "from-amber-500 to-orange-600",
      stats: "10K+ Jobs Created",
    },
    {
      year: "2027",
      title: "Shariah Compliance",
      description:
        "Maintaining 100% Shariah compliance across all financial products",
      icon: Target,
      color: "from-purple-500 to-pink-600",
      stats: "100% Compliant",
    },
    {
      year: "2030",
      title: "Sustainable Impact",
      description:
        "Achieving ESG certification and UN SDG alignment across portfolio",
      icon: Leaf,
      color: "from-teal-500 to-cyan-600",
      stats: "ESG Certified",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-dark via-primary-blue to-primary-dark overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-gold/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-blue/20 rounded-full blur-2xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary-gold" />
            <span className="text-sm font-medium text-white">
              Our Growth Journey
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Impact <span className="text-primary-gold">Timeline</span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Tracking our journey of sustainable development and ethical finance
            transformation across Africa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline Section */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-gold/50 via-white/30 to-transparent" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {timelineData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onHoverStart={() => setActiveIndex(index)}
                    className={`relative group cursor-pointer ${
                      activeIndex === index ? "scale-105" : "scale-100"
                    } transition-transform duration-300`}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-8 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                        activeIndex === index
                          ? "bg-primary-gold border-primary-gold scale-125"
                          : "bg-primary-blue border-white/50"
                      } transition-all duration-300 z-10`}
                    />

                    {/* Content Card */}
                    <div
                      className={`ml-16 bg-white/10 backdrop-blur-xl border ${
                        activeIndex === index
                          ? "border-primary-gold/50"
                          : "border-white/20"
                      } rounded-2xl p-6 transition-all duration-300 hover:bg-white/15`}
                    >
                      {/* Year and Icon */}
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`p-2 rounded-xl bg-gradient-to-r ${item.color}`}
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-primary-gold">
                          {item.year}
                        </span>
                        <div className="flex-1 h-px bg-white/20" />
                        <ArrowRight
                          className={`w-4 h-4 text-primary-gold transition-transform duration-300 ${
                            activeIndex === index
                              ? "translate-x-1"
                              : "translate-x-0"
                          }`}
                        />
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-2 text-primary-gold text-sm font-medium">
                        <BarChart3 className="w-4 h-4" />
                        <span>{item.stats}</span>
                      </div>

                      {/* Progress Indicator */}
                      {activeIndex === index && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2 }}
                          className="h-1 bg-gradient-to-r from-primary-gold to-yellow-400 rounded-full mt-3"
                        />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Image and Stats Section */}
          <div className="relative">
            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden group"
            >
              {/* Video with Fallback */}
              <div className="aspect-square bg-gradient-to-br from-primary-blue to-primary-dark rounded-3xl flex items-center justify-center">
                <video
                  src="/videos/globe.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls={false}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-3xl"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback Visualization */}
                <div className="hidden w-full h-full flex-col items-center justify-center p-8 text-center">
                  <div className="w-32 h-32 bg-primary-gold/20 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="w-16 h-16 text-primary-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    African Impact Map
                  </h3>
                  <p className="text-white/60">
                    Infrastructure development visualization
                  </p>
                </div>
              </div>

              {/* Overlay Stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-white/80">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">2024-2030 Timeline</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Building Africa's Future
                  </h3>
                  <p className="text-white/60 text-sm">
                    Real-time impact tracking across multiple African nations
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Live Stats Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 mt-6"
            >
              {IMPACT_METRICS.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-primary-gold mb-1">
                    <Counter
                      end={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                    />
                  </div>
                  <div className="text-white/70 text-xs">{metric.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-6"
            >
              <button className="w-full bg-gradient-to-r from-primary-gold to-yellow-500 text-primary-blue font-semibold py-3 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Explore Full Impact Report
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
