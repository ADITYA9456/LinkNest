"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("")

  
  const createTree = () => { 
    
    router.push(`/generate?handle=${text}`)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1c1c1c] via-[#2a2a2a] to-[#3a3a3a] min-h-[100vh] flex items-center justify-center px-12  ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 justify-center items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Digital Identity. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Neatly Nested.
              </span>
            </h1>
            <p className="text-lg md:text-xl relative opacity-80">
              LinkNest helps you organize all your important links, content, and socials in one beautiful, customizable page. Whether you're a creator, entrepreneur, or brand — make your online presence unforgettable.
            </p>
            <div className="flex items-center gap-4">
              <input value={text} onChange={(e)=> setText(e.target.value)} type="text" placeholder="yourusername" className="px-4 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <button  onClick={()=> createTree()} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition cursor-pointer">
                Claim your LinkNest
              </button>
            </div>
          </div>



          {/* Mobile Card */}
          <div className=" w-[280px] h-[520px] mx-auto md:mx-0 mt-[100px]"> {/* Adjust margin as per your navbar height */}
            <div className="w-full h-full rounded-[36px] bg-gradient-to-br from-[#92aee9] via-[#b1c0f9] to-[#a4d6e9] shadow-2xl p-4 flex flex-col items-center justify-between border-4 border-purple-500">
              <div className="flex flex-col items-center mt-6">
                {/* Profile Image */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/profile.jpg"
                    alt="Anna"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="text-white text-lg font-semibold mt-3 hover:text-purple-300 transition-colors duration-300">
                  Anna
                </h2>
                <p className="text-white text-sm opacity-80 italic">green!</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3  items-center">
                {["Latest Single", "Watch Music Video", "Listen on Spotify"].map((text) => (
                  <button
                    key={text}
                    className="bg-[#f4d4fa] text-black text-sm font-semibold px-4 py-2 rounded-full w-52 shadow-md hover:bg-[#eecdf7] hover:scale-105 transition-transform duration-300  cursor-pointer"
                  >
                    {text}
                  </button>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 my-4 text-white text-xl">
                <i className="ri-menu-line hover:text-purple-300 transition-colors duration-300"></i>
                <i className="ri-twitter-fill hover:text-blue-400 transition-colors duration-300"></i>
                <i className="ri-notification-3-fill hover:text-red-400 transition-colors duration-300"></i>
              </div>
            </div>
          </div>

        </div>
      </section>

{/* circle  */}

<div className="size-96 rounded-full bg-radial-[at_25%_25%] flex  fixed from-white animate-bounce  opacity-35 to-zinc-900 to-75%"> </div>




      {/* Secondary Section */}
      <section className="bg-gradient-to-br from-purple-300 via-indigo-300 to-purple-500  min-h-[100vh] flex items-center justify-center px-6">
  <div className="max-w-4xl text-center space-y-6">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
    Build and share your LinkNest in seconds
    </h2>
    <p className="text-lg md:text-xl px-16 text-center text-gray-600">
    Bring together your Instagram, YouTube, blog, products, and more — all in one sleek, customizable profile. <br /> No code. No clutter. Just your digital self, beautifully organized.
    </p>
    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition cursor-pointer">
      Explore Features
    </button>
  </div>
</section>



{/* feature section */}

<section className="bg-gradient-to-br from-[#1c1c1c] via-[#2a2a2a] to-[#3a3a3a] py-20 px-6">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      Why Choose <span className="text-purple-500">LinkNest</span>?
    </h2>
    <p className="text-gray-300 text-lg">All your links. One beautiful page.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {/* Card 1 */}
    <div className="bg-[#2b2b2b] rounded-2xl p-6 shadow-xl hover:shadow-purple-500/20 transition-shadow text-center">
      <div className="w-14 h-14 mx-auto mb-4">
        <img src="/magic.gif" alt=" stat" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">Instant Setup</h3>
      <p className="text-gray-300">Create and customize your LinkNest in seconds, no coding needed.</p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#2b2b2b] rounded-2xl p-6 shadow-xl hover:shadow-purple-500/20 transition-shadow text-center">
      <div className="w-14 h-14 mx-auto mb-4">
        <img src="/gear.gif" alt="Fully Customizable" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">Fully Customizable</h3>
      <p className="text-gray-300">Themes, fonts, colors — make it truly yours with endless styles.</p>
    </div>

    {/* Card 3 */}
    <div className="bg-[#2b2b2b] rounded-2xl p-6 shadow-xl hover:shadow-purple-500/20 transition-shadow text-center">
      <div className="w-14 h-14 mx-auto mb-4">
        <img src="/signal.gif" alt="Mobile Optimized" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">Mobile Optimized</h3>
      <p className="text-gray-300">Designed to look stunning on every screen size and device.</p>
    </div>

    {/* Card 4 */}
    <div className="bg-[#2b2b2b] rounded-2xl p-6 shadow-xl hover:shadow-purple-500/20 transition-shadow text-center">
      <div className="w-14 h-14 mx-auto mb-4">
        <img src="/graph.gif" alt="Analytics Built-In" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">Analytics Built-In</h3>
      <p className="text-gray-300">Track link clicks, traffic sources, and optimize your presence.</p>
    </div>
  </div>
</section>


    </main>
  );
}
