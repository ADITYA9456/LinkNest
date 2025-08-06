"use client"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PWAStatus() {
  const [isOnline, setIsOnline] = useState(true)
  const [isPWA, setIsPWA] = useState(false)
  const [showStatus, setShowStatus] = useState(false)

  useEffect(() => {
    // Check if running as PWA
    const checkPWA = () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
      const isInStandaloneMode = ('standalone' in window.navigator) && window.navigator.standalone
      
      setIsPWA(isStandalone || (isIOS && isInStandaloneMode))
    }

    // Online/Offline status
    const handleOnline = () => {
      setIsOnline(true)
      setShowStatus(true)
      setTimeout(() => setShowStatus(false), 3000)
    }

    const handleOffline = () => {
      setIsOnline(false)
      setShowStatus(true)
    }

    checkPWA()
    setIsOnline(navigator.onLine)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  if (!showStatus && isOnline) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className={`px-6 py-3 rounded-full border backdrop-blur-xl shadow-lg ${
        isOnline 
          ? 'bg-green-900/80 border-green-400/50 text-green-100' 
          : 'bg-red-900/80 border-red-400/50 text-red-100'
      }`}>
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-400'}`} />
          {isOnline ? 'Back Online' : 'Offline Mode'}
          {isPWA && (
            <>
              <span className="mx-1">•</span>
              <span className="text-xs opacity-75">PWA Active</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}
