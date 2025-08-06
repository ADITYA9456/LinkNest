"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    }

    const installedHandler = () => {
      setShowInstallPrompt(false)
      setIsInstalled(true)
      setDeferredPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', handler)
    window.addEventListener('appinstalled', installedHandler)

    // Check if app is already installed
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
      window.removeEventListener('appinstalled', installedHandler)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    }
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    localStorage.setItem('pwa-dismissed', 'true')
  }

  // Don't show if user already dismissed or app is installed
  if (isInstalled || localStorage.getItem('pwa-dismissed') === 'true') {
    return null
  }

  return (
    <AnimatePresence>
      {showInstallPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-96"
        >
          <div className="bg-gradient-to-r from-purple-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🚀</span>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-lg mb-1">
                  Install LinkNest
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Add LinkNest to your home screen for quick access and a native app experience!
                </p>
                
                <div className="flex gap-3">
                  <motion.button
                    onClick={handleInstallClick}
                    className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Install App
                  </motion.button>
                  
                  <motion.button
                    onClick={handleDismiss}
                    className="cursor-pointer text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Maybe Later
                  </motion.button>
                </div>
              </div>
              
              <motion.button
                onClick={handleDismiss}
                className="cursor-pointer text-gray-400 hover:text-white p-1 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>
            
            {/* Features List */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <span className="text-green-400">✓</span> Offline Access
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-400">✓</span> Fast Loading
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-400">✓</span> Native Feel
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-400">✓</span> Home Screen
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
