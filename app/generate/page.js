"use client"
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Generate = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [pic, setpic] = useState("")
    const [des, setdes] = useState("")
    const [handleExists, setHandleExists] = useState(false)

    useEffect(() => {
        const checkHandle = async () => {
            if (!handle) return;
            const res = await fetch(`/api/checkhandle?handle=${handle}`);
            const data = await res.json();
            setHandleExists(data.exists);
        }
        checkHandle();
    }, [handle]);

    const setlink = (index, link, linktext) => {
        setLinks((initialLinks) =>
            initialLinks.map((item, i) =>
                i === index ? { link, linktext } : item
            )
        );
    };

    const addLink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }

    const submitLink = async () => {
        const raw = JSON.stringify({
            links,
            handle,
            pic,
            des
        });

        const r = await fetch("http://localhost:3000/api/link", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: raw
        });

        const result = await r.json();

        if (result.success) {
            toast.success(result.message)
            setHandleExists(true); // Now allow "Get your link" to show
        } else {
            toast.error(result.message)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 relative overflow-hidden"
        >
            
            {/* Background Effects */}
            <motion.div 
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <motion.div 
                    className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                    className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.4, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 4 }}
                />
            </motion.div>

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full"
                    style={{
                        left: `${10 + (i * 4)}%`,
                        top: `${15 + (i * 3)}%`,
                    }}
                    animate={{ 
                        y: [0, -20, 0],
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                    }}
                />
            ))}

            <motion.div 
                className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 pt-20 pb-10 gap-10 min-h-screen"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >

                {/* Left Side - Form */}
                <motion.div 
                    className="flex-1 max-w-2xl"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <motion.div 
                        className="bg-black/20 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        
                        {/* Header */}
                        <motion.div 
                            className="text-center mb-10"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <motion.h1 
                                className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                Create Your Link
                            </motion.h1>
                            <motion.div 
                                className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: 96 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            ></motion.div>
                        </motion.div>

                        {/* Step 1: Handle */}
                        <motion.div 
                            className="mb-8 group"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <motion.span 
                                    className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    1
                                </motion.span>
                                Claim your Handle
                            </h2>
                            <motion.div 
                                className="relative"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <input 
                                    value={handle || ""} 
                                    onChange={e => sethandle(e.target.value)} 
                                    type="text" 
                                    placeholder="choose your handle"
                                    className="w-full p-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-white placeholder-gray-300 transition-all duration-300 group-hover:bg-white/15" 
                                />
                                <motion.div 
                                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    animate={{ opacity: [0, 0.5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                ></motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Step 2: Links */}
                        <motion.div 
                            className="mb-8 group"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <motion.span 
                                    className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    2
                                </motion.span>
                                Add Links
                            </h2>
                            <div className="space-y-4">
                                <AnimatePresence>
                                    {links.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex gap-4 flex-col sm:flex-row group/link"
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <motion.div className="relative flex-1 group/input">
                                                <input 
                                                    value={item.link || ""} 
                                                    onChange={e => setlink(index, e.target.value, item.linktext)} 
                                                    type="text" 
                                                    placeholder="Enter link"
                                                    className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 focus:border-pink-400/50 focus:outline-none focus:ring-2 focus:ring-pink-500/30 text-white placeholder-gray-300 transition-all duration-300 group-hover/link:bg-white/15" 
                                                />
                                            </motion.div>
                                            <motion.div className="relative flex-1 group/input">
                                                <input 
                                                    value={item.linktext || ""} 
                                                    onChange={e => setlink(index, item.link, e.target.value)} 
                                                    type="text" 
                                                    placeholder="Site name"
                                                    className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-500/30 text-white placeholder-gray-300 transition-all duration-300 group-hover/link:bg-white/15" 
                                                />
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                            <motion.button 
                                onClick={addLink} 
                                type="button"
                                className="cursor-pointer mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="flex items-center gap-2">
                                    ✨ Add Link
                                </span>
                            </motion.button>
                        </motion.div>

                        {/* Step 3: Picture and Description */}
                        <motion.div 
                            className="mb-8 group"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.6 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <motion.span 
                                    className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    3
                                </motion.span>
                                Add Picture & Description
                            </h2>
                            <div className="space-y-4">
                                <motion.div 
                                    className="relative"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <input 
                                        value={pic || ""} 
                                        onChange={e => setpic(e.target.value)} 
                                        type="text" 
                                        placeholder="Enter link to your Picture"
                                        className="w-full p-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-white placeholder-gray-300 transition-all duration-300 group-hover:bg-white/15" 
                                    />
                                </motion.div>
                                <motion.div 
                                    className="relative"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <input 
                                        value={des || ""} 
                                        onChange={e => setdes(e.target.value)} 
                                        type="text" 
                                        placeholder="Enter Description"
                                        className="w-full p-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 focus:border-green-400/50 focus:outline-none focus:ring-2 focus:ring-green-500/30 text-white placeholder-gray-300 transition-all duration-300 group-hover:bg-white/15" 
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Final Buttons */}
                        <motion.div 
                            className="flex gap-4 flex-col sm:flex-row"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.8 }}
                        >
                            <motion.button 
                                onClick={submitLink}
                                className="cursor-pointer flex-1 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-700 hover:via-purple-600 hover:to-pink-600 text-white py-5 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    🚀 Create your Link ✨
                                </span>
                            </motion.button>

                            <AnimatePresence>
                                {handleExists && (
                                    <motion.button 
                                        onClick={() => router.push(`/${handle}`)}
                                        className="cursor-pointer flex-1 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 hover:from-green-700 hover:via-emerald-600 hover:to-teal-600 text-white py-5 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-green-500/30 transition-all duration-300"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            ✨ Get your Link 🎉
                                        </span>
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div 
                    className="flex-1 flex justify-center items-center max-w-lg"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="relative group">
                        {/* Glow Effect */}
                        <motion.div 
                            className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"
                            animate={{ 
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        {/* Image Container */}
                        <motion.div 
                            className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 group-hover:border-white/30 transition-all duration-500"
                            whileHover={{ scale: 1.05 }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ 
                                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                scale: { duration: 0.3 }
                            }}
                        >
                            <Image 
                                width={400} 
                                height={400} 
                                src="/generate.png" 
                                alt="bitlink preview" 
                                className="transform group-hover:scale-105 transition-transform duration-500 group-hover:rotate-2" 
                            />
                        </motion.div>

                        {/* Floating Icons with Enhanced Animations */}
                        {[
                            { color: "from-pink-500 to-purple-500", size: "w-8 h-8", pos: "-top-4 -right-4", delay: 0 },
                            { color: "from-blue-500 to-purple-500", size: "w-6 h-6", pos: "-bottom-4 -left-4", delay: 0.5 },
                            { color: "from-green-500 to-blue-500", size: "w-4 h-4", pos: "top-1/2 -left-6", delay: 1 },
                            { color: "from-yellow-500 to-orange-500", size: "w-3 h-3", pos: "top-1/4 -right-8", delay: 1.5 },
                            { color: "from-cyan-500 to-teal-500", size: "w-2 h-2", pos: "bottom-1/4 -left-8", delay: 2 }
                        ].map((icon, index) => (
                            <motion.div
                                key={index}
                                className={`absolute ${icon.pos} ${icon.size} bg-gradient-to-r ${icon.color} rounded-full cursor-pointer`}
                                animate={{ 
                                    y: [0, -20, 0],
                                    rotate: [0, 180, 360],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{ 
                                    duration: 3 + index, 
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: icon.delay
                                }}
                                whileHover={{ scale: 1.5 }}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Custom Toast Container */}
            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                toastStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px'
                }}
            />
        </motion.div>
    );
};

export default Generate;