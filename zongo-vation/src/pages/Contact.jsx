import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { COMPANY_INFO } from '@utils/constants'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    reset()
    alert('Thank you for your message! We will get back to you soon.')
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      details: COMPANY_INFO.email,
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: COMPANY_INFO.phone,
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: COMPANY_INFO.address,
      description: 'Accra, Ghana'
    }
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
          >
            Get in touch to discuss partnership opportunities and investment inquiries
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center" hover>
                  <method.icon className="w-12 h-12 text-primary-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary-emerald mb-2">
                    {method.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    {method.details}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {method.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-primary-emerald mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Interested in learning more about our services or investment opportunities? 
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                    placeholder="What is this regarding?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary-emerald mb-6">
                Investment & Partnership Inquiries
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">For Investment Opportunities:</h4>
                  <p className="text-gray-600 mb-4">
                    Interested in investing in our Sukuk offerings or learning more about our investment vehicles?
                  </p>
                  <Button as="a" href="/investors" variant="primary" className="w-full">
                    View Investment Opportunities
                  </Button>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">For Partnership Opportunities:</h4>
                  <p className="text-gray-600 mb-4">
                    Looking to collaborate on projects or explore strategic partnerships?
                  </p>
                  <Button as="a" href="/partnerships" variant="secondary" className="w-full">
                    Explore Partnerships
                  </Button>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">Office Hours</h4>
                  <p className="text-gray-600">
                    <strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM GMT<br/>
                    <strong>Saturday - Sunday:</strong> Closed
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact