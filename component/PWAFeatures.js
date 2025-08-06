import { motion } from 'framer-motion'

export default function PWAFeatures() {
  const features = [
    {
      icon: '📱',
      title: 'Install on Home Screen',
      description: 'Add LinkNest to your device home screen for quick access'
    },
    {
      icon: '🌐',
      title: 'Works Offline',
      description: 'View your cached profiles even without internet connection'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Instant loading with advanced caching strategies'
    },
    {
      icon: '🔄',
      title: 'Auto Updates',
      description: 'Always get the latest features automatically'
    },
    {
      icon: '💾',
      title: 'Low Data Usage',
      description: 'Smart caching reduces data consumption'
    },
    {
      icon: '🔒',
      title: 'Secure by Default',
      description: 'HTTPS required ensures your data stays safe'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/50 to-indigo-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Progressive Web App Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            LinkNest is built as a modern Progressive Web App, giving you a native app experience right in your browser
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-purple-900/80 to-pink-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Install?
            </h3>
            <p className="text-gray-300 mb-6">
              Look for the install button in your browser&apos;s address bar or use the install prompt when it appears
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <span className="text-green-400">✓</span> Chrome
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-400">✓</span> Edge
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-400">✓</span> Safari
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-400">✓</span> Firefox
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
