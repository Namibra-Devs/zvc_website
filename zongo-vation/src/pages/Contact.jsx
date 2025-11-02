import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Building2,
  Users,
  Calendar,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { COMPANY_INFO, SOCIAL_LINKS } from "@utils/constants";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const ICONS = {
    linkedin: Linkedin,
    twitter: Twitter,
    youtube: Youtube,
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      details: COMPANY_INFO.email,
      description: "Send us an email anytime",
      action: () =>
        window.open(
          `mailto:${COMPANY_INFO.email}?subject=Inquiry from Website`,
          "_blank"
        ),
    },
    {
      icon: Phone,
      title: "Call Us",
      details: COMPANY_INFO.phone,
      description: "Mon-Fri from 8am to 5pm",
      action: () =>
        window.open(
          `tel:${COMPANY_INFO.phone.replace(/[^\d+]/g, "")}`,
          "_blank"
        ),
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: COMPANY_INFO.address,
      description: "Accra, Ghana",
      action: () =>
        window.open("https://maps.google.com/?q=Accra,Ghana", "_blank"),
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);

    // Here you would typically send to your backend
    // For now, we'll simulate success
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: "general",
    });

    alert(
      "Thank you for your message! We will get back to you within 24 hours."
    );
  };

  const handleScheduleCall = () => {
    // Open calendar scheduling link
    window.open(
      "https://calendly.com/zongovation-capital/consultation",
      "_blank"
    );
  };

  const handleDownloadProfile = () => {
    // Simulate download - in real app, this would be a PDF download
    window.open("/documents/zongovation-capital-profile.pdf", "_blank");
  };

  const handleSocialLink = (platform) => {
    const urls = {
      linkedin: "https://linkedin.com/company/zongovation-capital",
      twitter: "https://twitter.com/zongovation",
      youtube: "https://youtube.com/@zongovationcapital",
    };
    window.open(urls[platform], "_blank");
  };

  return (
    <div className="">
      {/* Hero Section with Overlay */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/ghana.jpg")',
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
              <Mail className="w-5 h-5 text-primary-gold" />
              <span className="text-primary-gold font-medium">
                Get In Touch
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Contact <span className="text-primary-gold">Us</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Get in touch to discuss partnership opportunities and investment
              inquiries
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods - Light Section */}
      <section className="section-padding bg-white py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
                onClick={method.action}
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl hover:border-primary-blue/30 transition-all duration-500">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-gold/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="w-8 h-8 text-primary-gold" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-primary-blue mb-3 group-hover:text-primary-emerald transition-colors duration-300">
                    {method.title}
                  </h3>

                  <p className="text-lg font-semibold text-gray-700 mb-2 hover:text-primary-blue transition-colors duration-300">
                    {method.details}
                  </p>

                  <p className="text-gray-600 text-sm">{method.description}</p>

                  {/* Bottom Border Animation */}
                  <div className="w-0 h-0.5 bg-primary-gold group-hover:w-full transition-all duration-500 mt-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form & Sidebar */}
          <div className="grid lg:grid-cols-2 gap-12 py-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-emerald/10 rounded-full border border-primary-emerald/20 mb-4">
                  <span className="text-sm font-medium text-primary-emerald">
                    Send Message
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Interested in learning more about our services or investment
                  opportunities? Fill out the form below and our team will get
                  back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-300"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="partnership">Partnership</option>
                    <option value="media">Media Inquiry</option>
                    <option value="career">Career Opportunity</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-300"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-primary-gold transition-all duration-300"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full md:w-auto px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed flex gap-3 cursor-pointer"
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-primary-blue to-primary-dark rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold text-primary-gold mb-6">
                  Quick Actions
                </h3>

                <div className="space-y-4">
                  <button
                    onClick={() => (window.location.href = "/investors")}
                    className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary-gold rounded-2xl">
                        <Building2 className="w-6 h-6 text-primary-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-primary-gold transition-colors duration-300">
                          Investment Opportunities
                        </h4>
                        <p className="text-white/80 text-sm mt-1">
                          Explore our Sukuk offerings
                        </p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => (window.location.href = "/partnerships")}
                    className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary-gold rounded-2xl">
                        <Users className="w-6 h-6 text-primary-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-primary-gold transition-colors duration-300">
                          Partnership Opportunities
                        </h4>
                        <p className="text-white/80 text-sm mt-1">
                          Collaborate on projects
                        </p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={handleScheduleCall}
                    className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary-gold rounded-2xl">
                        <Calendar className="w-6 h-6 text-primary-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-primary-gold transition-colors duration-300">
                          Schedule a Call
                        </h4>
                        <p className="text-white/80 text-sm mt-1">
                          Book a consultation
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Office Hours & Social */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-primary-gold" />
                  <h4 className="font-semibold text-gray-800">Office Hours</h4>
                </div>

                <div className="space-y-2 text-gray-600 mb-8">
                  <p>
                    <strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM GMT
                  </p>
                  <p>
                    <strong>Saturday - Sunday:</strong> Closed
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Follow Us
                  </h4>
                  <div className="flex gap-4">
                    {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                      const Icon = ICONS[platform];
                      return (
                        <button
                          key={platform}
                          onClick={() => handleSocialLink(platform)}
                          className="p-3 bg-gray-100 hover:bg-primary-gold rounded-xl transition-all duration-300 hover:scale-110 group cursor-pointer"
                        >
                          <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
