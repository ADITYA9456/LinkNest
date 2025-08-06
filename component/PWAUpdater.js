"use client"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PWAUpdater() {
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!isUpdating) {
          window.location.reload()
        }
      })

      navigator.serviceWorker.ready.then((registration) => {
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setUpdateAvailable(true)
              }
            })
          }
        })
      })
    }
  }, [isUpdating])

  const handleUpdate = () => {
    if ('serviceWorker' in navigator) {
      setIsUpdating(true)
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration && registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' })
        }
      })
    }
  }

  if (!updateAvailable) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-gradient-to-r from-blue-900/95 to-purple-900/95 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl max-w-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-lg">🔄</span>
          </div>
          
          <div className="flex-1">
            <h3 className="text-white font-semibold text-sm">
              Update Available
            </h3>
            <p className="text-gray-300 text-xs">
              New features and improvements
            </p>
          </div>
          
          <motion.button
            onClick={handleUpdate}
            disabled={isUpdating}
            className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isUpdating ? 'Updating...' : 'Update'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
