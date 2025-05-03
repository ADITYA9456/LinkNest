import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300 py-8 px-4 text-center">
  <h2 className="text-2xl font-bold text-white mb-2">Link<span className="text-purple-600">Nest</span></h2>
  <p className="text-sm text-gray-400 mb-4">All your links. One beautiful page.</p>
  
  <p className="text-xs text-gray-500">
    Made with <span className="text-purple-400">💜</span> for creators.
  </p>
  <p className="text-xs text-gray-500 mt-1">
    © {new Date().getFullYear()} LinkNest. All rights reserved.
  </p>
</footer>

  
  
  )
}

export default Footer
