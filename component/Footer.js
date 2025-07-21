"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Footer = () => {
  const socialLinks = [
    { icon: '🐦', label: 'Twitter', href: '#' },
    { icon: '📘', label: 'Facebook', href: '#' },
    { icon: '📸', label: 'Instagram', href: '#' },
    { icon: '💼', label: 'LinkedIn', href: '#' }
  ]

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Templates', href: '/templates' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Analytics', href: '/analytics' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Blog', href: '/blog' },
        { name: 'Community', href: '/community' },
        { name: 'Tutorials', href: '/tutorials' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Press', href: '/press' }
      ]
    }
  ]

  return (
    <motion.footer 
      className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-gray-300 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-sm"
                />
                <Image 
                  width={50} 
                  height={50} 
                  className="w-12 h-12 object-contain relative z-10" 
                  src="/logo.png" 
                  alt="LinkNest" 
                />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Link<span className="text-purple-400">Nest</span>
              </h2>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transform your online presence with beautiful, customizable link pages. 
              Connect all your content in one stunning destination.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-400/30 rounded-xl flex items-center justify-center text-lg transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="group-hover:scale-110 transition-transform"
                  >
                    {social.icon}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 text-lg">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05), duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer relative group"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-purple-400 origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="border-t border-gray-800 pt-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-lg mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay in the <span className="text-purple-400">loop</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates, tips, and exclusive features delivered to your inbox.
            </p>
            
            <div className="flex gap-3 max-w-md mx-auto">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-gray-500 text-sm">
              Made with <motion.span 
                className="text-purple-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >💜</motion.span> for creators worldwide
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <motion.a 
                href="/privacy" 
                className="hover:text-purple-400 transition-colors cursor-pointer"
                whileHover={{ y: -1 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="/terms" 
                className="hover:text-purple-400 transition-colors cursor-pointer"
                whileHover={{ y: -1 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LinkNest. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
          style={{
            left: `${20 + (i * 15)}%`,
            top: `${30 + (i * 10)}%`,
          }}
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 3 + i, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </motion.footer>
  )
}

export default Footer