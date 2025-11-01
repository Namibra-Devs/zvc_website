import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChartLine, Handshake, Mail, Play, Pause } from 'lucide-react';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  const toggleVideoPlayback = () => {
    const video = videoRef.current;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Fallback Gradient */}
      <div className="absolute inset-0">
        {/* Fallback Gradient Background */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-dark to-primary-blue transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
  controls={false}
          onLoadedData={handleVideoLoad}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* <source src="/videos/hero-bg1.mp4" type="video/mp4" /> */}
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="/images/hero-fallback.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </video>

        {/* Dark Overlay for Content Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/70 via-primary-dark/80 to-primary-blue/70" />
        
        {/* Subtle Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-blue/20 to-transparent animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative text-left lg:text-center text-white z-10 px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-8xl mx-auto"
        >
          {/* Main Heading with Gradient Text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight mt-15 lg:mt-0 ms-4 lg:ms-0"
          >
            <span className="bg-gradient-to-r from-primary-gold via-white to-primary-gold bg-clip-text text-transparent ">
              Building Africa's
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-primary-gold to-white bg-clip-text text-transparent">
              Future
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl mb-4 max-w-4xl mx-auto font-light leading-relaxed ms-4 lg:ms-0"
          >
            Through <span className="bg-gradient-to-r from-primary-gold to-yellow-200 bg-clip-text text-transparent font-semibold">Ethical Islamic Finance</span> and Sustainable Infrastructure Development
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl mb-7 max-w-3xl mx-auto opacity-90 leading-relaxed ms-4 lg:ms-0"
          >
            ZongoVation Capital pioneers Shariah-compliant financial innovation across Africa — 
            connecting Middle Eastern ethical capital with transformative infrastructure projects 
            that empower communities and drive inclusive economic growth.
          </motion.p>

          {/* Glassy CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-13"
          >
            <Link 
              to="/projects/ghana-housing-sukuk" 
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <ChartLine size={24} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Explore Ghana Housing Sukuk</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>

            <Link 
              to="/partnerships" 
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <Handshake size={24} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Partner With Us</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>

            <Link 
              to="/contact" 
              className="group relative overflow-hidden bg-primary-gold/20 backdrop-blur-md border border-primary-gold/30 rounded-2xl px-8 py-4 text-lg font-semibold text-white hover:bg-primary-gold/30 hover:border-primary-gold/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Contact Investment Team</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          >
            {[
              { number: '$1M+', label: 'Capital to Mobilize' },
              { number: '1K+', label: 'Homes to Build' },
              { number: '3K+', label: 'Jobs to Create' },
              { number: '100%', label: 'Shariah Compliant' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-gold to-yellow-200 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          
        </motion.div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-primary-gold/50" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-primary-gold/50" />
      <div className="absolute bottom-6 left-8 w-4 h-4 border-b-2 border-l-2 border-primary-gold/50" />
      <div className="absolute bottom-6 right-8 w-4 h-4 border-b-2 border-r-2 border-primary-gold/50" />
    </section>
  );
};

export default Hero;