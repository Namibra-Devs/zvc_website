import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Shield,
  Globe,
  TrendingUp,
  Users,
  Lightbulb,
} from "lucide-react";
import { SERVICES } from "@utils/constants";

const Services = () => {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: TrendingUp },
    { number: "6+", label: "Countries Served", icon: Globe },
    { number: "100%", label: "Client Satisfaction", icon: Star },
    { number: "5+", label: "Years Experience", icon: Users },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary-blue via-primary-dark to-primary-blue py-16 overflow-hidden">
      {/* Subtle moving gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-primary-blue/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container-custom flex flex-col lg:flex-row items-stretch gap-12">
        {/* LEFT SIDE — Large Image + Glassy Overlay */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1 rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/service1.jpg"
            alt="Our Services"
            className="w-full h-full object-cover rounded-3xl"
          />

          {/* Glassy Text Box */}
          {/* <div className="absolute bottom-6 left-6 right-6 bg-primary-blue/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue drop-shadow-lg mb-3 tracking-tight">
              <span className="bg-gradient-to-r from-primary-gold via-white to-primary-gold bg-clip-text text-transparent">
                Islamic Finance Redefined
              </span>
            </h3>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Driving Africa’s economic transformation through ethical,
              sustainable, and innovative Islamic financial solutions.
            </p>
          </div> */}
        </motion.div>

        {/* RIGHT SIDE — Services Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 grid sm:grid-cols-2 gap-8"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 overflow-hidden group hover:bg-white/15 transition-all duration-500"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary-gold/10 to-primary-blue/10 rounded-3xl blur-lg" />

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-5">
                    <Icon className="w-10 h-10 text-primary-gold group-hover:drop-shadow-[0_0_8px_#FFD700] transition-all duration-300" />
                    <ArrowRight className="w-5 h-5 text-primary-gold opacity-0 group-hover:opacity-100 transition duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {getServiceHighlights(service.title).map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-white/70 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-gold rounded-full" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 text-center mt-20"
      >
        <div className="inline-block bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 max-w-2xl">
          <Lightbulb className="w-12 h-12 text-primary-gold mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Project?
          </h3>
          <p className="text-white/80 mb-6">
            Let’s discuss how our Islamic finance expertise can structure your
            next infrastructure project with ethical, sustainable solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-gold to-yellow-500 text-primary-blue font-semibold px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

const getServiceHighlights = (serviceTitle) => {
  const highlights = {
    "Sukuk Structuring & Advisory": [
      "AAOIFI Standards Compliance",
      "End-to-End Structuring",
      "Global Investor Access",
    ],
    "Transaction Advisory (PPP)": [
      "Risk Assessment & Mitigation",
      "Financial Modeling",
      "Stakeholder Coordination",
    ],
    "Investment Mobilization": [
      "GCC & Asia Market Access",
      "Investor Relations",
      "Capital Syndication",
    ],
    "Islamic Finance Consulting": [
      "Shariah Compliance Audit",
      "Policy Development",
      "Capacity Building",
    ],
    "ESG & Impact Advisory": [
      "SDG Alignment",
      "Impact Measurement",
      "Sustainability Reporting",
    ],
  };
  return (
    highlights[serviceTitle] || [
      "Customized Solutions",
      "Expert Guidance",
      "Proven Results",
    ]
  );
};

export default Services;
