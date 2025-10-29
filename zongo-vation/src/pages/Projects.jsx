import React from 'react'
import { motion } from 'framer-motion'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'
import { Link } from 'react-router-dom'
import { Home, Users, TrendingUp, Calendar, MapPin } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Ghana Affordable Housing Sukuk Programme (GAHSP)",
      description: "A landmark initiative to address Ghana's 1.8 million-unit housing deficit using Shariah-compliant financing.",
      status: "Active",
      location: "Accra & Kumasi, Ghana",
      investment: "$250M",
      timeline: "2026-2030",
      units: "5,000 homes",
      returns: "6.5-7.0% p.a."
    }
    // Add more projects as needed
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-emerald text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
          >
            Transforming Africa through ethical infrastructure finance
          </motion.p>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-emerald mb-4">
              Featured Project
            </h2>
          </motion.div>

          {projects.map((project, index) => (
            <Card key={index} className="p-8 mb-8" hover>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.status}
                    </span>
                    <span className="text-primary-gold font-semibold">Featured</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-emerald mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-primary-gold" />
                      <div>
                        <div className="text-sm text-gray-500">Location</div>
                        <div className="font-semibold">{project.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp size={20} className="text-primary-gold" />
                      <div>
                        <div className="text-sm text-gray-500">Investment</div>
                        <div className="font-semibold">{project.investment}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar size={20} className="text-primary-gold" />
                      <div>
                        <div className="text-sm text-gray-500">Timeline</div>
                        <div className="font-semibold">{project.timeline}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Home size={20} className="text-primary-gold" />
                      <div>
                        <div className="text-sm text-gray-500">Units</div>
                        <div className="font-semibold">{project.units}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button as={Link} to="/investors" variant="primary">
                      Invest in this Project
                    </Button>
                    <Button variant="secondary">
                      Download Project Brief
                    </Button>
                  </div>
                </div>

                <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Home size={48} className="mx-auto mb-4" />
                    <p>Project Visualization</p>
                    <p className="text-sm">Architectural renderings and site plans</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Pipeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-emerald mb-4">
              Project Pipeline
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Upcoming Shariah-compliant infrastructure projects across Africa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Renewable Energy Sukuk",
                description: "Solar and wind energy projects to power rural communities",
                sector: "Energy",
                status: "Planning",
                location: "West Africa"
              },
              {
                title: "Water Infrastructure Programme",
                description: "Clean water and sanitation projects using Islamic finance",
                sector: "Water & Sanitation",
                status: "Feasibility",
                location: "Multiple Countries"
              },
              {
                title: "Transport Infrastructure Sukuk",
                description: "Roads, bridges, and public transport systems",
                sector: "Transport",
                status: "Development",
                location: "East Africa"
              }
            ].map((project, index) => (
              <Card key={index} className="p-6" hover animation>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                    {project.sector}
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-primary-emerald mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>📍 {project.location}</span>
                  <Button variant="secondary" size="small">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-emerald text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Our Projects?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Explore investment opportunities or discuss potential partnerships for upcoming projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as={Link} to="/investors" variant="secondary" size="large">
                View Investment Opportunities
              </Button>
              <Button as={Link} to="/contact" variant="primary" size="large">
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects