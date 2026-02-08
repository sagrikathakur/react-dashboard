import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Plane,
  Users,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Globe
} from 'lucide-react'

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/trips', icon: Plane, label: 'Trips' },
  { path: '/users', icon: Users, label: 'Users' },
  { path: '/reports', icon: BarChart3, label: 'Reports' },
]

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <aside
      className={`fixed left-0 top-0 h-full z-50 transition-all duration-500 ease-out ${isCollapsed ? 'w-20' : 'w-64'
        }`}
      style={{
        background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%)',
        backdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(148, 163, 184, 0.1)'
      }}
    >
      {/* Decorative gradient line */}
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-violet-500/50 via-fuchsia-500/30 to-transparent" />

      {/* Logo */}
      <div className="flex items-center gap-3 p-6 border-b border-white/5 relative overflow-hidden">
        <div className="relative">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <Globe className="w-5 h-5 text-white/70" />
          </div>
        </div>
        {!isCollapsed && (
          <div className="animate-fadeIn">
            <h1 className="text-lg font-semibold text-white">TravelHub</h1>
            <p className="text-xs text-slate-600">Dashboard</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="p-4 flex flex-col gap-2">
        {navItems.map((item, index) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            style={{ animationDelay: `${index * 100}ms` }}
            className={({ isActive }) => `
              group flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 animate-fadeIn relative overflow-hidden
              ${isActive
                ? 'text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
              }
            `}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-transparent" />
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-r-full" />
                  </>
                )}
                <item.icon className={`w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-violet-400' : ''}`} />
                {!isCollapsed && <span className="font-medium">{item.label}</span>}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5">
        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
        >
          <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
          {!isCollapsed && <span>Settings</span>}
        </NavLink>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all w-full group">
          <LogOut className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>

      {/* Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all hover:scale-110"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronLeft className="w-4 h-4" />
        )}
      </button>
    </aside>
  )
}

export default Sidebar
