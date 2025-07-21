import clientPromise from "@/lib/mongobd";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("LinkNest")
    
    const collection = db.collection("links")

    // If the handle is already claimed, you cannot create the bittree
    const item = await collection.findOne({handle: handle})
    if(!item){
        return notFound()
    }

    console.log(item)

    return <div className="flex min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white justify-center items-start py-10 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
            <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-bounce"
                style={{
                    left: `${15 + (i * 5)}%`,
                    top: `${20 + (i * 4)}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: '5s'
                }}
            />
        ))}

        <div className="relative z-10 w-full max-w-3xl mx-auto">
            {item && <div className="photo flex justify-center flex-col items-center gap-6 w-full"> 
                {/* Profile Card Container - Made Wider */}
                <div className="bg-black/20 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 w-full hover:scale-105 hover:-translate-y-2">
                    {/* Profile Image */}
                    <div className="relative mb-8 flex justify-center">
                        <div className="relative group">
                            {/* Glow Effect */}
                            <div className="absolute -inset-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
                            
                            <img 
                                width={100} 
                                height={100} 
                                src={item.pic} 
                                alt="Profile" 
                                className="relative rounded-full border-3 border-white/20 group-hover:border-white/40 transition-all duration-300 shadow-xl hover:scale-110 hover:rotate-3" 
                            />
                        </div>
                    </div>

                    {/* Handle */}
                    <div className="text-center mb-6">
                        <span className="font-bold text-3xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 inline-block cursor-default">
                            @{item.handle}
                        </span>
                    </div>

                    {/* Description */}
                    <div className="text-center mb-10">
                        <span className="text-gray-300 text-lg text-center leading-relaxed block max-w-2xl mx-auto hover:text-white transition-colors duration-300 cursor-default">
                            {item.des}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mb-10 hover:w-32 transition-all duration-500"></div>

                    {/* Links Section - Much Wider */}
                    <div className="links space-y-5 max-w-full">
                        {item.links.map((linkItem, index) => (
                            <div key={index} className="transform hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                                <Link href={linkItem.link}>
                                    <div className="cursor-pointer bg-white/10 backdrop-blur-lg hover:bg-white/20 py-6 px-8 shadow-lg rounded-2xl flex justify-between items-center border border-white/10 hover:border-white/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20">
                                        <div className="flex items-center gap-4">
                                            {/* Link Number */}
                                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <span className="text-white font-semibold text-lg group-hover:text-purple-200 transition-colors duration-300">
                                                {linkItem.linktext}
                                            </span>
                                        </div>
                                        
                                        {/* Arrow Icon */}
                                        <div className="opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                                            <svg 
                                                className="w-5 h-5 text-purple-300 group-hover:text-pink-300" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth={2} 
                                                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Social Icons - More Icons */}
                <div className="flex gap-8 mt-10">
                    {[
                        { icon: "💫", delay: 0 },
                        { icon: "✨", delay: 0.2 },
                        { icon: "🚀", delay: 0.4 },
                        { icon: "🌟", delay: 0.6 },
                        { icon: "⚡", delay: 0.8 }
                    ].map((iconItem, index) => (
                        <div
                            key={index}
                            className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-2xl cursor-pointer border border-white/20 hover:border-white/40 hover:scale-125 hover:rotate-180 hover:bg-white/20 transition-all duration-300 animate-bounce shadow-lg"
                            style={{animationDelay: `${iconItem.delay}s`, animationDuration: `${3 + index}s`}}
                        >
                            {iconItem.icon}
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    </div>
}
