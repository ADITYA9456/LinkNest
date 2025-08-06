
export default function Offline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <span className="text-4xl">📡</span>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">
            You&apos;re Offline
          </h1>
          
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            No internet connection detected. Don&apos;t worry, you can still browse your cached content!
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">What you can do:</h2>
          
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>View previously loaded profiles</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>Browse cached pages</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>App works offline thanks to PWA</span>
            </div>
          </div>
        </div>

        <button 
          onClick={() => window.location.reload()} 
          className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/30 hover:scale-105"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
