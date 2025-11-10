import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home,
  Users,
  TrendingUp,
  Calendar,
  MapPin,
  Download,
  ArrowRight,
  Building2,
  Zap,
  Droplets,
  Truck,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Ghana Affordable Housing Sukuk Programme (GAHSP)",
      description:
        "A landmark initiative to address Ghana's 1.8 million-unit housing deficit using Shariah-compliant financing.",
      status: "Active",
      location: "Accra & Kumasi, Ghana",
      investment: "$250M",
      timeline: "2026-2030",
      units: "5,000 homes",
      returns: "6.5-7.0% p.a.",
      image: "/images/house1.jpg",
      progress: 65,
    },
  ];

  const pipelineProjects = [
    {
      title: "Renewable Energy Sukuk",
      description:
        "Solar and wind energy projects to power rural communities across West Africa",
      sector: "Energy",
      status: "Planning",
      location: "West Africa",
      icon: Zap,
      gradient: "from-primary-emerald to-primary-blue",
    },
    {
      title: "Water Infrastructure Programme",
      description:
        "Clean water and sanitation projects using Islamic finance principles",
      sector: "Water & Sanitation",
      status: "Feasibility",
      location: "Multiple Countries",
      icon: Droplets,
      gradient: "from-primary-blue to-primary-emerald",
    },
    {
      title: "Transport Infrastructure Sukuk",
      description: "Roads, bridges, and public transport systems development",
      sector: "Transport",
      status: "Development",
      location: "East Africa",
      icon: Truck,
      gradient: "from-primary-gold to-primary-emerald",
    },
  ];

  return (
    <div className="">
      {/* Hero Section with Overlay */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/house3.jpg")',
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
              className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full border border-primary-gold/30 mb-6"
            >
              <Building2 className="w-5 h-5 text-primary-gold" />
              <span className="text-primary-gold font-medium">
                Active Projects
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our <span className="text-primary-gold">Projects</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Transforming Africa through ethical infrastructure finance and
              Shariah-compliant solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Project - Light Section */}
      <section className="section-padding bg-white py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-emerald/10 rounded-full border border-primary-emerald/20 mb-6">
              <span className="text-sm font-medium text-primary-emerald">
                Featured Project
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
              Ghana Affordable Housing Sukuk Programme
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Addressing Ghana's housing deficit through innovative Islamic
              finance solutions
            </p>
          </motion.div>

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Content Side */}
                <div className="space-y-6">
                  {/* Status Badges */}
                  <div className="flex items-center gap-4">
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
                      {project.status}
                    </span>
                    <span className="bg-primary-gold/10 text-primary-gold px-4 py-2 rounded-full text-sm font-semibold border border-primary-gold/20">
                      Featured Project
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-primary-blue leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Metrics */}
                  <div className="grid grid-cols-2 gap-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary-gold/10 rounded-2xl">
                        <MapPin className="w-6 h-6 text-primary-gold" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">
                          Location
                        </div>
                        <div className="font-semibold text-primary-blue">
                          {project.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary-gold/10 rounded-2xl">
                        <TrendingUp className="w-6 h-6 text-primary-gold" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">
                          Investment
                        </div>
                        <div className="font-semibold text-primary-blue">
                          {project.investment}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary-gold/10 rounded-2xl">
                        <Calendar className="w-6 h-6 text-primary-gold" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">
                          Timeline
                        </div>
                        <div className="font-semibold text-primary-blue">
                          {project.timeline}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary-gold/10 rounded-2xl">
                        <Home className="w-6 h-6 text-primary-gold" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">
                          Units
                        </div>
                        <div className="font-semibold text-primary-blue">
                          {project.units}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">
                        Project Progress
                      </span>
                      <span className="text-primary-emerald font-semibold">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-primary-emerald to-primary-blue h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full min-h-[400px] object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      const fallback = e.target.nextSibling;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  {/* Fallback */}
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-emerald to-primary-blue items-center justify-center">
                    <div className="text-white text-center p-8">
                      <Building2 className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-xl font-semibold">{project.title}</p>
                      <p className="text-white/80 mt-2">{project.location}</p>
                    </div>
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/40 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Pipeline - Blue Black Section */}
      <section className="section-padding bg-gradient-to-br from-primary-blue to-primary-dark py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary-gold/20 mb-6">
              <span className="text-sm font-medium text-primary-gold">
                Project Pipeline
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Upcoming <span className="text-primary-gold">Projects</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Shariah-compliant infrastructure projects transforming communities
              across Africa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pipelineProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative cursor-pointer"
              >
                {/* Glassy Card */}
                <div className="relative glass border border-primary-gold/20 rounded-2xl p-8 transition-all duration-500 overflow-hidden hover:border-primary-gold/40 hover:shadow-2xl hover:shadow-primary-gold/10 h-full">
                  {/* Hover Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Status Badges */}
                    <div className="flex items-center gap-2 mb-6">
                      <span className="bg-primary-gold/20 text-primary-gold px-3 py-1 rounded-full text-xs font-semibold border border-primary-gold/30">
                        {project.sector}
                      </span>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/30">
                        {project.status}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-gold rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <project.icon className="w-8 h-8 text-primary-blue" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white text-center mb-4">
                      {project.title}
                    </h3>

                    <p className="text-gray-200 text-center leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Location & CTA */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white/80">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{project.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Border Animation */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary-gold group-hover:w-3/4 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light Section */}
      <section className="section-padding bg-white py-8">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 rounded-full border border-primary-blue/20 mb-6">
              <span className="text-sm font-medium text-primary-blue">
                Get Involved
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
              Interested in Our{" "}
              <span className="text-primary-emerald">Projects</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Explore investment opportunities or discuss potential partnerships
              for upcoming projects across Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Link 
    to="/contact" 
    className="btn-secondary flex gap-3 cursor-pointer"
  >
    <Users className="w-5 h-5" />
  Get In Touch
  </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
