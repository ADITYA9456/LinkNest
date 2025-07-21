"use client"
import { AnimatePresence, motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { useState } from 'react'

const Navbar = () => {
    const pathname = usePathname()
    const showNavbar = ["/", "/generate"].includes(pathname)
    const [isHovered, setIsHovered] = useState(null)

    return ( 
        <>
            {showNavbar && 
                <motion.div 
                    className="fixed top-0 left-0 right-0 z-50 p-2"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 100 }}
                >
                    <motion.nav 
                        className="max-w-7xl mx-auto flex justify-between items-center px-4 py-1.5 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl relative overflow-hidden"
                        whileHover={{ 
                            boxShadow: "0 25px 50px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.3)"
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Background Gradient Effect */}
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-2xl"
                            animate={{ 
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                            }}
                            style={{ backgroundSize: "200% 200%" }}
                            transition={{ 
                                duration: 8, 
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                        {/* Logo Section */}
                        <motion.div 
                            className="flex items-center relative z-10"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-sm"
                                />
                                <Image 
                                    width={90} 
                                    height={90} 
                                    className="w-20 h-20 object-contain relative z-10 cursor-pointer" 
                                    src="/logo.png" 
                                    alt="LinkNest" 
                                />
                            </div>
                        </motion.div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-1 relative z-10">
                            {[
                                { href: "/templates", label: "Templates", icon: "🎨" },
                                { href: "/pricing", label: "Pricing", icon: "💎" },
                                { href: "/discover", label: "Discover", icon: "🚀" },
                                { href: "/learn", label: "Learn", icon: "📚" }
                            ].map((link, index) => (
                                <motion.div
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() => setIsHovered(index)}
                                    onMouseLeave={() => setIsHovered(null)}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                                >
                                    <Link 
                                        href={link.href} 
                                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-200 hover:text-white font-medium transition-all duration-300 cursor-pointer relative overflow-hidden group"
                                    >
                                        <AnimatePresence>
                                            {isHovered === index && (
                                                <motion.div
                                                    layoutId="navbar-bg"
                                                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            )}
                                        </AnimatePresence>
                                        
                                        <motion.span 
                                            className="relative z-10 text-lg"
                                            animate={{ 
                                                rotate: isHovered === index ? [0, 10, 0] : 0 
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {link.icon}
                                        </motion.span>
                                        
                                        <span className="relative z-10">{link.label}</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center gap-3 relative z-10">
                            <motion.button 
                                className="px-5 py-2 text-black hover:text-purple-600 bg-white/80 hover:bg-white/90 backdrop-blur-sm font-semibold rounded-xl border border-white/40 hover:border-purple-300 transition-all duration-300 cursor-pointer relative overflow-hidden group"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 8px 25px rgba(168, 85, 247, 0.15)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.span 
                                    className="relative z-10"
                                    whileHover={{ y: -1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Login
                                </motion.span>
                                
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                                />
                            </motion.button>
                            
                            <motion.button 
                                className="px-5 py-2 text-white bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer relative overflow-hidden group"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 15px 35px rgba(168, 85, 247, 0.4)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                style={{ backgroundSize: "200% 200%" }}
                            >
                                <motion.span 
                                    className="relative z-10 flex items-center gap-2"
                                    whileHover={{ y: -1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span>Start Free</span>
                                    <motion.span
                                        animate={{ x: [0, 3, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        →
                                    </motion.span>
                                </motion.span>
                                
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                                    animate={{ 
                                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                    }}
                                    style={{ backgroundSize: "200% 200%" }}
                                    transition={{ 
                                        duration: 3, 
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </motion.button>
                        </div>

                        {/* Floating Particles */}
                        <motion.div
                            className="absolute top-2 left-20 w-2 h-2 bg-purple-400/60 rounded-full"
                            animate={{ 
                                y: [0, -8, 0],
                                opacity: [0.6, 1, 0.6],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        
                        <motion.div
                            className="absolute bottom-2 right-32 w-1.5 h-1.5 bg-pink-400/60 rounded-full"
                            animate={{ 
                                y: [0, 6, 0],
                                opacity: [0.6, 1, 0.6],
                                scale: [1, 1.4, 1]
                            }}
                            transition={{ 
                                duration: 2.5, 
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                        
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-400/60 rounded-full"
                            animate={{ 
                                scale: [1, 2.5, 1],
                                opacity: [0.6, 0.9, 0.6]
                            }}
                            transition={{ 
                                duration: 4, 
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                        />

                        {/* Mobile Menu Button */}
                        <motion.button 
                            className="md:hidden p-2 text-gray-200 hover:text-purple-600 cursor-pointer"
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </motion.button>
                    </motion.nav>
                </motion.div>
            }
        </>
    )
}

export default Navbar