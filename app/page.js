"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar.js";

export default function Home() { 
  const router = useRouter()
  const [text, setText] = useState("")
  
  const createTree = () => { 
    router.push(`/generate?handle=${text}`)
  }

  return (
    <main className="relative min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 transition-all duration-300">
        <Navbar />
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-12 pt-32 bg-gradient-to-br from-gray-950 via-purple-950 to-black overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* FLOATING ORBS */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-40 right-32 w-24 h-24 bg-pink-500 rounded-full blur-2xl"
            animate={{ scale: [1, 1.3, 1], x: [0, 15, 0], y: [0, -25, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-500 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/4 w-28 h-28 bg-indigo-500 rounded-full blur-2xl"
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-40 right-20 w-20 h-20 bg-cyan-400 rounded-full blur-xl"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* GEOMETRIC SHAPES */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-purple-300"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/3 w-6 h-6 bg-pink-300"
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/6 right-1/6 w-5 h-5 border-2 border-cyan-300 rounded-full"
            animate={{ rotate: 360, scale: [1, 1.3, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* TEXT CONTENT */}
          <motion.div 
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Your Digital Identity.
                <br />
                <span className="relative inline-block">
                  <motion.span 
                    className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    style={{ backgroundSize: "200% 200%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Neatly Nested.
                  </motion.span>
                  <motion.div 
                    className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 rounded-full"
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p 
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              LinkNest helps you organize all your important links, content and socials in one beautiful customizable page.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <input 
                value={text} 
                onChange={(e)=> setText(e.target.value)} 
                type="text" 
                placeholder="yourusername" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/50 transition-all duration-300" 
              />
              
              <motion.button  
                onClick={createTree} 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transform transition-all duration-300 shadow-lg cursor-pointer"
                whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Claim your LinkNest
              </motion.button>
            </motion.div>

            <motion.div 
              className="flex flex-wrap items-center gap-8 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <motion.div className="w-4 h-4 bg-green-400 rounded-full" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <span>10K+ Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div className="w-4 h-4 bg-blue-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div className="w-4 h-4 bg-purple-400 rounded-full" animate={{ scale: [1, 2, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                <span>No Code Required</span>
              </div>
            </motion.div>
          </motion.div>

          {/* MOBILE MOCKUP */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div 
              className="relative w-80 h-[600px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-[40px] blur-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative w-full h-full bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-[36px] p-6 shadow-2xl border-4 border-white/50">
                <div className="flex flex-col items-center h-full">
                  <motion.div 
                    className="flex flex-col items-center mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <div className="relative">
                      <motion.div 
                        className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Image src="/profilepic.jpg" alt="Anna" width={80} height={80} className="object-cover w-full h-full" />
                      </motion.div>
                      
                      <motion.div 
                        className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"
                        animate={{ y: [0, -3, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                    
                    <h2 className="text-gray-800 text-xl font-bold mt-4">Anna</h2>
                    <p className="text-gray-600 text-sm bg-white/50 px-3 py-1 rounded-full">✨ green!</p>
                  </motion.div>

                  <div className="flex flex-col gap-4 items-center w-full mt-8 flex-1">
                    {[
                      { text: "Latest Single", icon: "🎵", delay: 0 },
                      { text: "Watch Music Video", icon: "🎬", delay: 0.2 },
                      { text: "Listen on Spotify", icon: "🎧", delay: 0.4 }
                    ].map((item) => (
                      <motion.button
                        key={item.text}
                        className="bg-purple-100 hover:bg-purple-200 text-gray-800 text-sm font-semibold px-6 py-3 rounded-full w-64 shadow-md hover:shadow-lg cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + item.delay }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center justify-center gap-2">
                          <span>{item.icon}</span>
                          {item.text}
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  <div className="flex gap-6 mt-auto mb-6 text-gray-700 text-2xl">
                    <motion.i className="ri-menu-line hover:text-purple-600 cursor-pointer" whileHover={{ scale: 1.25 }} />
                    <motion.i className="ri-twitter-fill hover:text-blue-500 cursor-pointer" whileHover={{ scale: 1.25 }} />
                    <motion.i className="ri-notification-3-fill hover:text-red-500 cursor-pointer" whileHover={{ scale: 1.25 }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* SECOND SECTION */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-12 py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center space-y-12 relative z-10">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800">
              Build and share your LinkNest in 
              <motion.span 
                className="block mt-2 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                style={{ backgroundSize: "200% 200%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                seconds
              </motion.span>
            </h2>
          </motion.div>

          <motion.p 
            className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bring together your Instagram, YouTube, blog, products, and more — all in one sleek, customizable profile.
            <span className="font-semibold text-gray-800 block mt-2">No code. No clutter. Just your digital self, beautifully organized.</span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button 
              className="px-12 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-lg rounded-full shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Features
            </motion.button>
            
            <motion.button 
              className="px-12 py-5 bg-white/90 text-gray-800 font-semibold text-lg border-2 border-gray-300 hover:border-purple-400 rounded-full shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { number: "10K+", label: "Happy Users" },
              { number: "50K+", label: "Links Created" },
              { number: "99%", label: "Uptime" }
            ].map((stat) => (
              <motion.div 
                key={stat.label} 
                className="text-center cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl sm:text-6xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-gray-600 text-lg mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* THIRD SECTION */}
      <motion.section 
        className="relative min-h-screen py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-br from-gray-950 via-purple-950 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="container mx-auto text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Why Choose <motion.span 
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              style={{ backgroundSize: "200% 200%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              LinkNest
            </motion.span>?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 mb-6">All your links. One beautiful page. Unlimited possibilities.</p>
        </motion.div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {[
            { gif: "/magic.gif", title: "Instant Setup", description: "Create and customize your LinkNest in seconds, no coding needed." },
            { gif: "/gear.gif", title: "Fully Customizable", description: "Themes, fonts, colors — make it truly yours with endless styles." },
            { gif: "/signal.gif", title: "Mobile Optimized", description: "Designed to look stunning on every screen size and device." },
            { gif: "/graph.gif", title: "Analytics Built-In", description: "Track link clicks, traffic sources, and optimize your presence." }
          ].map((card) => (
            <motion.div 
              key={card.title}
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-3xl p-8 border-2 border-purple-500/30 hover:border-purple-400/60 shadow-xl text-center cursor-pointer"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="w-20 h-20 mx-auto mb-6">
                <Image width={80} height={80} src={card.gif} alt={card.title} className="w-full h-full object-contain" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-gray-300 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-20 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button 
            className="px-16 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl font-bold rounded-full shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(168, 85, 247, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Start Building Your LinkNest
          </motion.button>
        </motion.div>
      </motion.section>
    </main>
  );
}