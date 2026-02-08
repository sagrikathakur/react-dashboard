import { Search, Bell, Moon, Sun, User, Sparkles, Zap } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const notifications = [
    { id: 1, text: 'New booking from John D.', time: '2 min ago', unread: true, type: 'success' },
    { id: 2, text: 'Trip to Paris completed', time: '1 hour ago', unread: true, type: 'info' },
    { id: 3, text: 'New user registered', time: '3 hours ago', unread: false, type: 'default' },
  ]

  return (
    <header className="sticky top-0 z-40 px-6 py-4 flex items-center justify-between border-b border-white/5" style={{
      background: 'linear-gradient(180deg, rgba(3, 7, 18, 0.9) 0%, rgba(3, 7, 18, 0.7) 100%)',
      backdropFilter: 'blur(20px)'
    }}>
      {/* Search Bar */}
      <div className="relative w-full max-w-md group">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-violet-400 transition-colors" />
        <input
          type="text"
          placeholder="Search trips, users, destinations..."
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900/50 border border-slate-800 text-white placeholder-slate-500 focus:border-violet-500/50 transition-all duration-300 relative"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden sm:flex items-center gap-1 text-xs text-slate-600">
          <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700">⌘</kbd>
          <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700">K</kbd>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* AI Assistant Badge */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20">
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-sm text-violet-300">AI Ready</span>
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="group w-11 h-11 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/10 transition-all duration-300"
        >
          {isDarkMode ? (
            <Moon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          ) : (
            <Sun className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          )}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative w-11 h-11 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-300"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full text-xs flex items-center justify-center text-white font-bold shadow-lg shadow-violet-500/30">
              2
            </span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-full mt-3 w-80 glass rounded-2xl overflow-hidden animate-fadeIn shadow-2xl shadow-black/50">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Notifications
                </h3>
                <span className="text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-400">2 new</span>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-slate-800/50 hover:bg-white/5 transition-all cursor-pointer ${notification.unread ? 'bg-violet-500/5' : ''
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${notification.unread ? 'bg-violet-400' : 'bg-slate-600'}`} />
                      <div>
                        <p className="text-sm text-white">{notification.text}</p>
                        <p className="text-xs text-slate-500 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 text-center border-t border-slate-800">
                <button className="text-sm text-violet-400 hover:text-violet-300 font-medium">
                  View all notifications →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-all group"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center ring-2 ring-white/10 group-hover:ring-violet-500/30 transition-all">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#030712]" />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-slate-500">Premium Plan</p>
            </div>
          </button>

          {/* Profile Dropdown */}
          {showProfile && (
            <div className="absolute right-0 top-full mt-3 w-60 glass rounded-2xl overflow-hidden animate-fadeIn shadow-2xl shadow-black/50">
              <div className="p-4 border-b border-slate-800 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Admin User</p>
                  <p className="text-sm text-slate-500">admin@travelhub.com</p>
                </div>
              </div>
              <div className="p-2">
                <button className="w-full text-left px-4 py-2.5 rounded-xl text-slate-300 hover:bg-white/5 transition-all flex items-center gap-3">
                  <User className="w-4 h-4" /> My Profile
                </button>
                <button className="w-full text-left px-4 py-2.5 rounded-xl text-slate-300 hover:bg-white/5 transition-all flex items-center gap-3">
                  <Sparkles className="w-4 h-4" /> Upgrade Plan
                </button>
                <button className="w-full text-left px-4 py-2.5 rounded-xl text-red-400 hover:bg-red-500/10 transition-all">
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
